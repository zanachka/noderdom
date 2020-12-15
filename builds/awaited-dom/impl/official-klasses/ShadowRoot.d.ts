import { IShadowRoot } from '../../base/interfaces/official';
import { ISuperElement } from '../../base/interfaces/super';
import { IShadowRootProperties } from '../../base/official-klasses/ShadowRoot';
export declare const getState: (instance: IShadowRoot) => IShadowRootProperties, setState: (instance: IShadowRoot, properties: Partial<IShadowRootProperties>) => void, recordProxy: (proxy: IShadowRoot, instance: IShadowRoot) => void;
declare const ShadowRootBaseClass: {
    new (): {
        readonly delegatesFocus: Promise<boolean>;
        readonly host: ISuperElement;
        readonly innerHTML: Promise<string>;
        readonly mode: Promise<import("../../base/interfaces/official").IShadowRootMode>;
        readonly ATTRIBUTE_NODE: number;
        readonly CDATA_SECTION_NODE: number;
        readonly COMMENT_NODE: number;
        readonly DOCUMENT_FRAGMENT_NODE: number;
        readonly DOCUMENT_NODE: number;
        readonly DOCUMENT_POSITION_CONTAINED_BY: number;
        readonly DOCUMENT_POSITION_CONTAINS: number;
        readonly DOCUMENT_POSITION_DISCONNECTED: number;
        readonly DOCUMENT_POSITION_FOLLOWING: number;
        readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
        readonly DOCUMENT_POSITION_PRECEDING: number;
        readonly DOCUMENT_TYPE_NODE: number;
        readonly ELEMENT_NODE: number;
        readonly ENTITY_NODE: number;
        readonly ENTITY_REFERENCE_NODE: number;
        readonly NOTATION_NODE: number;
        readonly PROCESSING_INSTRUCTION_NODE: number;
        readonly TEXT_NODE: number;
        readonly baseURI: Promise<string>;
        readonly childNodes: import("../../base/interfaces/super").ISuperNodeList;
        readonly firstChild: import("../../base/interfaces/super").ISuperNode;
        readonly isConnected: Promise<boolean>;
        readonly lastChild: import("../../base/interfaces/super").ISuperNode;
        readonly nextSibling: import("../../base/interfaces/super").ISuperNode;
        readonly nodeName: Promise<string>;
        readonly nodeType: Promise<number>;
        readonly nodeValue: Promise<string | null>;
        readonly ownerDocument: import("../../base/interfaces/super").ISuperDocument;
        readonly parentElement: ISuperElement;
        readonly parentNode: import("../../base/interfaces/super").ISuperNode;
        readonly previousSibling: import("../../base/interfaces/super").ISuperNode;
        readonly textContent: Promise<string | null>;
        compareDocumentPosition(other: import("../../base/interfaces/isolate").INodeIsolate): Promise<number>;
        contains(other: import("../../base/interfaces/isolate").INodeIsolate | null): Promise<boolean>;
        getRootNode(options?: import("../../base/interfaces/official").IGetRootNodeOptions | undefined): import("../../base/interfaces/super").ISuperNode;
        hasChildNodes(): Promise<boolean>;
        isDefaultNamespace(namespace: string | null): Promise<boolean>;
        isEqualNode(otherNode: import("../../base/interfaces/isolate").INodeIsolate | null): Promise<boolean>;
        isSameNode(otherNode: import("../../base/interfaces/isolate").INodeIsolate | null): Promise<boolean>;
        lookupNamespaceURI(prefix: string | null): Promise<string | null>;
        lookupPrefix(namespace: string | null): Promise<string | null>;
        normalize(): Promise<void>;
        getElementById(elementId: string): ISuperElement;
        readonly childElementCount: Promise<number>;
        readonly children: import("../../base/interfaces/super").ISuperHTMLCollection;
        readonly firstElementChild: ISuperElement;
        readonly lastElementChild: ISuperElement;
        querySelector(selectors: string): ISuperElement;
        querySelectorAll(selectors: string): import("../../base/interfaces/super").ISuperNodeList;
        readonly activeElement: ISuperElement;
        readonly fullscreenElement: ISuperElement;
        readonly pointerLockElement: ISuperElement;
        caretPositionFromPoint(x: number, y: number): import("../../base/interfaces/official").ICaretPosition;
        elementFromPoint(x: number, y: number): ISuperElement;
        getSelection(): import("../../base/interfaces/official").ISelection;
    };
};
export default class ShadowRoot extends ShadowRootBaseClass implements IShadowRoot {
    constructor();
    get host(): ISuperElement;
}
export {};
