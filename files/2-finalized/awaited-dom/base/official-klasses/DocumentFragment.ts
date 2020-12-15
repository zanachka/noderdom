import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IDocumentFragment, INode, INonElementParentNode, IParentNode } from '../interfaces/official';
import { INodeProperties, NodePropertyKeys, NodeConstantKeys } from './Node';
import { INonElementParentNodeProperties, NonElementParentNodePropertyKeys, NonElementParentNodeConstantKeys } from '../official-mixins/NonElementParentNode';
import { IParentNodeProperties, ParentNodePropertyKeys, ParentNodeConstantKeys } from '../official-mixins/ParentNode';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IDocumentFragment, IDocumentFragmentProperties>();
export const awaitedHandler = new AwaitedHandler<IDocumentFragment>('DocumentFragment', getState, setState);
export const nodeAttacher = new NodeAttacher<IDocumentFragment>(getState, setState, awaitedHandler);

export function DocumentFragmentGenerator(Node: Constructable<INode>, NonElementParentNode: Constructable<INonElementParentNode>, ParentNode: Constructable<IParentNode>) {
  const Parent = (ClassMixer(Node, [NonElementParentNode, ParentNode]) as unknown) as Constructable<INode & INonElementParentNode & IParentNode>;

  return class DocumentFragment extends Parent implements IDocumentFragment, PromiseLike<IDocumentFragment> {
    constructor() {
      super();
      initializeConstantsAndProperties<DocumentFragment>(this, DocumentFragmentConstantKeys, DocumentFragmentPropertyKeys);
      setState(this, {
        createInstanceName: 'createDocumentFragment',
      });
    }

    public then<TResult1 = IDocumentFragment, TResult2 = never>(onfulfilled?: ((value: IDocumentFragment) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDocumentFragmentProperties extends INodeProperties, INonElementParentNodeProperties, IParentNodeProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
}

export const DocumentFragmentPropertyKeys = [...NodePropertyKeys, ...NonElementParentNodePropertyKeys, ...ParentNodePropertyKeys];

export const DocumentFragmentConstantKeys = [...NodeConstantKeys, ...NonElementParentNodeConstantKeys, ...ParentNodeConstantKeys];
