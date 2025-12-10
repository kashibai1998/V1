"use strict";
exports.__esModule = true;
exports.Item = void 0;
var idgenerator_1 = require("./idgenerator");
var Item = /** @class */ (function () {
    function Item(_price, _description) {
        this.price = _price;
        this.description = _description;
    }
    Item.prototype.getItemId = function () {
        return idgenerator_1.Idgenerator.itemid++;
    };
    Item.prototype.getPrice = function () {
        return this.price;
    };
    Item.prototype.getDescription = function () {
        return this.description;
    };
    return Item;
}());
exports.Item = Item;
