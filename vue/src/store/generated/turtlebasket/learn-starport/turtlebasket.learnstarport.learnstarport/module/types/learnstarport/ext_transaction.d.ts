import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "turtlebasket.learnstarport.learnstarport";
export interface ExtTransaction {
    creator: string;
    id: number;
    chain: string;
    to: string;
    from: string;
    amount: string;
    txid: string;
}
export declare const ExtTransaction: {
    encode(message: ExtTransaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ExtTransaction;
    fromJSON(object: any): ExtTransaction;
    toJSON(message: ExtTransaction): unknown;
    fromPartial(object: DeepPartial<ExtTransaction>): ExtTransaction;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
