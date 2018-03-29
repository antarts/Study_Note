var express = require('express');  //2017-12-10
var app = express();

class Container {
  constructor(val) {
    this.val = val;
  }

  map (fun) {
    return new Container(fun(this.val))
  }
}

var obj = new Container(1);

var obj2 = obj.map(function (val) {
  return val + 1
});

console.log(obj2.val);

module.exports = app;