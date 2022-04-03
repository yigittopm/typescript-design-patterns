"use strict";
exports.__esModule = true;
var lazyLoading_1 = require("./lazyLoading");
var a1 = new lazyLoading_1["default"]();
var a2 = new lazyLoading_1["default"]();
console.log("---BEFORE---");
console.log(a1.getX(), a1.getY());
console.log(a2.getX(), a2.getY());
console.log("---AFTER---");
// console.log(a1.getX(), a1.getY())
// console.log(a2.getX(), a2.getY())
