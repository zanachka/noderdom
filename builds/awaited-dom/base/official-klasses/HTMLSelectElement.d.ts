import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeAttacher from '../NodeAttacher';
import { IHTMLSelectElement, IHTMLElement, IHTMLFormElement, IHTMLOptionsCollection, IValidityState, IHTMLOptionElement } from '../interfaces/official';
import { ISuperNodeList, ISuperHTMLCollection, ISuperElement } from '../interfaces/super';
import { IHTMLElementProperties } from './HTMLElement';
export declare const getState: (instance: IHTMLSelectElement) => IHTMLSelectElementProperties, setState: (instance: IHTMLSelectElement, properties: Partial<IHTMLSelectElementProperties>) => void, recordProxy: (proxy: IHTMLSelectElement, instance: IHTMLSelectElement) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLSelectElement>;
export declare const nodeAttacher: NodeAttacher<IHTMLSelectElement>;
export declare const awaitedIterator: AwaitedIterator<IHTMLSelectElement, ISuperElement>;
export declare function HTMLSelectElementGenerator(HTMLElement: Constructable<IHTMLElement>): {
    new (): {
        [index: number]: ISuperElement;
        readonly autocomplete: Promise<string>;
        readonly autofocus: Promise<boolean>;
        readonly disabled: Promise<boolean>;
        readonly form: IHTMLFormElement;
        readonly labels: ISuperNodeList;
        readonly length: Promise<number>;
        readonly multiple: Promise<boolean>;
        readonly name: Promise<string>;
        readonly options: IHTMLOptionsCollection;
        readonly required: Promise<boolean>;
        readonly selectedIndex: Promise<number>;
        readonly selectedOptions: ISuperHTMLCollection;
        readonly size: Promise<number>;
        readonly type: Promise<string>;
        readonly validationMessage: Promise<string>;
        readonly validity: Promise<IValidityState>;
        readonly value: Promise<string>;
        readonly willValidate: Promise<boolean>;
        checkValidity(): Promise<boolean>;
        item(index: number): ISuperElement;
        namedItem(name: string): IHTMLOptionElement;
        reportValidity(): Promise<boolean>;
        then<TResult1 = IHTMLSelectElement, TResult2 = never>(onfulfilled?: ((value: IHTMLSelectElement) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): Promise<TResult1 | TResult2>;
        [Symbol.iterator](): IterableIterator<ISuperElement>;
        readonly accessKey: Promise<string>;
        readonly autoCapitalize: Promise<string>;
        readonly dir: Promise<string>;
        readonly draggable: Promise<boolean>;
        readonly hidden: Promise<boolean>;
        readonly inert: Promise<boolean>;
        readonly innerText: Promise<string>;
        readonly lang: Promise<string>;
        readonly offsetHeight: Promise<number>;
        readonly offsetLeft: Promise<number>;
        readonly offsetParent: ISuperElement;
        readonly offsetTop: Promise<number>;
        readonly offsetWidth: Promise<number>;
        readonly spellcheck: Promise<boolean>;
        readonly title: Promise<string>;
        readonly translate: Promise<boolean>;
        click(): Promise<void>;
        readonly attributes: import("../interfaces/official").INamedNodeMap;
        readonly classList: import("../interfaces/official").IDOMTokenList;
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
        readonly part: import("../interfaces/official").IDOMTokenList;
        readonly prefix: Promise<string | null>;
        readonly scrollHeight: Promise<number>;
        readonly scrollLeft: Promise<number>;
        readonly scrollTop: Promise<number>;
        readonly scrollWidth: Promise<number>;
        readonly shadowRoot: import("../interfaces/official").IShadowRoot;
        readonly slot: Promise<string>;
        readonly tagName: Promise<string>;
        closest(selectors: string): ISuperElement;
        getAttribute(qualifiedName: string): Promise<string | null>;
        getAttributeNS(namespace: string | null, localName: string): Promise<string | null>;
        getAttributeNames(): Promise<Iterable<string>>;
        getAttributeNode(qualifiedName: string): Promise<import("../interfaces/official").IAttr | null>;
        getAttributeNodeNS(namespace: string | null, localName: string): Promise<import("../interfaces/official").IAttr | null>;
        getBoundingClientRect(): Promise<import("../interfaces/official").IDOMRect>;
        getClientRects(): Promise<import("../interfaces/official").IDOMRectList>;
        getElementsByClassName(classNames: string): ISuperHTMLCollection;
        getElementsByTagName(qualifiedName: string): ISuperHTMLCollection;
        getElementsByTagNameNS(namespace: string | null, localName: string): ISuperHTMLCollection;
        hasAttribute(qualifiedName: string): Promise<boolean>;
        hasAttributeNS(namespace: string | null, localName: string): Promise<boolean>;
        hasAttributes(): Promise<boolean>;
        hasPointerCapture(pointerId: number): Promise<boolean>;
        matches(selectors: string): Promise<boolean>;
        requestFullscreen(options?: import("../interfaces/official").IFullscreenOptions | undefined): Promise<void>;
        requestPointerLock(): Promise<void>;
        scrollIntoView(arg?: boolean | import("../interfaces/official").IScrollIntoViewOptions | undefined): Promise<void>;
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
        readonly childNodes: ISuperNodeList;
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
        compareDocumentPosition(other: import("../interfaces/super").ISuperNode): Promise<number>;
        contains(other: import("../interfaces/super").ISuperNode | null): Promise<boolean>;
        getRootNode(options?: import("../interfaces/official").IGetRootNodeOptions | undefined): import("../interfaces/super").ISuperNode;
        hasChildNodes(): Promise<boolean>;
        isDefaultNamespace(namespace: string | null): Promise<boolean>;
        isEqualNode(otherNode: import("../interfaces/super").ISuperNode | null): Promise<boolean>;
        isSameNode(otherNode: import("../interfaces/super").ISuperNode | null): Promise<boolean>;
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
        querySelectorAll(selectors: string): ISuperNodeList;
        blur(): Promise<void>;
        focus(): Promise<void>;
    };
};
export interface IHTMLSelectElementProperties extends IHTMLElementProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    createInstanceName: string;
    createIterableName: string;
    readonly autocomplete?: Promise<string>;
    readonly autofocus?: Promise<boolean>;
    readonly disabled?: Promise<boolean>;
    readonly form?: IHTMLFormElement;
    readonly labels?: ISuperNodeList;
    readonly length?: Promise<number>;
    readonly multiple?: Promise<boolean>;
    readonly name?: Promise<string>;
    readonly options?: IHTMLOptionsCollection;
    readonly required?: Promise<boolean>;
    readonly selectedIndex?: Promise<number>;
    readonly selectedOptions?: ISuperHTMLCollection;
    readonly size?: Promise<number>;
    readonly type?: Promise<string>;
    readonly validationMessage?: Promise<string>;
    readonly validity?: Promise<IValidityState>;
    readonly value?: Promise<string>;
    readonly willValidate?: Promise<boolean>;
}
export declare const HTMLSelectElementPropertyKeys: string[];
export declare const HTMLSelectElementConstantKeys: string[];
