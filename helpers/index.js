import axios from 'axios';

export const setHttpToken = (token) => {
    if (!token) {
        delete axios.defaults.headers.common['Authorization']
    }
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
};

export const isScrolledIntoView = (el, partial = false) => {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  if (partial) {
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  }
  return isVisible;
};

export const runIf = (condition, callback) => {
  if (condition) {
    return callback();
  }
};

export const cloneObject = (obj) => JSON.parse(JSON.stringify(obj));

/**
 * @desc - Соединяет объекты с одним уровнем вложенности "объект в объект"
 * */
export const mergeObjects = (obj1, obj2) => {
  return Object
    .keys(obj1)
    .reduce((newState, key) => {
      if (obj2[key] === undefined) {
        newState[key] = obj1[key];

        return newState;
      }
      if (typeof obj2[key] === 'object') {
        newState[key] = { ...obj1[key], ...obj2[key] };

        return newState;
      }

      newState[key] = obj2[key];

      return newState;
    }, {});
};

export const sortBy = (items, sortBy) => {
  return items.sort((a, b) => {
    let valueA = a[sortBy.key];
    let valueB = b[sortBy.key];

    if (sortBy.type === 'date') {
      if (+(new Date(valueA)) < +(new Date(valueB))) {
        return 1;
      } else if (+(new Date(valueA)) > +(new Date(valueB))) {
        return -1;
      } else {
        return 0;
      }
    }
    if (sortBy.type === 'number' || sortBy.type === 'string') {
      if (valueA > valueB) {
        return 1;
      } else if (valueA < valueB) {
        return -1;
      } else {
        return 0;
      }
    }
  });
};

export const filterBy = (items, searchPhrase, filterBy = 'title') => {
  if (!searchPhrase) return items;

  return items.filter(item => ~item[filterBy].toUpperCase().search(searchPhrase.toUpperCase()));
};

export const filterByCategoryId = (items, categoryId) => {
  if (!categoryId) return items;
  return items.filter(item => item.category_id == categoryId);
};

export const deleteSpecialCharacters = (data, fields) => {
  for (let i = 0, length = data.length; i < length; i++) {
    for (let j = 0, length = fields.length; j < length; j++) {
      if (typeof data[i][fields[j]] !== 'string') continue;
      data[i][fields[j]] = data[i][fields[j]].replace(/[<>]/g, "");
    }
  }
};
