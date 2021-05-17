import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IElement, INode, INonDocumentTypeChildNode, IParentNode, ISlotable, INamedNodeMap, IDOMTokenList, IShadowRoot, IAttr, IDOMRect, IDOMRectList, IFullscreenOptions, IScrollIntoViewOptions } from '../interfaces/official';
import { ISuperElement, ISuperHTMLCollection } from '../interfaces/super';
import { INodeProperties } from './Node';
import { INonDocumentTypeChildNodeProperties } from '../official-mixins/NonDocumentTypeChildNode';
import { IParentNodeProperties } from '../official-mixins/ParentNode';
import { ISlotableProperties } from '../official-mixins/Slotable';
export declare const getState: (instance: IElement) => IElementProperties, setState: (instance: IElement, properties: Partial<IElementProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IElement>;
export declare const nodeFactory: NodeFactory<IElement>;
export declare function ElementGenerator(Node: Constructable<INode>, NonDocumentTypeChildNode: Constructable<INonDocumentTypeChildNode>, ParentNode: Constructable<IParentNode>, Slotable: Constructable<ISlotable>): {
    new (): {
        readonly attributes: INamedNodeMap;
        readonly classList: IDOMTokenList;
        readonly className: Promise<string>;
        readonly clientHeight: Promise<number>;
        readonly clientLeft: Promise<number>;
        readonly clientTop: Promise<number>;
        readonly clientWidth: Promise<number>;
        readonly id: Promise<string>;
        readonly innerHTML: Promise<string>;
        readonly localName: Promise<string>;
        readonly namespaceURI: Promise<string | null>;
        readonly outerHTML: Promise<string>;
        readonly part: IDOMTokenList;
        readonly prefix: Promise<string | null>;
        readonly scrollHeight: Promise<number>;
        readonly scrollLeft: Promise<number>;
        readonly scrollTop: Promise<number>;
        readonly scrollWidth: Promise<number>;
        readonly shadowRoot: IShadowRoot;
        readonly slot: Promise<string>;
        readonly tagName: Promise<string>;
        closest(selectors: string): ISuperElement;
        getAttribute(qualifiedName: string): Promise<string | null>;
        getAttributeNS(namespace: string | null, localName: string): Promise<string | null>;
        getAttributeNames(): Promise<Iterable<string>>;
        getAttributeNode(qualifiedName: string): Promise<IAttr | null>;
        getAttributeNodeNS(namespace: string | null, localName: string): Promise<IAttr | null>;
        getBoundingClientRect(): Promise<IDOMRect>;
        getClientRects(): Promise<IDOMRectList>;
        getElementsByClassName(classNames: string): ISuperHTMLCollection;
        getElementsByTagName(qualifiedName: string): ISuperHTMLCollection;
        getElementsByTagNameNS(namespace: string | null, localName: string): ISuperHTMLCollection;
        hasAttribute(qualifiedName: string): Promise<boolean>;
        hasAttributeNS(namespace: string | null, localName: string): Promise<boolean>;
        hasAttributes(): Promise<boolean>;
        hasPointerCapture(pointerId: number): Promise<boolean>;
        matches(selectors: string): Promise<boolean>;
        requestFullscreen(options?: IFullscreenOptions | undefined): Promise<void>;
        requestPointerLock(): Promise<void>;
        scrollIntoView(arg?: boolean | IScrollIntoViewOptions | undefined): Promise<void>;
        then<TResult1 = IElement, TResult2 = never>(onfulfilled?: ((value: IElement) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
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
        readonly childNodes: import("../interfaces/super").ISuperNodeList;
        readonly firstChild: import("../interfaces/super").ISuperNode;
        readonly isConnected: Promise<boolean>;
        readonly lastChild: import("../interfaces/super").ISuperNode;
        readonly nextSibling: import("../interfaces/super").ISuperNode;
        readonly nodeName: Promise<string>;
        readonly nodeType: Promise<number>;
        readonly nodeValue: Promise<string | null>;
        readonly ownerDocument: import("../interfaces/super").ISuperDocument;
        readonly parentElement: ISuperElement;
        readonly parentNode: import("../interfaces/super").ISuperNode;
        readonly previousSibling: import("../interfaces/super").ISuperNode;
        readonly textContent: Promise<string | null>;
        compareDocumentPosition(other: import("../interfaces/isolate").INodeIsolate): Promise<number>;
        contains(other: import("../interfaces/isolate").INodeIsolate | null): Promise<boolean>;
        getRootNode(options?: import("../interfaces/official").IGetRootNodeOptions | undefined): import("../interfaces/super").ISuperNode;
        hasChildNodes(): Promise<boolean>;
        isDefaultNamespace(namespace: string | null): Promise<boolean>;
        isEqualNode(otherNode: import("../interfaces/isolate").INodeIsolate | null): Promise<boolean>;
        isSameNode(otherNode: import("../interfaces/isolate").INodeIsolate | null): Promise<boolean>;
        lookupNamespaceURI(prefix: string | null): Promise<string | null>;
        lookupPrefix(namespace: string | null): Promise<string | null>;
        normalize(): Promise<void>;
        readonly nextElementSibling: ISuperElement;
        readonly previousElementSibling: ISuperElement;
        readonly childElementCount: Promise<number>;
        readonly children: ISuperHTMLCollection;
        readonly firstElementChild: ISuperElement;
        readonly lastElementChild: ISuperElement;
        querySelector(selectors: string): ISuperElement;
        querySelectorAll(selectors: string): import("../interfaces/super").ISuperNodeList;
        readonly assignedSlot: import("../interfaces/official").IHTMLSlotElement;
    };
};
export interface IElementProperties extends INodeProperties, INonDocumentTypeChildNodeProperties, IParentNodeProperties, ISlotableProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
    readonly attributes?: INamedNodeMap;
    readonly classList?: IDOMTokenList;
    readonly className?: Promise<string>;
    readonly clientHeight?: Promise<number>;
    readonly clientLeft?: Promise<number>;
    readonly clientTop?: Promise<number>;
    readonly clientWidth?: Promise<number>;
    readonly id?: Promise<string>;
    readonly innerHTML?: Promise<string>;
    readonly localName?: Promise<string>;
    readonly namespaceURI?: Promise<string | null>;
    readonly outerHTML?: Promise<string>;
    readonly part?: IDOMTokenList;
    readonly prefix?: Promise<string | null>;
    readonly scrollHeight?: Promise<number>;
    readonly scrollLeft?: Promise<number>;
    readonly scrollTop?: Promise<number>;
    readonly scrollWidth?: Promise<number>;
    readonly shadowRoot?: IShadowRoot;
    readonly slot?: Promise<string>;
    readonly tagName?: Promise<string>;
}
export declare const ElementPropertyKeys: string[];
export declare const ElementConstantKeys: string[];
