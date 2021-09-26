import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "turtlebasket.learnstarport.learnstarport";
export interface BtcTx {
    creator: string;
    id: number;
    txid: string;
    to: string;
    from: string;
    amount: string;
}
export declare const BtcTx: {
    encode(message: BtcTx, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): BtcTx;
    fromJSON(object: any): BtcTx;
    toJSON(message: BtcTx): unknown;
    fromPartial(object: DeepPartial<BtcTx>): BtcTx;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
