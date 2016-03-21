'use strict';
/* global ROOT_DIR */

var path = require('path');
var fs = require('fs');
var sizeOf = require('image-size');

module.exports = function ImageListCtr (storageImagesPath) {

    if (typeof storageImagesPath !== 'string') throw new Error('Invalid storageImagesPath.');

    var self = this;

    this.getImagesList = function (user_dir) {
        return fs.readdirSync( path.join(storageImagesPath, user_dir) );
    };

    this.getSizeImage = function (file, user_dir) {
        return sizeOf( path.join(storageImagesPath, user_dir, file) );
    };

    this.prepareData = function (collectionOfImages, user_dir) {
        return collectionOfImages.map(function (file) {
            var url = 'images/' + file;
            var imageSize = self.getSizeImage(file, user_dir);

            return {
                url: url,
                width: imageSize.width,
                height: imageSize.height
            };
        });
    };


    return function (req, res, next) {
        var collectionOfImages = self.getImagesList(req.query.key);
        var data = self.prepareData(collectionOfImages, req.query.key);

        res.status(200);
        res.send({
          "status": "success",
          "data": {
            "images": data
          },
          "message": null
        });
    };

};
