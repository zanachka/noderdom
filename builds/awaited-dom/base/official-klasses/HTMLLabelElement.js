"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLLabelElementConstantKeys = exports.HTMLLabelElementPropertyKeys = exports.HTMLLabelElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLLabelElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLLabelElementGenerator(HTMLElement) {
    return class HTMLLabelElement extends HTMLElement {
        constructor() {
            super();
            exports.setState(this, {
                createInstanceName: 'createHTMLLabelElement',
            });
        }
        // properties
        get control() {
            throw new Error('HTMLLabelElement.control getter not implemented');
        }
        get form() {
            throw new Error('HTMLLabelElement.form getter not implemented');
        }
        get htmlFor() {
            return exports.awaitedHandler.getProperty(this, 'htmlFor', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return inspectInstanceProperties_1.default(this, exports.HTMLLabelElementPropertyKeys, exports.HTMLLabelElementConstantKeys);
        }
    };
}
exports.HTMLLabelElementGenerator = HTMLLabelElementGenerator;
exports.HTMLLabelElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'control', 'form', 'htmlFor'];
exports.HTMLLabelElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLLabelElement.js.map