"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resizeImages_1 = __importDefault(require("../../middlewares/resizeImages"));
var resizeImages_2 = __importDefault(require("../../utilities/resizeImages"));
var resizeImages_3 = __importDefault(require("../../controllers/resizeImages"));
var resizeImages = express_1.default.Router();
resizeImages.get('/', resizeImages_1.default, resizeImages_2.default, resizeImages_3.default);
exports.default = resizeImages;
