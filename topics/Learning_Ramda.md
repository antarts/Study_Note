## 修改之前的作业

这是之前做的文件读取脚本的作业

``` javascript
var fs = require('fs');

var filePathString = '../write_filename_from_project_words-from-the-heart.txt';

var dirPathString = '../words-from-the-heart/';

function callbackRead(err, files) {
  if (err) {
    fileContent(err);
  }
  if (files.length > 0) {
    console.log(files);
    var fileData = [];
    for (var i = 0; i < files.length; i++) {
      fileData[i] = i + 1 + '.'+files[i]+',\n';
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


// 这是第五版，使用不同的参数多次回调函数。哈哈哈，这是老师留的 bug，处理错误忘记return或回调，大部分的新手对这个问题视若无睹，我就是其中一位。现在对这个问题有一点点概念，我离高手又近了一步！
```

以下是用 Promise 做的改进

``` javascript

const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);

const readdir = util.promisify(fs.readdir);
const writeFile = util.promisify(fs.writeFile);

readdir(dirPathString)
  .then(files => {
      var names = [];
      for (let i = 0; i < files.length; i++) {
          if (files[i].endsWith('.json') {
              names.push(files[i]);
          })
      }
      return names;
  })
  .then(names => {
      return writeFile(outputPathString, names);
  })
  .catch(console.log);

  writeFile(outputPathString, names)
    .then()
    .catch();

```

再用 Ramda 优化：

``` javascript

var R = require('ramda');

var names = files.map(item => {
    if (item.endsWith('.json') {
        return item;
    })
    // return undefined; 默认的语句。
});

return R.filter(R.compose(R.not, R.isNil))(names);

```

再进一步优化：

``` javascript

const filterJson = R.compose(R.filter(R.compose(R.not, R.nil), R.filter(R.test(/.json/))));

```

再优化 writeFile：
``` javascript

function writeFile(path) {
    return function (content) {
        return util.promisefy(fs.writeFile)(path, content);
    }
}

writeFile(outputPathString)('abc');

```

包装成一个Promise：

``` javascript

readdir(dirPathString)
  .then(filterJson)
  .then(writeFileL(outputPathString))
  .catch(console.log);

```

终极优化：

``` javascript
var R = require('ramda');
var util = require('util');
var fs = require('fs');
var dirPathString = './';
var outputPathString = './lixiang.txt'; 

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
```