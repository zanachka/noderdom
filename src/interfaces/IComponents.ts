import * as Types from '../Types';

export default interface IComponents {
  interfaces: Record<string, Types.Interface>;
  enums: Record<string, Types.Enum>;
  mixins: Record<string, Types.Interface>;
  typedefs: Types.TypeDef[];
  callbackFunctions: Record<string, Types.CallbackFunction>;
  callbackInterfaces: Record<string, Types.Interface>;
  dictionaries: Record<string, Types.Dictionary>;
  awaitedSupers?: Record<string, Types.Interface>;
  awaitedIsolates?: Record<string, Types.Interface>;
}
