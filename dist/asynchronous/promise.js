"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function promiseSample() {
    var url = "https://api.github.com/users/tt-tt-c";
    var fetchProfile = function () {
        return new Promise(function (resolve, reject) {
            fetch(url)
                .then(function (res) {
                res.json()
                    .then(function (json) {
                    console.log("Asynchronous Promise Sample1: ", json);
                    resolve(json);
                })
                    .catch(function (e) {
                    console.log(e);
                    reject(null);
                });
            })
                .catch(function (e) {
                console.log(e);
                reject(null);
            });
        });
    };
    fetchProfile().then(function (profile) {
        if (profile) {
            console.log("Asynchronous Promise Sample2: ", profile);
        }
    });
}
exports.default = promiseSample;
