"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.popComic = void 0;
var francePan = {
    calories: 300,
    type: "hard",
};
var maboDon = {
    calories: 300,
    spicyLevel: 5,
    gram: 500,
};
var jump = {
    page: 300,
    title: '週刊少年ジャンプ',
    cycle: 'weekly'
};
var cotrip = {
    page: 120,
    title: 'ことりっぷ',
    theme: '旅行'
};
// implementsを使ってクラスに型定義
var Comic = /** @class */ (function () {
    function Comic(page, title, publishYear) {
        this.publishYear = publishYear;
        this.page = page;
        this.title = title;
    }
    Comic.prototype.getPublishYear = function () {
        return this.title + "が発売されたのは" + this.publishYear + "年";
    };
    return Comic;
}());
exports.popComic = new Comic(120, '毀滅', '1940');
