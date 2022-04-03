"use strict";
exports.__esModule = true;
var Lazy = /** @class */ (function () {
    function Lazy() {
    }
    Lazy.prototype.Lazy = function () {
        this.x = 19;
        this.y = 56;
    };
    Lazy.getInstance = function () {
        if (this.instance == null) {
            this.instance = new Lazy();
        }
        return this.instance;
    };
    Lazy.prototype.getX = function () {
        return this.x;
    };
    Lazy.prototype.getY = function () {
        return this.y;
    };
    Lazy.prototype.setX = function (x) {
        this.x = x;
    };
    Lazy.prototype.setY = function (y) {
        this.y = y;
    };
    Lazy.instance = null;
    return Lazy;
}());
exports["default"] = Lazy;
