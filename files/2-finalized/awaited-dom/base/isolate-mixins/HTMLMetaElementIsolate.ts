import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLMetaElementIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLMetaElementIsolate, IHTMLMetaElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLMetaElementIsolate>('HTMLMetaElementIsolate', getState, setState);

export default class HTMLMetaElementIsolate implements IHTMLMetaElementIsolate {
  public get content(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'content', false);
  }

  public get httpEquiv(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'httpEquiv', false);
  }

  public get name(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'name', false);
  }

  public get scheme(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'scheme', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLMetaElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly content?: Promise<string>;
  readonly httpEquiv?: Promise<string>;
  readonly name?: Promise<string>;
  readonly scheme?: Promise<string>;
}

export const HTMLMetaElementIsolatePropertyKeys = ['content', 'httpEquiv', 'name', 'scheme'];

export const HTMLMetaElementIsolateConstantKeys = [];
