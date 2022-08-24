"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var configImage_1 = __importDefault(require("../../utilities/configImage"));
describe("Test function in utilities", function () {
    var imageAllowName = ['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica'];
    describe("Test configImage.imageNamesAllow(name)", function () {
        it("configImage.imageNamesAllow(name) The image name must be correct", function () {
            expect(configImage_1.default.imageNamesAllow(imageAllowName[0])).toEqual(true);
        });
        it("configImage.imageNamesAllow(name) The image name is incorrect", function () {
            expect(configImage_1.default.imageNamesAllow("hjkhkl")).toEqual(false);
        });
    });
});
