"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var morgan_1 = __importDefault(require("morgan"));
var app = (0, express_1.default)();
var PORT = 5000;
app.use((0, morgan_1.default)("dev"));
app.get('/', function (req, res) {
    res.send('Hello! There.');
});
app.use('/api', routes_1.default);
app.get('*', function (req, res) {
    res.status(404).send("Oops! This page isn\'t found.");
});
app.listen(PORT, function () { return console.info("sever is runing on http://localhost:".concat(PORT)); });
exports.default = app;
