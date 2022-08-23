"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resizeImages_1 = require("../../utilities/resizeImages");
describe("Test function in utilities", function () {
    it("configPathImage(name) must take correct image name to be truthy", function () {
        var name = "encenadaport";
        expect((0, resizeImages_1.configPathImage)(name)).toBeTruthy();
    });
});
