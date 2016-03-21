'use strict';
/* global ROOT_DIR */

var bodyParser = require('body-parser');
var path = require('path');
var ImageListCtr = require(path.join(ROOT_DIR, 'controllers', 'ImageListCtr'));
var ImageResizeCtr = require(path.join(ROOT_DIR, 'controllers', 'ImageResizeCtr'));
var KeyCtr = require(path.join(ROOT_DIR, 'controllers', 'KeyCtr'));
var CheckKey = require(path.join(ROOT_DIR, 'middleware', 'CheckKey'));
var Error = require(path.join(ROOT_DIR, 'middleware', 'Error'));
var BadRequest = require(path.join(ROOT_DIR, 'middleware', 'BadRequest'));

module.exports = function Router (app, keyStorage, storageImagesPath) {
    app.set('etag', false);
    app.use(app.use(bodyParser.urlencoded({ extended: false })));
    app.get('/key', new KeyCtr(keyStorage, storageImagesPath) );
    app.use(new CheckKey(keyStorage) );
    app.get('/images-list', new ImageListCtr(storageImagesPath) );
    app.post('/image-resize', new ImageResizeCtr(storageImagesPath) );
    app.use('*', new BadRequest());
    app.use(new Error() );

    return app;
};