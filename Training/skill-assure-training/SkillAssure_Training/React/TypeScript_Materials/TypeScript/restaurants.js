"use strict";
exports.__esModule = true;
exports.Restaurants = void 0;
var idgenerator_1 = require("./idgenerator");
var Restaurants = /** @class */ (function () {
    function Restaurants(_name) {
        this.item = [];
        this.customer = [];
        this.name = _name;
    }
    Restaurants.prototype.getName = function () {
        return this.name;
    };
    Restaurants.prototype.getCustomerId = function () {
        return idgenerator_1.Idgenerator.customerid++;
    };
    Restaurants.prototype.getItem = function () {
        return this.item;
    };
    Restaurants.prototype.getCustomer = function () {
        return this.customer;
    };
    Restaurants.prototype.getTotalOrderWorth = function () {
        var networth = 0;
        for (var _i = 0, _a = this.getCustomer(); _i < _a.length; _i++) {
            var customer = _a[_i];
            for (var _b = 0, _c = customer.getOrder(); _b < _c.length; _b++) {
                var order = _c[_b];
                for (var _d = 0, _e = order.getOrderItem(); _d < _e.length; _d++) {
                    var item = _e[_d];
                    networth += item.totalPrice;
                }
            }
        }
        return networth;
    };
    return Restaurants;
}());
exports.Restaurants = Restaurants;
