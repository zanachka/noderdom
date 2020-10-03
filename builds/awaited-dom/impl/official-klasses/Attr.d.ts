import { IAttr } from '../../base/interfaces/official';
import { ISuperElement } from '../../base/interfaces/super';
import { IAttrProperties } from '../../base/official-klasses/Attr';
export declare const getState: (instance: IAttr) => IAttrProperties, setState: (instance: IAttr, properties: Partial<IAttrProperties>) => void, recordProxy: (proxy: IAttr, instance: IAttr) => void;
declare const AttrBaseClass: {
    new (): {
        readonly localName: Promise<string>;
        readonly name: Promise<string>;
        readonly namespaceURI: Promise<string | null>;
        readonly ownerElement: ISuperElement;
        readonly prefix: Promise<string | null>;
        readonly specified: Promise<boolean>;
        readonly value: Promise<string>;
        then<TResult1 = IAttr, TResult2 = never>(onfulfilled?: ((value: IAttr) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
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
        compareDocumentPosition(other: import("../../base/interfaces/super").ISuperNode): Promise<number>;
        contains(other: import("../../base/interfaces/super").ISuperNode | null): Promise<boolean>;
        getRootNode(options?: import("../../base/interfaces/official").IGetRootNodeOptions | undefined): import("../../base/interfaces/super").ISuperNode;
        hasChildNodes(): Promise<boolean>;
        isDefaultNamespace(namespace: string | null): Promise<boolean>;
        isEqualNode(otherNode: import("../../base/interfaces/super").ISuperNode | null): Promise<boolean>;
        isSameNode(otherNode: import("../../base/interfaces/super").ISuperNode | null): Promise<boolean>;
        lookupNamespaceURI(prefix: string | null): Promise<string | null>;
        lookupPrefix(namespace: string | null): Promise<string | null>;
        normalize(): Promise<void>;
    };
};
export default class Attr extends AttrBaseClass implements IAttr {
    constructor();
    get ownerElement(): ISuperElement;
}
export {};
