"use strict";
exports.__esModule = true;
var Eager = /** @class */ (function () {
    function Eager() {
    }
    Eager.prototype.Egaer = function () {
        this.x = 5;
        this.y = 10;
    };
    Eager.getInstance = function () {
        return this.instance;
    };
    Eager.prototype.getX = function () {
        return this.x;
    };
    Eager.prototype.getY = function () {
        return this.y;
    };
    Eager.prototype.setX = function (x) {
        this.x = x;
    };
    Eager.prototype.setY = function (y) {
        this.y = y;
    };
    Eager.instance = new Eager();
    return Eager;
}());
exports["default"] = Eager;
