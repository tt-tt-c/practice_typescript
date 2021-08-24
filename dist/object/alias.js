"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function typeAliasSample() {
    var japan = {
        capital: "Tokyo",
        language: "Japanese",
        name: "Japan",
    };
    console.log("Object alias sample 1: ", japan);
    var america = {
        capital: "Washington, D.C",
        language: "English",
        name: "America",
    };
    console.log("Object alias sample 2: ", america);
    var adventure1 = {
        hp: 2,
        sp: 3,
        weapon: "木の剣",
        swordSkill: "三連切り",
    };
    var adventure2 = {
        hp: 12,
        sp: 13,
        mp: 31,
        weapon: "木の杖",
        swordSkill: "gamoag",
    };
    console.log("Object alias sample 3: ", adventure1);
    console.log("Object alias sample 4: ", adventure2);
    var paladin = {
        hp: 10,
        sp: 20,
        mp: 100,
        weapon: "銀の剣",
        swordSkill: "三連切り",
        magicSkill: "ファイアーボール"
    };
    console.log("Object alias sample 5: ", paladin);
}
exports.default = typeAliasSample;
