var fs = require('fs');

function readFile(callback) {
  fs.readFile('./package.json', 'utf-8',
    function (err, content) {
      if (err) {
        callback(err);
        return;
      }

      callback(null, content);
    });
}

// part two

function readFilePromise() {
  return new Promise(function (resolve, reject) {
    fs.readFile('./package.json', 'utf-8',
      function (err, content) {
        if (err) {
          reject(err);
          return;
        }

        resolve(content);
      });
  });
}

module.exports = { readFile }