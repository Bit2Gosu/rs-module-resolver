"use strict";
(function (FileType) {
    FileType[FileType["DIRECTORY"] = 0] = "DIRECTORY";
    FileType[FileType["REGULAR_FILE"] = 1] = "REGULAR_FILE";
})(exports.FileType || (exports.FileType = {}));
var FileType = exports.FileType;
var File = (function () {
    function File(fileType, name, children) {
        this.fileType = fileType;
        this.name = name;
        this.children = children;
    }
    File.prototype.addChild = function (child) {
        this.children.push(child);
    };
    File.prototype.getAncestors = function () {
        var result = [];
        this.children.forEach(function (child) {
            result.push(child);
            result.concat(child.getAncestors());
        });
        return result;
    };
    return File;
}());
exports.File = File;
