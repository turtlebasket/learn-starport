import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "turtlebasket.learnstarport.learnstarport";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateBchTx {
    creator: string;
    txid: string;
    to: string;
    from: string;
    amount: string;
}
export interface MsgCreateBchTxResponse {
    id: number;
}
export interface MsgUpdateBchTx {
    creator: string;
    id: number;
    txid: string;
    to: string;
    from: string;
    amount: string;
}
export interface MsgUpdateBchTxResponse {
}
export interface MsgDeleteBchTx {
    creator: string;
    id: number;
}
export interface MsgDeleteBchTxResponse {
}
export interface MsgCreateXmrTx {
    creator: string;
    txid: string;
    to: string;
    from: string;
    amount: string;
}
export interface MsgCreateXmrTxResponse {
    id: number;
}
export interface MsgUpdateXmrTx {
    creator: string;
    id: number;
    txid: string;
    to: string;
    from: string;
    amount: string;
}
export interface MsgUpdateXmrTxResponse {
}
export interface MsgDeleteXmrTx {
    creator: string;
    id: number;
}
export interface MsgDeleteXmrTxResponse {
}
export interface MsgCreateDogeTx {
    creator: string;
    txid: string;
    to: string;
    from: string;
    amount: string;
}
export interface MsgCreateDogeTxResponse {
    id: number;
}
export interface MsgUpdateDogeTx {
    creator: string;
    id: number;
    txid: string;
    to: string;
    from: string;
    amount: string;
}
export interface MsgUpdateDogeTxResponse {
}
export interface MsgDeleteDogeTx {
    creator: string;
    id: number;
}
export interface MsgDeleteDogeTxResponse {
}
export interface MsgCreateEthTx {
    creator: string;
    txid: string;
    to: string;
    from: string;
    amount: string;
}
export interface MsgCreateEthTxResponse {
    id: number;
}
export interface MsgUpdateEthTx {
    creator: string;
    id: number;
    txid: string;
    to: string;
    from: string;
    amount: string;
}
export interface MsgUpdateEthTxResponse {
}
export interface MsgDeleteEthTx {
    creator: string;
    id: number;
}
export interface MsgDeleteEthTxResponse {
}
export interface MsgCreateBtcTx {
    creator: string;
    txid: string;
    to: string;
    from: string;
    amount: string;
}
export interface MsgCreateBtcTxResponse {
    id: number;
}
export interface MsgUpdateBtcTx {
    creator: string;
    id: number;
    txid: string;
    to: string;
    from: string;
    amount: string;
}
export interface MsgUpdateBtcTxResponse {
}
export interface MsgDeleteBtcTx {
    creator: string;
    id: number;
}
export interface MsgDeleteBtcTxResponse {
}
export declare const MsgCreateBchTx: {
    encode(message: MsgCreateBchTx, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateBchTx;
    fromJSON(object: any): MsgCreateBchTx;
    toJSON(message: MsgCreateBchTx): unknown;
    fromPartial(object: DeepPartial<MsgCreateBchTx>): MsgCreateBchTx;
};
export declare const MsgCreateBchTxResponse: {
    encode(message: MsgCreateBchTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateBchTxResponse;
    fromJSON(object: any): MsgCreateBchTxResponse;
    toJSON(message: MsgCreateBchTxResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateBchTxResponse>): MsgCreateBchTxResponse;
};
export declare const MsgUpdateBchTx: {
    encode(message: MsgUpdateBchTx, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateBchTx;
    fromJSON(object: any): MsgUpdateBchTx;
    toJSON(message: MsgUpdateBchTx): unknown;
    fromPartial(object: DeepPartial<MsgUpdateBchTx>): MsgUpdateBchTx;
};
export declare const MsgUpdateBchTxResponse: {
    encode(_: MsgUpdateBchTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateBchTxResponse;
    fromJSON(_: any): MsgUpdateBchTxResponse;
    toJSON(_: MsgUpdateBchTxResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateBchTxResponse>): MsgUpdateBchTxResponse;
};
export declare const MsgDeleteBchTx: {
    encode(message: MsgDeleteBchTx, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteBchTx;
    fromJSON(object: any): MsgDeleteBchTx;
    toJSON(message: MsgDeleteBchTx): unknown;
    fromPartial(object: DeepPartial<MsgDeleteBchTx>): MsgDeleteBchTx;
};
export declare const MsgDeleteBchTxResponse: {
    encode(_: MsgDeleteBchTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteBchTxResponse;
    fromJSON(_: any): MsgDeleteBchTxResponse;
    toJSON(_: MsgDeleteBchTxResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteBchTxResponse>): MsgDeleteBchTxResponse;
};
export declare const MsgCreateXmrTx: {
    encode(message: MsgCreateXmrTx, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateXmrTx;
    fromJSON(object: any): MsgCreateXmrTx;
    toJSON(message: MsgCreateXmrTx): unknown;
    fromPartial(object: DeepPartial<MsgCreateXmrTx>): MsgCreateXmrTx;
};
export declare const MsgCreateXmrTxResponse: {
    encode(message: MsgCreateXmrTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateXmrTxResponse;
    fromJSON(object: any): MsgCreateXmrTxResponse;
    toJSON(message: MsgCreateXmrTxResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateXmrTxResponse>): MsgCreateXmrTxResponse;
};
export declare const MsgUpdateXmrTx: {
    encode(message: MsgUpdateXmrTx, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateXmrTx;
    fromJSON(object: any): MsgUpdateXmrTx;
    toJSON(message: MsgUpdateXmrTx): unknown;
    fromPartial(object: DeepPartial<MsgUpdateXmrTx>): MsgUpdateXmrTx;
};
export declare const MsgUpdateXmrTxResponse: {
    encode(_: MsgUpdateXmrTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateXmrTxResponse;
    fromJSON(_: any): MsgUpdateXmrTxResponse;
    toJSON(_: MsgUpdateXmrTxResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateXmrTxResponse>): MsgUpdateXmrTxResponse;
};
export declare const MsgDeleteXmrTx: {
    encode(message: MsgDeleteXmrTx, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteXmrTx;
    fromJSON(object: any): MsgDeleteXmrTx;
    toJSON(message: MsgDeleteXmrTx): unknown;
    fromPartial(object: DeepPartial<MsgDeleteXmrTx>): MsgDeleteXmrTx;
};
export declare const MsgDeleteXmrTxResponse: {
    encode(_: MsgDeleteXmrTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteXmrTxResponse;
    fromJSON(_: any): MsgDeleteXmrTxResponse;
    toJSON(_: MsgDeleteXmrTxResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteXmrTxResponse>): MsgDeleteXmrTxResponse;
};
export declare const MsgCreateDogeTx: {
    encode(message: MsgCreateDogeTx, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDogeTx;
    fromJSON(object: any): MsgCreateDogeTx;
    toJSON(message: MsgCreateDogeTx): unknown;
    fromPartial(object: DeepPartial<MsgCreateDogeTx>): MsgCreateDogeTx;
};
export declare const MsgCreateDogeTxResponse: {
    encode(message: MsgCreateDogeTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDogeTxResponse;
    fromJSON(object: any): MsgCreateDogeTxResponse;
    toJSON(message: MsgCreateDogeTxResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateDogeTxResponse>): MsgCreateDogeTxResponse;
};
export declare const MsgUpdateDogeTx: {
    encode(message: MsgUpdateDogeTx, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDogeTx;
    fromJSON(object: any): MsgUpdateDogeTx;
    toJSON(message: MsgUpdateDogeTx): unknown;
    fromPartial(object: DeepPartial<MsgUpdateDogeTx>): MsgUpdateDogeTx;
};
export declare const MsgUpdateDogeTxResponse: {
    encode(_: MsgUpdateDogeTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDogeTxResponse;
    fromJSON(_: any): MsgUpdateDogeTxResponse;
    toJSON(_: MsgUpdateDogeTxResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateDogeTxResponse>): MsgUpdateDogeTxResponse;
};
export declare const MsgDeleteDogeTx: {
    encode(message: MsgDeleteDogeTx, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteDogeTx;
    fromJSON(object: any): MsgDeleteDogeTx;
    toJSON(message: MsgDeleteDogeTx): unknown;
    fromPartial(object: DeepPartial<MsgDeleteDogeTx>): MsgDeleteDogeTx;
};
export declare const MsgDeleteDogeTxResponse: {
    encode(_: MsgDeleteDogeTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteDogeTxResponse;
    fromJSON(_: any): MsgDeleteDogeTxResponse;
    toJSON(_: MsgDeleteDogeTxResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteDogeTxResponse>): MsgDeleteDogeTxResponse;
};
export declare const MsgCreateEthTx: {
    encode(message: MsgCreateEthTx, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateEthTx;
    fromJSON(object: any): MsgCreateEthTx;
    toJSON(message: MsgCreateEthTx): unknown;
    fromPartial(object: DeepPartial<MsgCreateEthTx>): MsgCreateEthTx;
};
export declare const MsgCreateEthTxResponse: {
    encode(message: MsgCreateEthTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateEthTxResponse;
    fromJSON(object: any): MsgCreateEthTxResponse;
    toJSON(message: MsgCreateEthTxResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateEthTxResponse>): MsgCreateEthTxResponse;
};
export declare const MsgUpdateEthTx: {
    encode(message: MsgUpdateEthTx, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateEthTx;
    fromJSON(object: any): MsgUpdateEthTx;
    toJSON(message: MsgUpdateEthTx): unknown;
    fromPartial(object: DeepPartial<MsgUpdateEthTx>): MsgUpdateEthTx;
};
export declare const MsgUpdateEthTxResponse: {
    encode(_: MsgUpdateEthTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateEthTxResponse;
    fromJSON(_: any): MsgUpdateEthTxResponse;
    toJSON(_: MsgUpdateEthTxResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateEthTxResponse>): MsgUpdateEthTxResponse;
};
export declare const MsgDeleteEthTx: {
    encode(message: MsgDeleteEthTx, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteEthTx;
    fromJSON(object: any): MsgDeleteEthTx;
    toJSON(message: MsgDeleteEthTx): unknown;
    fromPartial(object: DeepPartial<MsgDeleteEthTx>): MsgDeleteEthTx;
};
export declare const MsgDeleteEthTxResponse: {
    encode(_: MsgDeleteEthTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteEthTxResponse;
    fromJSON(_: any): MsgDeleteEthTxResponse;
    toJSON(_: MsgDeleteEthTxResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteEthTxResponse>): MsgDeleteEthTxResponse;
};
export declare const MsgCreateBtcTx: {
    encode(message: MsgCreateBtcTx, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateBtcTx;
    fromJSON(object: any): MsgCreateBtcTx;
    toJSON(message: MsgCreateBtcTx): unknown;
    fromPartial(object: DeepPartial<MsgCreateBtcTx>): MsgCreateBtcTx;
};
export declare const MsgCreateBtcTxResponse: {
    encode(message: MsgCreateBtcTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateBtcTxResponse;
    fromJSON(object: any): MsgCreateBtcTxResponse;
    toJSON(message: MsgCreateBtcTxResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateBtcTxResponse>): MsgCreateBtcTxResponse;
};
export declare const MsgUpdateBtcTx: {
    encode(message: MsgUpdateBtcTx, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateBtcTx;
    fromJSON(object: any): MsgUpdateBtcTx;
    toJSON(message: MsgUpdateBtcTx): unknown;
    fromPartial(object: DeepPartial<MsgUpdateBtcTx>): MsgUpdateBtcTx;
};
export declare const MsgUpdateBtcTxResponse: {
    encode(_: MsgUpdateBtcTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateBtcTxResponse;
    fromJSON(_: any): MsgUpdateBtcTxResponse;
    toJSON(_: MsgUpdateBtcTxResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateBtcTxResponse>): MsgUpdateBtcTxResponse;
};
export declare const MsgDeleteBtcTx: {
    encode(message: MsgDeleteBtcTx, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteBtcTx;
    fromJSON(object: any): MsgDeleteBtcTx;
    toJSON(message: MsgDeleteBtcTx): unknown;
    fromPartial(object: DeepPartial<MsgDeleteBtcTx>): MsgDeleteBtcTx;
};
export declare const MsgDeleteBtcTxResponse: {
    encode(_: MsgDeleteBtcTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteBtcTxResponse;
    fromJSON(_: any): MsgDeleteBtcTxResponse;
    toJSON(_: MsgDeleteBtcTxResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteBtcTxResponse>): MsgDeleteBtcTxResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateBchTx(request: MsgCreateBchTx): Promise<MsgCreateBchTxResponse>;
    UpdateBchTx(request: MsgUpdateBchTx): Promise<MsgUpdateBchTxResponse>;
    DeleteBchTx(request: MsgDeleteBchTx): Promise<MsgDeleteBchTxResponse>;
    CreateXmrTx(request: MsgCreateXmrTx): Promise<MsgCreateXmrTxResponse>;
    UpdateXmrTx(request: MsgUpdateXmrTx): Promise<MsgUpdateXmrTxResponse>;
    DeleteXmrTx(request: MsgDeleteXmrTx): Promise<MsgDeleteXmrTxResponse>;
    CreateDogeTx(request: MsgCreateDogeTx): Promise<MsgCreateDogeTxResponse>;
    UpdateDogeTx(request: MsgUpdateDogeTx): Promise<MsgUpdateDogeTxResponse>;
    DeleteDogeTx(request: MsgDeleteDogeTx): Promise<MsgDeleteDogeTxResponse>;
    CreateEthTx(request: MsgCreateEthTx): Promise<MsgCreateEthTxResponse>;
    UpdateEthTx(request: MsgUpdateEthTx): Promise<MsgUpdateEthTxResponse>;
    DeleteEthTx(request: MsgDeleteEthTx): Promise<MsgDeleteEthTxResponse>;
    CreateBtcTx(request: MsgCreateBtcTx): Promise<MsgCreateBtcTxResponse>;
    UpdateBtcTx(request: MsgUpdateBtcTx): Promise<MsgUpdateBtcTxResponse>;
    DeleteBtcTx(request: MsgDeleteBtcTx): Promise<MsgDeleteBtcTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateBchTx(request: MsgCreateBchTx): Promise<MsgCreateBchTxResponse>;
    UpdateBchTx(request: MsgUpdateBchTx): Promise<MsgUpdateBchTxResponse>;
    DeleteBchTx(request: MsgDeleteBchTx): Promise<MsgDeleteBchTxResponse>;
    CreateXmrTx(request: MsgCreateXmrTx): Promise<MsgCreateXmrTxResponse>;
    UpdateXmrTx(request: MsgUpdateXmrTx): Promise<MsgUpdateXmrTxResponse>;
    DeleteXmrTx(request: MsgDeleteXmrTx): Promise<MsgDeleteXmrTxResponse>;
    CreateDogeTx(request: MsgCreateDogeTx): Promise<MsgCreateDogeTxResponse>;
    UpdateDogeTx(request: MsgUpdateDogeTx): Promise<MsgUpdateDogeTxResponse>;
    DeleteDogeTx(request: MsgDeleteDogeTx): Promise<MsgDeleteDogeTxResponse>;
    CreateEthTx(request: MsgCreateEthTx): Promise<MsgCreateEthTxResponse>;
    UpdateEthTx(request: MsgUpdateEthTx): Promise<MsgUpdateEthTxResponse>;
    DeleteEthTx(request: MsgDeleteEthTx): Promise<MsgDeleteEthTxResponse>;
    CreateBtcTx(request: MsgCreateBtcTx): Promise<MsgCreateBtcTxResponse>;
    UpdateBtcTx(request: MsgUpdateBtcTx): Promise<MsgUpdateBtcTxResponse>;
    DeleteBtcTx(request: MsgDeleteBtcTx): Promise<MsgDeleteBtcTxResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
