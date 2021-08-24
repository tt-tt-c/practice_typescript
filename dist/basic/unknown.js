"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function unknownSample() {
    var maybeNumber = 19;
    console.log(typeof maybeNumber, maybeNumber);
    if (typeof maybeNumber === 'number') {
        var sum = maybeNumber + 10;
        console.log("sum : ", sum);
    }
}
exports.default = unknownSample;
