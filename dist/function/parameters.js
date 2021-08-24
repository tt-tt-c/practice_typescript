"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumProductsPrice = exports.isUserSignedIn2 = exports.isUserSignedIn = void 0;
var isUserSignedIn = function (userId, usesrname) {
    if (userId === "ABC") {
        console.log("function parameters sample 1: user is signed in! Username is", usesrname);
        return true;
    }
    else {
        console.log("function parameters sample 1: user is not signed in");
        return false;
    }
};
exports.isUserSignedIn = isUserSignedIn;
var isUserSignedIn2 = function (userId, usesrname) {
    if (usesrname === void 0) { usesrname = 'No name'; }
    if (userId === "ABC") {
        console.log("function parameters sample 1: user is signed in! Username is", usesrname);
        return true;
    }
    else {
        console.log("function parameters sample 1: user is not signed in");
        return false;
    }
};
exports.isUserSignedIn2 = isUserSignedIn2;
var sumProductsPrice = function () {
    var productsPrice = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        productsPrice[_i] = arguments[_i];
    }
    return productsPrice.reduce(function (price, productPrice) {
        return price + productPrice;
    }, 0);
};
exports.sumProductsPrice = sumProductsPrice;
