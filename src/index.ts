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
import { logMessage } from "./function/basic";
logMessage("haga");

import { isUserSignedIn } from "./function/parameters";
isUserSignedIn("");
isUserSignedIn("ABC", "taro");

import { isUserSignedIn2 } from "./function/parameters";
isUserSignedIn2("ABC");
isUserSignedIn2("ABC", "taro");

import { sumProductsPrice } from "./function/parameters";
const sum = sumProductsPrice(100,200,300,400,500);
console.log('function parameters sample 5 : ', sum);