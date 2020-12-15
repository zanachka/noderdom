import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { ICSSRule } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ICSSRule, ICSSRuleProperties>();
export const awaitedHandler = new AwaitedHandler<ICSSRule>('CSSRule', getState, setState);

export function CSSRuleGenerator() {
  return class CSSRule implements ICSSRule {
    public static readonly CHARSET_RULE: number = 2;
    public static readonly FONT_FACE_RULE: number = 5;
    public static readonly IMPORT_RULE: number = 3;
    public static readonly MARGIN_RULE: number = 9;
    public static readonly MEDIA_RULE: number = 4;
    public static readonly NAMESPACE_RULE: number = 10;
    public static readonly PAGE_RULE: number = 6;
    public static readonly STYLE_RULE: number = 1;

    public readonly CHARSET_RULE: number = 2;
    public readonly FONT_FACE_RULE: number = 5;
    public readonly IMPORT_RULE: number = 3;
    public readonly MARGIN_RULE: number = 9;
    public readonly MEDIA_RULE: number = 4;
    public readonly NAMESPACE_RULE: number = 10;
    public readonly PAGE_RULE: number = 6;
    public readonly STYLE_RULE: number = 1;
    constructor() {
      initializeConstantsAndProperties<CSSRule>(this, CSSRuleConstantKeys, CSSRulePropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ICSSRuleProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const CSSRulePropertyKeys = [];

export const CSSRuleConstantKeys = ['CHARSET_RULE', 'FONT_FACE_RULE', 'IMPORT_RULE', 'MARGIN_RULE', 'MEDIA_RULE', 'NAMESPACE_RULE', 'PAGE_RULE', 'STYLE_RULE'];
