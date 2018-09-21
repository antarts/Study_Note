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

// const print = console.log

// function isObject(value) {
//   const type = typeof value
//   return value != null && 
//   (type == 'object' || type == 'function')
// }

// print(isObject({}))

// print(isObject(new Number(1)))

/* end */

// const print = console.log

// function mapObject(object, iteratee) {
//   const props = Object.keys(object)
//   const result = new Array(props.length)

//   iteratee || (iteratee = value => value)

//   props.forEach((key, index) => {
//     result[index] = iteratee(object[key], key, object)
//   })
//   return result
// }

// const obj = {a: 1, b: 2}

// print(mapObject(obj))

// print(mapObject(obj, (value) => {
//   return value
// }))

// print(mapObject(obj, (value, key) => {
//   return key + value
// }))

/* end */

// const print = console.log

// function mapToArray(map) {
//   let index = -1
//   const result = new Array(map.size)

//   map.forEach((value, key) => {
//     result[++index] = [key, value]
//   })
//   return result
// }

// const map = new Map()

// let keyString = 'a string';
// let keyObj = {};
// let keyFunc = function () { };

// map.set(keyString, "value associated with 'a string'");
// map.set(keyObj, 'value associated with keyObj');
// map.set(keyFunc, 'value associated with keyFunc');

// print(map)

// print(mapToArray(map))

/* end */

// String({score: 100})

// Number({a: 1})

// Boolean({a: 1})

// var obj1 = {name: 'xiaoming', score: 100}
// var obj2 = {name: 'xiaohua', score: 80}
// obj1 + obj2

// const print = console.log

// var obj1 = {
//   name: 'xiaoming',
//   score: 100,
//   [Symbol.toPrimitive](hint) {
//     console.log(`hint: ${hint}`);
//     return hint == "default" ? this.valueOf() : this.toString();
//   }
// }

// var obj2 = {
//   name: 'xiaohua',
//   score: 80,
//   [Symbol.toPrimitive](hint) {
//     console.log(`hint: ${hint}`);
//     return hint == "default" ? this.toString() : this.valueOf();
//   }
// }

// obj1.toString = function () {
//   console.log('obj1.toString')
//   return this.name
// }

// obj2.toString = function () {
//   console.log('obj2.toString')
//   return this.name
// }

// obj1.valueOf = function () {
//   console.log('obj1.valueOf')
//   return this.score
// }

// obj2.valueOf = function () {
//   console.log('obj2.valueOf')
//   return this.score
// }

// print(obj1 + obj2)

// print(obj1 - obj2)

// print(obj1 > obj2)

// print(obj1 == obj2)

/* end */

const print = console.log

function slice(array, start, end) {
  let length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  start = start == null ? 0 : start
  end = end === undefined ? length : end

  if (start < 0) {
    start = -start > length ? 0 : (length + start)
  }
  end = end > length ? length : end 
  if (end < 0) {
    end += length
  }
  length = start > end ? 0 : (end - start)

  let index = -1
  const result = new Array(length)
  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}

print(slice([1, 2, 3, 4, 5, 6, 7], 2))

print(slice([1, 2, 3, 4, 5, 6, 7], 2, 5))

print(slice([1, 2, 3, 4, 5, 6, 7], 2, 10))

print(slice([1, 2, 3, 4, 5, 6, 7], -2, 11))

print(slice([1, 2, 3, 4, 5, 6, 7], -6, -1))