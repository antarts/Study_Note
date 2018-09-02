// var express = require('express');
// var app = express();
// var fs = require('fs');

// fs.readFile('./package.json', 'utf-8',
//    function (err, content) {
//      if (err) {
//        return;
//      }

//      console.log(content);
//    }
// );

// module.exports = app;


/* ---1---began */
// const print = console.log

// function first(array) {
//   return (array != null && array.length)
//   ? array[0]
//   : undefined
// }
/* ---1---end */

/* ---2---began */
// const print = console.log

// const MAX_SAFE_INTEGER = 9007199254740991

// function isLength(value) {
//   value = +value
//   return typeof value == 'number' &&
//   value !== NaN &&
//   value > -1 &&
//   value % 1 == 0 &&
//   value <= MAX_SAFE_INTEGER
// }

/**2 end */

// const print = console.log

// function clamp(number, lower, upper) {
//   number = +number
//   lower = +lower
//   upper = +upper

//   lower = lower === lower ? lower : 0
//   upper = upper === upper ? upper : 0

//   if (number === number) {
//     number = number <= upper ? number : upper
//     number = number >= lower ? number : lower
//   }

//   return number
// }

/* end */

// const print = console.log

// function copyArray(source, array) {
//   let index = -1
//   const length = (source != null && source.length)
//   ? source.length
//   : undefined

//   array || (array = new Array(length))
//   while (++index < length) {
//     array[index] = source[index]
//   }
//   return array
// }

/* end */

// const print = console.log

// function chunk(array, size) {
//   size = Math.max(size, 0)
//   const length = array == null ? 0 : array.length

//   if (!length || size < 1) {
//     return []
//   }

//   let index = 0
//   let resIndex = 0
//   const result = new Array(Math.ceil(length / size))

//   while (index < length) {
//     result[resIndex++] = array.slice(index, (index += size))
//   }

//   return result
// }

/* end */

// const print = console.log

// function filter(array, condition) {
//   let index = -1
//   let resIndex = 0
//   const length = array == null ? 0 : array.length
//   const result = []

//   while (++index < length) {
//     const value = array[index]
//     if (condition(value, index, array)) {
//       result[resIndex++] = value
//     }
//   }
//   return result
// }

// const users = [
//   { 'user': 'barney', 'active': true },
//   { 'user': 'fred', 'active': false}
// ]

// print(filter(users, ({ active }) => active))

// const scores = [100, '90', '88', 97, 99]

// print(filter(scores, (item ) => item === +item))

/* end */

// const print = console.log

// function indexOf(array, value, fromIndex) {
//   const length = array == null ? 0 : array.length
//   if (!length) {
//     return -1
//   }
//   let index = fromIndex == null ? 0 : +fromIndex
//   if (index < 0) {
//     index = Math.max(length + index, 0)
//   }

//   while (++index < length) {
//     if (array[index] === value) {
//       return index
//     }
//   }

//   return -1
// }

// print(indexOf([1, 2, 1, 2], 2))

// print(indexOf([1, 2, 1, 2, 3, 8], 2, 2))

// print(indexOf([1, 2, 1, 2, 3, 8], 2, -3))

/* end */

// const print = console.log

// function innerGetValue(object, path) {
//   let index = 0
//   const length = path.length

//   while (object != null && index < length) {
//     object = object[`${path[index++]}`]
//   }
//   return (index && index == length) ? object : undefined
// }

// function getValue(object, path, defaultValue) {
//   const result = object == null ? undefined : innerGetValue(object, path)
//   return result === undefined ? defaultValue : result
// }

// print(getValue({ 'a': [{ 'b': { 'c': 3 } }] }, ['a', '0', 'b', 'c']));

// print(getValue({ 'a': [{ 'b': { 'c': 3 } }] }, ['a', 0, 'b', 'c']));

// print(getValue({ 'a': [{ 'b': { 'c': 3 } }] }, ['a', 1, 'b', 'c']));

// print(getValue({ 'a': [{ 'b': { 'c': 3 } }] }, ['a', 1, 'b', 'c'], 0));

// print(getValue({ 'a': { 'b': { 'c': 1 } } }, ['a', 'd', 'c']));

// print(getValue({ 'a': { 'b': { 'c': 1 } } }, ['a', 'd', 'c'], 0));


/* end */

/* 数据结构 */

const print = console.log

function isObject(value) {
  const type = typeof value
  return value != null && 
  (type == 'object' || type == 'function')
}

print(isObject({}))