var express = require('express');  //2017-12-10
var app = express();

class Container {
  constructor(val) {
    this.val = val;
  }
}

var obj = new Container(1);

function addOne(val) {
  return val + 1;
}

var value = addOne(obj.val);

var obj2 = new Container(value);

console.log(obj2.val);
console.log(obj.val);

module.exports = app;