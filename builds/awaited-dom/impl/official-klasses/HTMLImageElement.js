"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLImageElement_1 = require("../../base/official-klasses/HTMLImageElement");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLImageElementBaseClass = HTMLImageElement_1.HTMLImageElementGenerator(HTMLElement_1.default);
class HTMLImageElement extends HTMLImageElementBaseClass {
    constructor() {
        super();
    }
}
exports.default = HTMLImageElement;
//# sourceMappingURL=HTMLImageElement.js.map