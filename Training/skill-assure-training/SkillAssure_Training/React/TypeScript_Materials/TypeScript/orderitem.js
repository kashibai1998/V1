"use strict";
exports.__esModule = true;
exports.Orderitem = void 0;
var Orderitem = /** @class */ (function () {
    function Orderitem(_quantity, _item) {
        this.item = [];
        for (var _i = 0, _item_1 = _item; _i < _item_1.length; _i++) {
            var items = _item_1[_i];
            this.item.push(items);
            this.quantity = _quantity;
            this.totalPrice = _quantity * items.getPrice();
            break;
        }
    }
    Orderitem.prototype.setQuantity = function (_qty) {
        this.quantity = _qty;
    };
    Orderitem.prototype.getQuantity = function () {
        return this.quantity;
    };
    Orderitem.prototype.getItem = function () {
        return this.item;
    };
    return Orderitem;
}());
exports.Orderitem = Orderitem;
