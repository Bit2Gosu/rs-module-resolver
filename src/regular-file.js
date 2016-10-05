"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var file_1 = require("./file");
var RegularFile = (function (_super) {
    __extends(RegularFile, _super);
    function RegularFile(name) {
        _super.call(this, file_1.FileType.REGULAR_FILE, name);
    }
    return RegularFile;
}(file_1.File));
exports.RegularFile = RegularFile;
