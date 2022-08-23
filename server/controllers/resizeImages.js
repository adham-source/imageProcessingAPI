"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resizeImages_1 = require("../utilities/resizeImages");
var getImageAfterResizing = function (req, res) {
    var imageThumb = (0, resizeImages_1.configPathImage)(req.query.name).imageThumb;
    res.status(200).sendFile(imageThumb);
};
exports.default = getImageAfterResizing;
