var R = require('ramda');  //2017-12-17
var util = require('util');
var fs = require('fs');
var dirPathString = './test_data';
var outputPathString = './scantxt.txt';

const readdir = util.promisify(fs.readdir);

function writeFile(path) {
  return function(content) {
    return util.promisify(fs.writeFile)(path, content);
  };
}

readdir(dirPathString)
  .then(R.filter(R.test(/.json/)))
  .then(R.filter(R.compose(R.not, R.isNil)))
  .then(writeFile(outputPathString))
  .catch(console.log);