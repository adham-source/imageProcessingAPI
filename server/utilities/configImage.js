"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var imageNames = ['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica'];
var imageNamesAllow = function (name) {
    if (imageNames.includes(name))
        return true;
    return false;
};
var configPathImage = function (queryParams) {
    var iamgePath = path_1.default.join(__dirname, "../../assets/images/full/".concat(queryParams.name, ".jpg"));
    var imageThumb = path_1.default.join(__dirname, "../../assets/images/thumbnail/".concat(queryParams.name, "_").concat(queryParams.width, "_").concat(queryParams.height, ".jpg"));
    return { iamgePath: iamgePath, imageThumb: imageThumb };
};
exports.default = { imageNamesAllow: imageNamesAllow, configPathImage: configPathImage };
