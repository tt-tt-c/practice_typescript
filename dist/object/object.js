"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function objectSample() {
    // const a = {
    //     name: 'taro',
    //     age: 23
    // }
    // a.name
    //オブジェクトリテラル記法
    var country = {
        language: "Japanese",
        name: "taro",
    };
    console.log("Object object sample 1: ", country);
    country = {
        language: "English",
        name: "United States of America",
    };
    console.log("Object object sample 2: ", country);
    //オプショナルとReadonly
    var taro = {
        age: 23,
        lastName: "taro",
        firstName: "tsuruga",
    };
    taro.gender = "male";
    console.log("Object object sample 3: ", taro);
    //インデックスシグネチャ
    var capitals = {
        Japan: "Tokyo",
        Korea: "Seoul",
    };
    capitals.Chinae = "Beijing";
    console.log("Object object sample 4: ", capitals);
}
exports.default = objectSample;
