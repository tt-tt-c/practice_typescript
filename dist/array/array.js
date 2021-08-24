"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arraySample() {
    var colors = ["red", "blue"];
    colors.push("yellow");
    console.log("Array array sample 1: ", colors);
    var even = [2, 4, 6];
    even.push(8);
    console.log("Array array sample 2: ", even);
    var odd = [1, 3, '5'];
    odd.push('7');
    console.log("Array array sample 3: ", odd);
    //配列の型推論
    var generateSomeArray = function () {
        var _someArray = [];
        _someArray.push(13);
        _someArray.push('string');
        return _someArray;
    };
    var someArray = generateSomeArray();
    someArray.push(456);
    console.log("Array array sample 4: ", someArray);
    //タプル
    var response = [200, "OK"];
    // response = [400,"bad", "bad"];
    console.log("Array array sample 5: ", response);
    //レストパラメータ使用したタプル
    var girlfriends = ["KIKU", "RISA"];
    console.log("Array array sample 6: ", girlfriends);
    //イミュータブルなタプル
    var commands = ["git add", "git commit"];
    // commands.push()
    // commands[2] = "git push"
}
exports.default = arraySample;
