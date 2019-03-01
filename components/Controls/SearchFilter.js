// q=text
// date_from=unix_timestamp&
// date_to=unix_timestamp&
// type=flashcard|passage|book&
// popularity=views|likes|saves|comments&
// page=0
/**
 * TODO разбить код на отдельные классы, чтобы создание класса через фабрику ограничивало возможность установки
 * TODO недоступных полей объекта filter т.е. если мы создаем craeateSimple то не должны иметь возможности
 * TODO установить поле q(поиск) через setQuery
 * */

import * as moment from 'moment';

const FIELDS = ['q', 'date_from', 'date_to', 'type', 'popularity', 'category_id', 'page'];
const AVAILABLE_TYPES = ['flashcard', 'passage', 'book'];
const AVAILABLE_POPULARITY = ['views', 'likes', 'saves', 'comments'];

export class SearchFilter {
  constructor(fields, config = {utc: true, timeIn: 'seconds'}) {
    this.moment = config.utc ? moment.utc : moment;
    if (config.timeIn === 'milliseconds') {
      this.timeIn = config.timeIn;
    } else {
      this.timeIn = 'seconds';
    }

    this.fields = fields;
  }

  setQuery(q) {
    this.q = q ? q : null;
  }

  setCategoryId(id) {
    this.category_id = id;
  }

  setDateToday() {
    this.date = 'today';
    this.date_from = this.moment()
      .set('hour', 0)
      .set('minute', 0)
      .set('second', 0)
      .set('millisecond', 0);
    this.date_to = this.moment()
      .set('hour', 23)
      .set('minute', 59)
      .set('second', 59)
      .set('millisecond', 0);
  }
  setDateThisWeek() {
    this.date = 'this_week';
    let subDays = this.moment().day() - 1;
    subDays = subDays < 0 ? 6 : subDays;

    this.date_from = this.moment()
      .set('hour', 0)
      .set('minute', 0)
      .set('second', 0)
      .set('millisecond', 0)
      .subtract(subDays, 'days');
    this.date_to = this.moment()
      .set('hour', 23)
      .set('minute', 59)
      .set('second', 59)
      .set('millisecond', 0);
  }
  setDateThisMounth() {
    this.date = 'this_mounth';
    let subDays = this.moment().date() - 1;

    this.date_from = this.moment()
      .set('hour', 0)
      .set('minute', 0)
      .set('second', 0)
      .set('millisecond', 0)
      .subtract(subDays, 'days');
    this.date_to = this.moment()
      .set('hour', 23)
      .set('minute', 59)
      .set('second', 59)
      .set('millisecond', 0);
  }
  setDateThisYear() {
    this.date = 'this_year';
    let subDays = this.moment().dayOfYear() - 1;

    this.date_from = this.moment()
      .set('hour', 0)
      .set('minute', 0)
      .set('second', 0)
      .set('millisecond', 0)
      .subtract(subDays, 'days');
    this.date_to = this.moment()
      .set('hour', 23)
      .set('minute', 59)
      .set('second', 59)
      .set('millisecond', 0);
  }

  setDateTypeAll() {
    this.type = 'all';
  }
  setDateTypeFlashcard() {
    this.type = 'flashcard';
  }
  setDateTypePassage() {
    this.type = 'passage';
  }
  setDateTypeBook() {
    this.type = 'book';
  }

  setDatePopularityViews() {
    this.popularity = 'views';
  }
  setDatePopularityLikes() {
    this.popularity = 'likes';
  }
  setDatePopularitySaves() {
    this.popularity = 'saves';
  }
  setDatePopularityComments() {
    this.popularity = 'comments';
  }

  isToday() {
    return this.date === 'today';
  }
  isThisWeek() {
    return this.date === 'this_week';
  }
  isThisMounth() {
    return this.date === 'this_mounth';
  }
  isThisYear() {
    return this.date === 'this_year';
  }
  isTypeAll() {
    return this.type === 'all';
  }
  isTypeFlashcard() {
    return this.type === 'flashcard';
  }
  isTypePassage() {
    return this.type === 'passage';
  }
  isTypeBook() {
    return this.type === 'book';
  }
  isPopularityViews() {
    return this.popularity === 'views';
  }
  isPopularityLikes() {
    return this.popularity === 'likes';
  }
  isPopularitySaves() {
    return this.popularity === 'saves';
  }
  isPopularityComments() {
    return this.popularity === 'comments';
  }

  json(options = {timeIn: this.timeIn}) {
    let { timeIn } = options;

    return this.fields.reduce((prev, field) => {
      if (~field.search(/date/)) {
        prev[field] = this.convertMillisecondsTo(this[field].valueOf(), timeIn);

        return prev;
      }
      if (field === 'type' && this[field] === 'all') {
        return prev;
      }

      prev[field] = this[field];

      return prev;
    }, {});
  }

  convertMillisecondsTo(milliseconds, units) {
    if (units === 'seconds') return this.convertMillisecondsToSeconds(milliseconds);
  }

  convertMillisecondsToSeconds(milliseconds) {
    return Math.floor(milliseconds/1000);
  }

  static craeateSimple() {
    let filter = new SearchFilter(FIELDS.slice(1, 6));
    filter.setDateThisYear();
    filter.setDateTypeAll();
    filter.setDatePopularityViews();

    return filter;
  }

  static craeateQuery() {
    let filter = new SearchFilter(FIELDS);
    filter.setDateToday();
    filter.setDateTypeAll();
    filter.setDatePopularityViews();

    return filter;
  }
}
