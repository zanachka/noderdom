import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLTableColElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLTableColElement, IHTMLTableColElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLTableColElement>('HTMLTableColElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLTableColElement>(getState, setState, awaitedHandler);

export function HTMLTableColElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTableColElement extends HTMLElement implements IHTMLTableColElement, PromiseLike<IHTMLTableColElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLTableColElement',
      });
    }

    // properties

    public get align(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'align', false);
    }

    public get ch(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'ch', false);
    }

    public get chOff(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'chOff', false);
    }

    public get span(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'span', false);
    }

    public get vAlign(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'vAlign', false);
    }

    public get width(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'width', false);
    }

    public then<TResult1 = IHTMLTableColElement, TResult2 = never>(onfulfilled?: ((value: IHTMLTableColElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLTableColElementPropertyKeys, HTMLTableColElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTableColElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly align?: Promise<string>;
  readonly ch?: Promise<string>;
  readonly chOff?: Promise<string>;
  readonly span?: Promise<number>;
  readonly vAlign?: Promise<string>;
  readonly width?: Promise<string>;
}

export const HTMLTableColElementPropertyKeys = [...HTMLElementPropertyKeys, 'align', 'ch', 'chOff', 'span', 'vAlign', 'width'];

export const HTMLTableColElementConstantKeys = [...HTMLElementConstantKeys];
