import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IHTMLOptGroupElement, IHTMLElement } from '../interfaces/official';
import { IHTMLElementProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLOptGroupElement, IHTMLOptGroupElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLOptGroupElement>('HTMLOptGroupElement', getState, setState);
export const nodeFactory = new NodeFactory<IHTMLOptGroupElement>(getState, setState, awaitedHandler);

export function HTMLOptGroupElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLOptGroupElement extends HTMLElement implements IHTMLOptGroupElement, PromiseLike<IHTMLOptGroupElement> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createHTMLOptGroupElement',
      });
    }

    // properties

    public get disabled(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'disabled', false);
    }

    public get label(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'label', false);
    }

    public then<TResult1 = IHTMLOptGroupElement, TResult2 = never>(onfulfilled?: ((value: IHTMLOptGroupElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLOptGroupElementPropertyKeys, HTMLOptGroupElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLOptGroupElementProperties extends IHTMLElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly disabled?: Promise<boolean>;
  readonly label?: Promise<string>;
}

export const HTMLOptGroupElementPropertyKeys = [...HTMLElementPropertyKeys, 'disabled', 'label'];

export const HTMLOptGroupElementConstantKeys = [...HTMLElementConstantKeys];
