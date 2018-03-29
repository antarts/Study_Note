var express = require('express');  //2017-12-10
var app = express();
var fs = require('fs-extra');

class Container {
  constructor(val) {
    this.val = val;
  }

  then(f) {
    return new Container(f(this.val))
  }
}

var obj = new Container('js');

obj
  .then(function(val) {
    return 'hello ' + val;
  })
  .then(function(val) {
    return val + ', how are u';
  })
  .then(function(val) {
    return val + '!!!!!!!!!';
  })
  .then(function(val) {
    console.log(val);
  })
  //.catch()

module.exports = app;