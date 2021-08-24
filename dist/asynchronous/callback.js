"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function callBackSample() {
    var url = "https://api.github.com/users/tt-tt-c";
    // コールバックで呼び出す非同期処理
    var fetchProfile = function () {
        return fetch(url)
            .then(function (res) {
            res.json()
                .then(function (json) {
                console.log("Asynchronous Callback sample1: ", json);
                return json;
            })
                .catch(function (e) {
                console.log(e);
            });
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    var profile = fetchProfile();
    console.log("Asynchronous Callback sample2: ", profile);
}
exports.default = callBackSample;
