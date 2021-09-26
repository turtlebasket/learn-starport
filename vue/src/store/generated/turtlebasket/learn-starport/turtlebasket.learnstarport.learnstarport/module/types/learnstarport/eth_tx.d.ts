import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "turtlebasket.learnstarport.learnstarport";
export interface EthTx {
    creator: string;
    id: number;
    txid: string;
    to: string;
    from: string;
    amount: string;
}
export declare const EthTx: {
    encode(message: EthTx, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EthTx;
    fromJSON(object: any): EthTx;
    toJSON(message: EthTx): unknown;
    fromPartial(object: DeepPartial<EthTx>): EthTx;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
