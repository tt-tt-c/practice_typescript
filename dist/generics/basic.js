"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function genericsBasicSample() {
    //ジェネリック型未使用
    var stringReduce = function (array, initialValue) {
        var result = initialValue;
        for (var i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    };
    console.log("Generics basic sample1: ", stringReduce(["May ", "the ", "force ", "be ", "with ", "you."], ""));
    var numberReduce = function (array, initialValue) {
        var result = initialValue;
        for (var i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    };
    console.log("Generics basic sample1: ", numberReduce([1, 2, 3, 4, 5], 10));
    var numberReduce2 = function (array, initialValue) {
        var result = initialValue;
        for (var i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    };
}
exports.default = genericsBasicSample;
