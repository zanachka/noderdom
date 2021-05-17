import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLInputElementIsolate } from '../interfaces/isolate';
import { IFileList, IHTMLFormElement, IValidityState, ISelectionMode } from '../interfaces/official';
import { ISuperNodeList, ISuperHTMLElement } from '../interfaces/super';
export declare const getState: (instance: IHTMLInputElementIsolate) => IHTMLInputElementIsolateProperties, setState: (instance: IHTMLInputElementIsolate, properties: Partial<IHTMLInputElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLInputElementIsolate>;
export default class HTMLInputElementIsolate implements IHTMLInputElementIsolate {
    get accept(): Promise<string>;
    get alt(): Promise<string>;
    get autocomplete(): Promise<string>;
    get autofocus(): Promise<boolean>;
    get checked(): Promise<boolean>;
    get defaultChecked(): Promise<boolean>;
    get defaultValue(): Promise<string>;
    get dirName(): Promise<string>;
    get disabled(): Promise<boolean>;
    get files(): IFileList;
    get form(): IHTMLFormElement;
    get formAction(): Promise<string>;
    get formEnctype(): Promise<string>;
    get formMethod(): Promise<string>;
    get formNoValidate(): Promise<boolean>;
    get formTarget(): Promise<string>;
    get height(): Promise<number> | Promise<string>;
    get indeterminate(): Promise<boolean>;
    get inputMode(): Promise<string>;
    get labels(): ISuperNodeList;
    get list(): ISuperHTMLElement;
    get max(): Promise<string> | Promise<number>;
    get maxLength(): Promise<number>;
    get min(): Promise<string> | Promise<number>;
    get minLength(): Promise<number>;
    get multiple(): Promise<boolean>;
    get name(): Promise<string>;
    get pattern(): Promise<string>;
    get placeholder(): Promise<string>;
    get readOnly(): Promise<boolean>;
    get required(): Promise<boolean>;
    get selectionDirection(): Promise<string | null>;
    get selectionEnd(): Promise<number | null>;
    get selectionStart(): Promise<number | null>;
    get size(): Promise<string> | Promise<number>;
    get src(): Promise<string>;
    get step(): Promise<string>;
    get type(): Promise<string>;
    get validationMessage(): Promise<string>;
    get validity(): Promise<IValidityState>;
    get value(): Promise<string> | Promise<number>;
    get valueAsDate(): Promise<any>;
    get valueAsNumber(): Promise<number>;
    get width(): Promise<number> | Promise<string>;
    get willValidate(): Promise<boolean>;
    checkValidity(): Promise<boolean>;
    reportValidity(): Promise<boolean>;
    select(): Promise<void>;
    setRangeText(replacement: string, start?: number, end?: number, selectionMode?: ISelectionMode): Promise<void>;
    setSelectionRange(start: number, end: number, direction?: string): Promise<void>;
    stepDown(n?: number): Promise<void>;
    stepUp(n?: number): Promise<void>;
}
export interface IHTMLInputElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly accept?: Promise<string>;
    readonly alt?: Promise<string>;
    readonly autocomplete?: Promise<string>;
    readonly autofocus?: Promise<boolean>;
    readonly checked?: Promise<boolean>;
    readonly defaultChecked?: Promise<boolean>;
    readonly defaultValue?: Promise<string>;
    readonly dirName?: Promise<string>;
    readonly disabled?: Promise<boolean>;
    readonly files?: IFileList;
    readonly form?: IHTMLFormElement;
    readonly formAction?: Promise<string>;
    readonly formEnctype?: Promise<string>;
    readonly formMethod?: Promise<string>;
    readonly formNoValidate?: Promise<boolean>;
    readonly formTarget?: Promise<string>;
    readonly height?: Promise<number> | Promise<string>;
    readonly indeterminate?: Promise<boolean>;
    readonly inputMode?: Promise<string>;
    readonly labels?: ISuperNodeList;
    readonly list?: ISuperHTMLElement;
    readonly max?: Promise<string> | Promise<number>;
    readonly maxLength?: Promise<number>;
    readonly min?: Promise<string> | Promise<number>;
    readonly minLength?: Promise<number>;
    readonly multiple?: Promise<boolean>;
    readonly name?: Promise<string>;
    readonly pattern?: Promise<string>;
    readonly placeholder?: Promise<string>;
    readonly readOnly?: Promise<boolean>;
    readonly required?: Promise<boolean>;
    readonly selectionDirection?: Promise<string | null>;
    readonly selectionEnd?: Promise<number | null>;
    readonly selectionStart?: Promise<number | null>;
    readonly size?: Promise<string> | Promise<number>;
    readonly src?: Promise<string>;
    readonly step?: Promise<string>;
    readonly type?: Promise<string>;
    readonly validationMessage?: Promise<string>;
    readonly validity?: Promise<IValidityState>;
    readonly value?: Promise<string> | Promise<number>;
    readonly valueAsDate?: Promise<any>;
    readonly valueAsNumber?: Promise<number>;
    readonly width?: Promise<number> | Promise<string>;
    readonly willValidate?: Promise<boolean>;
}
export declare const HTMLInputElementIsolatePropertyKeys: string[];
export declare const HTMLInputElementIsolateConstantKeys: never[];
