"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function notExistSample() {
    var name = "tarotaro";
    console.log("notExist sample 1", typeof name, name);
    if (name) {
        console.log("notExist sample 2", "吾輩は猫である" + name);
    }
    else {
        console.log("not Exist sample 3: ", "吾輩は猫である名前はまだない");
    }
    var age = undefined;
    console.log("notExist sample 4", typeof age, age);
}
exports.default = notExistSample;
