'use strict';
/* global ROOT_DIR */

global.ROOT_DIR = process.cwd();

var express = require('express');
var program = require('commander');
var path = require('path');
var Router = require(path.join(ROOT_DIR, 'Router'));
var KeyStorage = require(path.join(ROOT_DIR, 'KeyStorage'));

program
  .version('0.0.1')
  .option('-p [], --port []', 'port')
  .option('-s [], --storage []', 'storage for images')
  .parse(process.argv);

var storageImagesPath = process.env.STORAGE || program.STORAGE || program.S || path.join(ROOT_DIR, 'images');
var port = process.env.PORT || program.port || program.P || 8080;
var app = express();
var keyStorage = new KeyStorage();
var api = new Router(app, keyStorage, storageImagesPath);
api.listen(port, function () {
    console.log('Server started: http://127.0.0.1:' + port);
});