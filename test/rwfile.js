/**
* Lib
*/

// const path = require('path');
const fs = require('fs');
// const superagent = require('superagent');
// const cheerio = require('cheerio');
// const EventEmitter = require('events');

/**
* Variable
*/

var filePathString = './test/write_file_name.md';
var dirPathString = './topic/';

function callbackRead(err, files) {
  if (err) {
    fileContent(err);
  }
  if (files.length > 0) {
    console.log(files);
    // var fileDate = files.map(function(item) {
    //   return item;
    // })
    var fileData = [];
    for (var i = 0; i < files.length; i++) {
    fileData[i] = i + 1 + '.'+files[i]+'\n';
    }
    fileContent(fileData);
  } else {
    fileContent('没有找到任何文件');
  }
}

function callbackWrite(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}

function fileContent(fileContent) {
  fs.writeFile(filePathString, fileContent, callbackWrite);
}

fs.readdir(dirPathString, callbackRead);
