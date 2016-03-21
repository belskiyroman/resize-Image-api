'use strict';
/* global ROOT_DIR */

var fs = require('fs');
var path = require('path');
var keyStorage = require(path.join(ROOT_DIR, 'keyStorage'));

module.exports = function KeyStorage () {
    var ONE_MIN = 1000;
    var saveKeyStorage = function () {
        var keyStorage_json = JSON.stringify(keyStorage);
        var file = fs.createWriteStream( path.join(ROOT_DIR, 'keyStorage.json') );
        file.end(keyStorage_json);
        setTimeout(saveKeyStorage, ONE_MIN);
    };

    saveKeyStorage();
    return keyStorage;
};