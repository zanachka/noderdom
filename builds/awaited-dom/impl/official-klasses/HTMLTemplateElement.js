"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLTemplateElement_1 = require("../../base/official-klasses/HTMLTemplateElement");
const create_1 = require("../create");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
const HTMLTemplateElementBaseClass = HTMLTemplateElement_1.HTMLTemplateElementGenerator(HTMLElement_1.default);
class HTMLTemplateElement extends HTMLTemplateElementBaseClass {
    constructor() {
        super();
    }
    // properties
    get content() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createDocumentFragment(awaitedPath.addProperty(this, 'content'), awaitedOptions);
    }
}
exports.default = HTMLTemplateElement;
//# sourceMappingURL=HTMLTemplateElement.js.map