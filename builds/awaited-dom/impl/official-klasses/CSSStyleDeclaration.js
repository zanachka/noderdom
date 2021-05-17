"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const CSSStyleDeclaration_1 = require("../../base/official-klasses/CSSStyleDeclaration");
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const CSSStyleDeclarationBaseClass = CSSStyleDeclaration_1.CSSStyleDeclarationGenerator();
class CSSStyleDeclaration extends CSSStyleDeclarationBaseClass {
    get parentRule() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createCSSRule(awaitedPath.addProperty(this, 'parentRule'), awaitedOptions);
    }
}
exports.default = CSSStyleDeclaration;
//# sourceMappingURL=CSSStyleDeclaration.js.map