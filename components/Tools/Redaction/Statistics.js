/**
 * @desc - Конструктор статистики сессии для компонента Redaction
 * @return Object {
 *   session_length: null, // длительность сессии в секундах.
 *   words_total: null, // общее число слов в заметках.
 *   words_memorized: null, // максимальное число слов, которые были скрыты при чтении.
 *   words_memorized_avg: null, // среднее число скрытых слов в минуту.
 *   words_memorized_max: null, // максимальное число скрытых слов среди всех заметок.
 *   memorization_min: null, // минимальный процент скрытых слов (значение ползунка).
 *   memorization_max: null // максимальный процент скрытых слов (значение ползунка).
 * }
 * */

export class Statistics {
  constructor(rawData) {
    /**
     * sessionStart: null,
     * sessionEnd: null,
     * */
    this.session_length = this.getSessionLength(rawData.sessionStart, rawData.sessionEnd);

    // получаем из items. общее число слов в заметках
    this.words_total = this.getWordsCountFromItems(rawData.items);

    // информация о кол-ве скрытых слов, времени скрытия и для какой заметки происходило скрытие
    // получаем из hiddenWords
    let wordsMemorized = this.getWordsMemorized(rawData.hiddenWords, this.session_length);
    this.words_memorized = wordsMemorized.max; // максимальное число слов, которые были скрыты при чтении.
    this.words_memorized_avg = wordsMemorized.avg; // среднее число скрытых слов в минуту.
    this.words_memorized_max = wordsMemorized.maxPerItem; // максимальное число скрытых слов среди всех заметок.

    // получаем из percentValues
    let minAndMaxVal = this.getMinAndMaxVal(rawData.percentValues);
    this.memorization_min = minAndMaxVal.min/100; // минимальный процент скрытых слов (значение ползунка).
    this.memorization_max = minAndMaxVal.max/100; // максимальный процент скрытых слов (значение ползунка).

    // для графиков
    this.memorization_levels = this.getMemorizationLevels(rawData.percentValues);
    this.memorization_per_minutes = this.getMemorizationPerMinutes(rawData.hiddenWords);

    /**
     * percentValues сделать массив уникальных значений и записать в memorization_levels
     * hiddenWords превратить в массив элементов где элемент это кол-во скрытых элементов в первую. вторую
     * и т.д. минуту. записать в массив memorization_per_minutes
     * */

  }

  getMemorizationLevels(percentValues) {
    return percentValues.reduce((memlevels, next) => {
      if (memlevels.length === 0) {
        memlevels.push(next);

        return memlevels;
      }
      if (memlevels.slice(-1)[0] === next) {
        return memlevels;
      }

      memlevels.push(next);
      return memlevels;
    }, []);
  }

  getMemorizationPerMinutes(hiddenWords) {
    let lastTimeStamp = null;
    return hiddenWords.reduce((prev, next) => {
      if (prev.length === 0) {
        prev.push(next.count);
        lastTimeStamp = next.date;

        return prev;
      }
      if (lastTimeStamp + 1000*60 > next.date) {
        prev[prev.length - 1] += next.count;
      } else {
        // определим на сколько минут прошло после lastTimeStamp + 1 минута.
        let timeBorder = lastTimeStamp + 1000*60;
        let minutesHavePassed = Math.floor((next.date - timeBorder)/1000/60);
        // на каждую пройденную
        // минуту создадим дополнительный элемент массива равный последнему.
        for (let i = 0; i < minutesHavePassed; i++) {
          prev.push(prev[prev.length - 1]);
          // обновим отпечаток времени на минуту вперед
          lastTimeStamp = lastTimeStamp + 1000*60;
        }
        // добавим еще один элемент в массив со значением текущего элемента.
        prev.push(next.count);
        // обновим отпечаток времени на минуту вперед
        lastTimeStamp = lastTimeStamp + 1000*60;
      }

      return prev;
    }, []);
  }

  getWordsMemorized(hiddenWords, sessionLength) {
    let res = {max: 0, avg: null, maxPerItem: null};

    res.max = this.getMaxMemorized(hiddenWords);
    res.maxPerItem = this.getMaxPerItemMemorized(hiddenWords);
    res.avg = this.getAvgPerMinMemorized(hiddenWords, this.convertMillisecondsToMinutes(sessionLength));

    return res;
  }

  convertMillisecondsToMinutes(milliseconds) {
    return Math.round((milliseconds/1000/60)*100)/100;
  }

  getAvgPerMinMemorized(hiddenWords, sessionMinutess) {
    let countHiddenWordsPerSession = hiddenWords.reduce((prev, next) => {
      return prev += next.count;
    }, 0);
    let speed = Math.floor(countHiddenWordsPerSession/sessionMinutess);

    return speed;
  }

  getMaxMemorized(hiddenWords) {
    let maxMemorized = 0;
    let maxHiddenWords = {};
    hiddenWords.forEach(item => {
      if (!maxHiddenWords[item.id]) {
        maxHiddenWords[item.id] = item;
      } else {
        if (maxHiddenWords[item.id].count < item.count) {
          maxHiddenWords[item.id] = item;
        }
      }
    });
    for (let index in maxHiddenWords) {
      maxMemorized += maxHiddenWords[index].count;
    }
    return maxMemorized;
  }

  getMaxPerItemMemorized(hiddenWords) {
    let maxPerItem = null;
    hiddenWords.forEach(item => {
      if (maxPerItem === null) {
        maxPerItem = item.count;
      } else {
        if (maxPerItem < item.count) {
          maxPerItem = item.count;
        }
      }
    });
    return maxPerItem;
  }

  getMinAndMaxVal(values) {
    return values.reduce((prev, next) => {
      if (prev.min === null) {
        prev.min = next;
      }
      if (prev.max === null) {
        prev.max = next;
      }

      if (prev.min > next) {
        prev.min = next;
      }
      if (prev.max < next) {
        prev.max = next;
      }

      return prev;
    }, {min: null, max: null});
  }

  getSessionLength(startTime, endTime) {
    return endTime - startTime;
  }

  getWordsCountFromItems(items) {
    return items.reduce((prev, next) => {
      return prev + next.content.reduce((prev, next) => {
        if (next.type !== 'text') return prev;

        return prev + this.getWordsCount(next.value)
      }, 0);
    }, 0);
  }

  getStringFromObj(obj, type) {
    let str;

    if (type === 'text') {
      str = obj.text;
    }
    if (type === 'flascard') {
      str = obj.term_definition;
    }
    if (type === 'passage') {
      str = obj.passage_text;
    }
    if (type === 'book') {
      str = obj.passage_text;
    }

    return str.replace(/ +/g, " ");
  }

  getWordsCount(str, separator = " ") {
    return str.split(separator).length;
  }
}
