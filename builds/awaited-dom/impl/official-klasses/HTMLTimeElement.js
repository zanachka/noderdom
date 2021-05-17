"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLTimeElement_1 = require("../../base/official-klasses/HTMLTimeElement");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLTimeElementBaseClass = HTMLTimeElement_1.HTMLTimeElementGenerator(HTMLElement_1.default);
class HTMLTimeElement extends HTMLTimeElementBaseClass {
    constructor() {
        super();
    }
}
exports.default = HTMLTimeElement;
//# sourceMappingURL=HTMLTimeElement.js.map