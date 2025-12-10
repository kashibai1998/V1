"use strict";
exports.__esModule = true;
exports.Order = void 0;
var idgenerator_1 = require("./idgenerator");
var Order = /** @class */ (function () {
    function Order() {
        this.orderItem = [];
        this.orderId = idgenerator_1.Idgenerator.getOrderId();
    }
    Order.prototype.getOrderId = function () {
        return this.orderId;
    };
    Order.prototype.getOrderItem = function () {
        return this.orderItem;
    };
    Order.prototype.setOrderItem = function (_orderItem) {
        this.orderItem.push(_orderItem);
    };
    return Order;
}());
exports.Order = Order;
