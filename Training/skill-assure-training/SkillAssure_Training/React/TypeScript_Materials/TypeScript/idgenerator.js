"use strict";
exports.__esModule = true;
exports.Idgenerator = void 0;
var Idgenerator = /** @class */ (function () {
    function Idgenerator() {
    }
    Idgenerator.getCustomerId = function () {
        return Idgenerator.customerid++;
    };
    Idgenerator.getOrderId = function () {
        return Idgenerator.orderid++;
    };
    Idgenerator.getItemId = function () {
        return Idgenerator.itemid++;
    };
    Idgenerator.customerid = 111;
    Idgenerator.orderid = 1;
    Idgenerator.itemid = 1;
    return Idgenerator;
}());
exports.Idgenerator = Idgenerator;
