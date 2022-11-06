var fs = require('fs');
var path = require('path');


function getInfo(filename: string) {
    var text = fs.readFileSync("./data/" + filename + ".json").toString();
    return JSON.parse(text);
}

module.exports = getInfo;