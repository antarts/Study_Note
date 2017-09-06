(function(global) {

    var jsonfile = require('jsonfile');

    var loadPathString = './public/all_words.json';

    var wordsList = jsonfile.readFileSync(loadPathString)

    // console.log(wordsList);
    global.wordsList = wordsList;
})(this);