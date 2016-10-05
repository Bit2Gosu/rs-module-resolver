"use strict";
/// <reference path="./types.d.ts" />
var node_dir_1 = require('node-dir');
(function () {
    var dirName = './testing';
    node_dir_1.readFiles(dirName, function (err, content, filename, next) {
        if (err)
            throw err;
        console.log(filename + ": " + content);
        next();
    }, function (err, files) {
        if (err)
            throw err;
        console.log('finished reading files:', files);
    });
})();
