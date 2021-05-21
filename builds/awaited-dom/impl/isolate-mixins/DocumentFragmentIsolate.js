"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const DocumentFragmentIsolate_1 = __importDefault(require("../../base/isolate-mixins/DocumentFragmentIsolate"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
class DocumentFragmentIsolate extends DocumentFragmentIsolate_1.default {
}
exports.default = DocumentFragmentIsolate;
//# sourceMappingURL=DocumentFragmentIsolate.js.map