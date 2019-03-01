Array.prototype.removeByIndex = function (index) {
  let array = this;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === index) {
      array.splice(i, 1);
    }
  }
};
Array.prototype.remove = function () {
  let what, a = arguments, L = a.length, ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};

Array.prototype.last = function () {
  let array = this;
  return array[array.length - 1]
};
Array.prototype.first = function (n) {
  let array = this;
  if (array == null)
    return void 0;
  if (n == null)
    return array[0];
  if (n < 0)
    return [];
  if (n === 'undefined')
    n = 1;
  return array.slice(0, n);
};
window.getSlug = function (text) {
  if (Array.isArray(text)) {
    text = text.join(' ')
  }
  return text.toString().toLowerCase()
  .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};
window.ucFirst = function(str) {
  if (str.length) {
    str = str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str;
};
window.isUndefined = function (item) {
  return (typeof item === 'undefined')
};
window.isNumber = function (item) {
  return (typeof item === 'number')
};
window.isNull = function (item) {
  return item === null
};
window.isString = function (item) {
  return (typeof item === 'string')
};
window.isArray = function (item) {
  return Array.isArray(item);
};
window.isObject = function (item) {
  return (item !== null && typeof item === 'object')
};
window.isBool = function (item) {
  return (typeof item === 'boolean')
};
window.isDate = function (val) {
  return toString.call(val) === '[object Date]';
};
window.isFile = function (val) {
  return toString.call(val) === '[object File]';
};
window.isFunction = function (val) {
  return toString.call(val) === '[object Function]';
};
window.trim = function (str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
};
window.isEmpty = function (item) {
  return (item === '' || item === null || item === 'undefined' || (Array.isArray(item) && item.length === 0) || JSON.stringify(item) === '{}');
};
