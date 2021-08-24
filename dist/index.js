"use strict";
/*
// トラハック TypeScript入門
// import World from "./world";

// const root = document.getElementById('root');
// const world = new World("hello world");
// world.sayHello(root);

// 03 基本の型定義
// import { primitiveSample } from "./basic";
// primitiveSample();
// import { notExistSample } from "./basic";
// notExistSample();
// import { anySample } from "./basic";
// anySample();
// import { unknownSample } from "./basic";
// unknownSample();

// 04 関数の定義
// import { logMessage } from "./function/basic";
// logMessage("haga");

// import { isUserSignedIn } from "./function/parameters";
// isUserSignedIn("");
// isUserSignedIn("ABC", "taro");

// import { isUserSignedIn2 } from "./function/parameters";
// isUserSignedIn2("ABC");
// isUserSignedIn2("ABC", "taro");

// import { sumProductsPrice } from "./function/parameters";
// const sum = sumProductsPrice(100,200,300,400,500);
// console.log('function parameters sample 5 : ', sum);

// 05 オブジェクトの型定義
// import objectSample from "./object/object";
// objectSample();

// import typeAliasSample from "./object/alias";
// typeAliasSample();

//06 配列・タプルの型定義
// import arraySample from "./array/array";
// arraySample();

//07 ジェネリック型・ポリモーフィズム
// import genericsBasicSample from "./generics/basic";
// genericsBasicSample();

// import genericsAdvancedSample from "./generics/advanced";
// genericsAdvancedSample();

// 09 InterfaceとType typeAlias
// import { popComic } from "./interface/interface";
// console.log(popComic.getPublishYear());

// 10 非同期処理
// import asyncAwaitSample from "./asynchronous/asyncAwait";
// asyncAwaitSample();

 */
Object.defineProperty(exports, "__esModule", { value: true });
// Survival Typescript 演習
var function_1 = require("./survival/function");
var gen = function_1.generator();
for (var i = 0; i < 10; i++) {
    console.log("generator sample 1: ", gen.next().value);
}
var function_2 = require("./survival/function");
var jetlag = new function_2.JetLag("taro");
jetlag.replyFunction(1000);
var function_3 = require("./survival/function");
var op = new function_3.Operator(0);
console.log("1+2+3+4+5 = ", op.sum(1).sum(2).sum(3).sum(4).sum(5).getResult());
