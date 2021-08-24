"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unknownSample = exports.anySample = exports.notExistSample = exports.primitiveSample = void 0;
var primitive_1 = require("./primitive");
Object.defineProperty(exports, "primitiveSample", { enumerable: true, get: function () { return __importDefault(primitive_1).default; } });
var notExist_1 = require("./notExist");
Object.defineProperty(exports, "notExistSample", { enumerable: true, get: function () { return __importDefault(notExist_1).default; } });
var any_1 = require("./any");
Object.defineProperty(exports, "anySample", { enumerable: true, get: function () { return __importDefault(any_1).default; } });
var unknown_1 = require("./unknown");
Object.defineProperty(exports, "unknownSample", { enumerable: true, get: function () { return __importDefault(unknown_1).default; } });
