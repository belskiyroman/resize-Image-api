'use strict';
/* global ROOT_DIR */

var path = require('path');
var fs = require('fs');

module.exports = function ImageResizeCtr (storageImagesPath) {

    if (typeof storageImagesPath !== 'string') throw new Error('Invalid storageImagesPath.');

    var self = this;

    return function (req, res, next) {

        res.status(201);
        res.send({
          "status": "success",
          "data": {
            "link": link
          },
          "message": null
        });
    };

};