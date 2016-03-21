'use strict';
/* global ROOT_DIR */

var uuid = require('uuid');
var path = require('path');
var fs = require('fs');

module.exports = function KeyCtr (keyStorage, storageImagesPath) {
    
    if (typeof keyStorage !== 'object') throw new Error('Invalid keyStorage.');
    if (typeof storageImagesPath !== 'string') throw new Error('Invalid storageImagesPath.');

    var self = this;

    this.getKey = function () {
        return uuid.v4();
    };

    this.createUserStorage = function (user_dir) {
        fs.mkdirSync( path.join(storageImagesPath, user_dir) );
    };

    return function (req, res, next) {
        var key = self.getKey();
        
        keyStorage[key] = true;
        self.createUserStorage(key);

        res.status(200);
        res.send({
            "status": "success",
            "data": {
                "key": key
            },
            "message": null
        });
    };

};