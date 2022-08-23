"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var imageNames_1 = __importDefault(require("../utilities/imageNames"));
var imageNamesAllow = function (name) {
    if (imageNames_1.default.includes(name))
        return true;
    return false;
};
var validateResizeImagesQuery = function (req, res, next) {
    var name = req.query.name;
    var isValidName = imageNamesAllow(name);
    var width = parseInt(req.query.width);
    var height = parseInt(req.query.height);
    if (Object.entries(req.query).length === 0)
        return res.send('Error! Please process image inot url query adding name, width and height');
    if (name === undefined || name === '')
        return res.status(400).send('Error! Please write name image.');
    if (!isValidName)
        return res.status(400).send('This name of image not exist. Write valid name.');
    if (width === undefined || !width)
        return res.status(400).send('Error! Please write width image and must be number.');
    if (height === undefined || !height)
        return res.status(400).send('Error! Please write height image and must be number.');
    next();
};
exports.default = validateResizeImagesQuery;
