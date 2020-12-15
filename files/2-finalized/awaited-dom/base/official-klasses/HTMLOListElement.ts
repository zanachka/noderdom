import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IHTMLOListElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLOListElement, IHTMLOListElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLOListElement>('HTMLOListElement', getState, setState);
export const nodeAttacher = new NodeAttacher<IHTMLOListElement>(getState, setState, awaitedHandler);

export function HTMLOListElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLOListElement extends HTMLElement implements IHTMLOListElement, PromiseLike<IHTMLOListElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<HTMLOListElement>(this, HTMLOListElementConstantKeys, HTMLOListElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createHTMLOListElement',
      });
    }

    // properties

    public get compact(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'compact', false);
    }

    public get reversed(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'reversed', false);
    }

    public get start(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'start', false);
    }

    public get type(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'type', false);
    }

    public then<TResult1 = IHTMLOListElement, TResult2 = never>(onfulfilled?: ((value: IHTMLOListElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLOListElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly compact?: Promise<boolean>;
  readonly reversed?: Promise<boolean>;
  readonly start?: Promise<number>;
  readonly type?: Promise<string>;
}

export const HTMLOListElementPropertyKeys = [...HTMLElementPropertyKeys, 'compact', 'reversed', 'start', 'type'];

export const HTMLOListElementConstantKeys = [...HTMLElementConstantKeys];
