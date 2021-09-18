import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "turtlebasket.learnstarport.learnstarport";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateExtTransaction {
    creator: string;
    chain: string;
    to: string;
    from: string;
    amount: string;
    txid: string;
}
export interface MsgCreateExtTransactionResponse {
    id: number;
}
export interface MsgUpdateExtTransaction {
    creator: string;
    id: number;
    chain: string;
    to: string;
    from: string;
    amount: string;
    txid: string;
}
export interface MsgUpdateExtTransactionResponse {
}
export interface MsgDeleteExtTransaction {
    creator: string;
    id: number;
}
export interface MsgDeleteExtTransactionResponse {
}
export declare const MsgCreateExtTransaction: {
    encode(message: MsgCreateExtTransaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateExtTransaction;
    fromJSON(object: any): MsgCreateExtTransaction;
    toJSON(message: MsgCreateExtTransaction): unknown;
    fromPartial(object: DeepPartial<MsgCreateExtTransaction>): MsgCreateExtTransaction;
};
export declare const MsgCreateExtTransactionResponse: {
    encode(message: MsgCreateExtTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateExtTransactionResponse;
    fromJSON(object: any): MsgCreateExtTransactionResponse;
    toJSON(message: MsgCreateExtTransactionResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateExtTransactionResponse>): MsgCreateExtTransactionResponse;
};
export declare const MsgUpdateExtTransaction: {
    encode(message: MsgUpdateExtTransaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateExtTransaction;
    fromJSON(object: any): MsgUpdateExtTransaction;
    toJSON(message: MsgUpdateExtTransaction): unknown;
    fromPartial(object: DeepPartial<MsgUpdateExtTransaction>): MsgUpdateExtTransaction;
};
export declare const MsgUpdateExtTransactionResponse: {
    encode(_: MsgUpdateExtTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateExtTransactionResponse;
    fromJSON(_: any): MsgUpdateExtTransactionResponse;
    toJSON(_: MsgUpdateExtTransactionResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateExtTransactionResponse>): MsgUpdateExtTransactionResponse;
};
export declare const MsgDeleteExtTransaction: {
    encode(message: MsgDeleteExtTransaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteExtTransaction;
    fromJSON(object: any): MsgDeleteExtTransaction;
    toJSON(message: MsgDeleteExtTransaction): unknown;
    fromPartial(object: DeepPartial<MsgDeleteExtTransaction>): MsgDeleteExtTransaction;
};
export declare const MsgDeleteExtTransactionResponse: {
    encode(_: MsgDeleteExtTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteExtTransactionResponse;
    fromJSON(_: any): MsgDeleteExtTransactionResponse;
    toJSON(_: MsgDeleteExtTransactionResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteExtTransactionResponse>): MsgDeleteExtTransactionResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateExtTransaction(request: MsgCreateExtTransaction): Promise<MsgCreateExtTransactionResponse>;
    UpdateExtTransaction(request: MsgUpdateExtTransaction): Promise<MsgUpdateExtTransactionResponse>;
    DeleteExtTransaction(request: MsgDeleteExtTransaction): Promise<MsgDeleteExtTransactionResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateExtTransaction(request: MsgCreateExtTransaction): Promise<MsgCreateExtTransactionResponse>;
    UpdateExtTransaction(request: MsgUpdateExtTransaction): Promise<MsgUpdateExtTransactionResponse>;
    DeleteExtTransaction(request: MsgDeleteExtTransaction): Promise<MsgDeleteExtTransactionResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
