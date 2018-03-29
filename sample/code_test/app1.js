var express = require('express');
var app = express();
var fs = require('fs');

fs.readFile('./package.json', 'utf-8',
   function (err, content) {
     if (err) {
       return;
     }

     console.log(content);
   }
);

module.exports = app;