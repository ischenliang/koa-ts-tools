"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/**
 * Loads all cloud functions under the `functions` directory.
 */
fs_1.default.readdirSync(path_1.default.join(__dirname, 'functions')).forEach(file => {
    require(path_1.default.join(__dirname, 'functions', file));
});
/**
 * A simple cloud function.
 */
// AV.Cloud.define('hello', (request: any) => {
//   // return 'Hello world!'
// })
//# sourceMappingURL=cloud.js.map