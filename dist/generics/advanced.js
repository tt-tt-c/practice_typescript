"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function genericsAdvancedSample() {
    var mapStringsToNumbers = function (array, fn) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
            result[i] = fn(array[i]);
        }
        return result;
    };
    var numbers = mapStringsToNumbers(["123", "456", "789"], function (item) { return Number(item); });
    console.log("Generics advanced sample 1: ", numbers);
    var mapNumbersToStrings = function (array, fn) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
            result[i] = fn(array[i]);
        }
        return result;
    };
    var strings = mapNumbersToStrings([123, 456, 789], function (item) { return String(item); });
    console.log("Generics advanced sample 2: ", strings);
}
exports.default = genericsAdvancedSample;
