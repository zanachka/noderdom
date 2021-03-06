import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { ISuperDocument, ISuperHTMLCollection, ISuperHTMLElement, ISuperElement, ISuperNodeList } from '../interfaces/super';
import { IDocumentIsolate, IHTMLDocumentIsolate, INodeIsolate } from '../interfaces/isolate';
import { IDocumentOrShadowRoot, INonElementParentNode, IParentNode, IXPathEvaluatorBase, IDocumentType, IFeaturePolicy, IHTMLHeadElement, IDOMImplementation, ILocation, IDocumentReadyState, IVisibilityState } from '../interfaces/official';
import { IDocumentIsolateProperties, DocumentIsolatePropertyKeys, DocumentIsolateConstantKeys } from '../isolate-mixins/DocumentIsolate';
import { IDocumentOrShadowRootProperties, DocumentOrShadowRootPropertyKeys, DocumentOrShadowRootConstantKeys } from '../official-mixins/DocumentOrShadowRoot';
import { IHTMLDocumentIsolateProperties, HTMLDocumentIsolatePropertyKeys, HTMLDocumentIsolateConstantKeys } from '../isolate-mixins/HTMLDocumentIsolate';
import { INodeIsolateProperties, NodeIsolatePropertyKeys, NodeIsolateConstantKeys } from '../isolate-mixins/NodeIsolate';
import { INonElementParentNodeProperties, NonElementParentNodePropertyKeys, NonElementParentNodeConstantKeys } from '../official-mixins/NonElementParentNode';
import { IParentNodeProperties, ParentNodePropertyKeys, ParentNodeConstantKeys } from '../official-mixins/ParentNode';
import { IXPathEvaluatorBaseProperties, XPathEvaluatorBasePropertyKeys, XPathEvaluatorBaseConstantKeys } from '../official-mixins/XPathEvaluatorBase';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperDocument, ISuperDocumentProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperDocument>('SuperDocument', getState, setState);
export const nodeFactory = new NodeFactory<ISuperDocument>(getState, setState, awaitedHandler);

export function SuperDocumentGenerator(DocumentIsolate: Constructable<IDocumentIsolate>, DocumentOrShadowRoot: Constructable<IDocumentOrShadowRoot>, HTMLDocumentIsolate: Constructable<IHTMLDocumentIsolate>, NodeIsolate: Constructable<INodeIsolate>, NonElementParentNode: Constructable<INonElementParentNode>, ParentNode: Constructable<IParentNode>, XPathEvaluatorBase: Constructable<IXPathEvaluatorBase>) {
  const Parent = (ClassMixer(DocumentIsolate, [DocumentOrShadowRoot, HTMLDocumentIsolate, NodeIsolate, NonElementParentNode, ParentNode, XPathEvaluatorBase]) as unknown) as Constructable<IDocumentIsolate & IDocumentOrShadowRoot & IHTMLDocumentIsolate & INodeIsolate & INonElementParentNode & IParentNode & IXPathEvaluatorBase>;

  return class SuperDocument extends Parent implements ISuperDocument, PromiseLike<ISuperDocument> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createSuperDocument',
      });
    }

    // properties

    public get URL(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'URL', false);
    }

    public get anchors(): ISuperHTMLCollection {
      throw new Error('SuperDocument.anchors getter not implemented');
    }

    public get body(): ISuperHTMLElement {
      throw new Error('SuperDocument.body getter not implemented');
    }

    public get characterSet(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'characterSet', false);
    }

    public get compatMode(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'compatMode', false);
    }

    public get contentType(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'contentType', false);
    }

    public get cookie(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'cookie', false);
    }

    public get designMode(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'designMode', false);
    }

    public get dir(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'dir', false);
    }

    public get doctype(): IDocumentType {
      throw new Error('SuperDocument.doctype getter not implemented');
    }

    public get documentElement(): ISuperElement {
      throw new Error('SuperDocument.documentElement getter not implemented');
    }

    public get documentURI(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'documentURI', false);
    }

    public get domain(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'domain', false);
    }

    public get embeds(): ISuperHTMLCollection {
      throw new Error('SuperDocument.embeds getter not implemented');
    }

    public get featurePolicy(): IFeaturePolicy {
      throw new Error('SuperDocument.featurePolicy getter not implemented');
    }

    public get forms(): ISuperHTMLCollection {
      throw new Error('SuperDocument.forms getter not implemented');
    }

    public get fullscreenEnabled(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'fullscreenEnabled', false);
    }

    public get head(): IHTMLHeadElement {
      throw new Error('SuperDocument.head getter not implemented');
    }

    public get hidden(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'hidden', false);
    }

    public get images(): ISuperHTMLCollection {
      throw new Error('SuperDocument.images getter not implemented');
    }

    public get implementation(): IDOMImplementation {
      throw new Error('SuperDocument.implementation getter not implemented');
    }

    public get lastModified(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'lastModified', false);
    }

    public get links(): ISuperHTMLCollection {
      throw new Error('SuperDocument.links getter not implemented');
    }

    public get location(): ILocation {
      throw new Error('SuperDocument.location getter not implemented');
    }

    public get plugins(): ISuperHTMLCollection {
      throw new Error('SuperDocument.plugins getter not implemented');
    }

    public get readyState(): Promise<IDocumentReadyState> {
      return awaitedHandler.getProperty<IDocumentReadyState>(this, 'readyState', false);
    }

    public get referrer(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'referrer', false);
    }

    public get scripts(): ISuperHTMLCollection {
      throw new Error('SuperDocument.scripts getter not implemented');
    }

    public get scrollingElement(): ISuperElement {
      throw new Error('SuperDocument.scrollingElement getter not implemented');
    }

    public get title(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'title', false);
    }

    public get visibilityState(): Promise<IVisibilityState> {
      return awaitedHandler.getProperty<IVisibilityState>(this, 'visibilityState', false);
    }

    // methods

    public exitFullscreen(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'exitFullscreen', []);
    }

    public exitPointerLock(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'exitPointerLock', []);
    }

    public getElementsByClassName(classNames: string): ISuperHTMLCollection {
      throw new Error('SuperDocument.getElementsByClassName not implemented');
    }

    public getElementsByName(elementName: string): ISuperNodeList {
      throw new Error('SuperDocument.getElementsByName not implemented');
    }

    public getElementsByTagName(qualifiedName: string): ISuperHTMLCollection {
      throw new Error('SuperDocument.getElementsByTagName not implemented');
    }

    public getElementsByTagNameNS(namespace: string | null, localName: string): ISuperHTMLCollection {
      throw new Error('SuperDocument.getElementsByTagNameNS not implemented');
    }

    public hasFocus(): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'hasFocus', []);
    }

    public then<TResult1 = ISuperDocument, TResult2 = never>(onfulfilled?: ((value: ISuperDocument) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, SuperDocumentPropertyKeys, SuperDocumentConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperDocumentProperties extends IDocumentIsolateProperties, IDocumentOrShadowRootProperties, IHTMLDocumentIsolateProperties, INodeIsolateProperties, INonElementParentNodeProperties, IParentNodeProperties, IXPathEvaluatorBaseProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly URL?: Promise<string>;
  readonly anchors?: ISuperHTMLCollection;
  readonly body?: ISuperHTMLElement;
  readonly characterSet?: Promise<string>;
  readonly compatMode?: Promise<string>;
  readonly contentType?: Promise<string>;
  readonly cookie?: Promise<string>;
  readonly designMode?: Promise<string>;
  readonly dir?: Promise<string>;
  readonly doctype?: IDocumentType;
  readonly documentElement?: ISuperElement;
  readonly documentURI?: Promise<string>;
  readonly domain?: Promise<string>;
  readonly embeds?: ISuperHTMLCollection;
  readonly featurePolicy?: IFeaturePolicy;
  readonly forms?: ISuperHTMLCollection;
  readonly fullscreenEnabled?: Promise<boolean>;
  readonly head?: IHTMLHeadElement;
  readonly hidden?: Promise<boolean>;
  readonly images?: ISuperHTMLCollection;
  readonly implementation?: IDOMImplementation;
  readonly lastModified?: Promise<string>;
  readonly links?: ISuperHTMLCollection;
  readonly location?: ILocation;
  readonly plugins?: ISuperHTMLCollection;
  readonly readyState?: Promise<IDocumentReadyState>;
  readonly referrer?: Promise<string>;
  readonly scripts?: ISuperHTMLCollection;
  readonly scrollingElement?: ISuperElement;
  readonly title?: Promise<string>;
  readonly visibilityState?: Promise<IVisibilityState>;
}

export const SuperDocumentPropertyKeys = [...DocumentIsolatePropertyKeys, ...DocumentOrShadowRootPropertyKeys, ...HTMLDocumentIsolatePropertyKeys, ...NodeIsolatePropertyKeys, ...NonElementParentNodePropertyKeys, ...ParentNodePropertyKeys, ...XPathEvaluatorBasePropertyKeys, 'URL', 'anchors', 'body', 'characterSet', 'compatMode', 'contentType', 'cookie', 'designMode', 'dir', 'doctype', 'documentElement', 'documentURI', 'domain', 'embeds', 'featurePolicy', 'forms', 'fullscreenEnabled', 'head', 'hidden', 'images', 'implementation', 'lastModified', 'links', 'location', 'plugins', 'readyState', 'referrer', 'scripts', 'scrollingElement', 'title', 'visibilityState'];

export const SuperDocumentConstantKeys = [...DocumentIsolateConstantKeys, ...DocumentOrShadowRootConstantKeys, ...HTMLDocumentIsolateConstantKeys, ...NodeIsolateConstantKeys, ...NonElementParentNodeConstantKeys, ...ParentNodeConstantKeys, ...XPathEvaluatorBaseConstantKeys];
