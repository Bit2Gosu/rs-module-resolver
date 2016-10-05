"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var file_1 = require("./file");
var Directory = (function (_super) {
    __extends(Directory, _super);
    function Directory(name) {
        _super.call(this, file_1.FileType.DIRECTORY, name, []);
        this.name = name;
    }
    return Directory;
}(file_1.File));
exports.Directory = Directory;
