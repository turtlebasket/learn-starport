import { Reader, Writer } from 'protobufjs/minimal';
import { BchTx } from '../learnstarport/bch_tx';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { XmrTx } from '../learnstarport/xmr_tx';
import { DogeTx } from '../learnstarport/doge_tx';
import { EthTx } from '../learnstarport/eth_tx';
import { BtcTx } from '../learnstarport/btc_tx';
export declare const protobufPackage = "turtlebasket.learnstarport.learnstarport";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetBchTxRequest {
    id: number;
}
export interface QueryGetBchTxResponse {
    BchTx: BchTx | undefined;
}
export interface QueryAllBchTxRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllBchTxResponse {
    BchTx: BchTx[];
    pagination: PageResponse | undefined;
}
export interface QueryGetXmrTxRequest {
    id: number;
}
export interface QueryGetXmrTxResponse {
    XmrTx: XmrTx | undefined;
}
export interface QueryAllXmrTxRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllXmrTxResponse {
    XmrTx: XmrTx[];
    pagination: PageResponse | undefined;
}
export interface QueryGetDogeTxRequest {
    id: number;
}
export interface QueryGetDogeTxResponse {
    DogeTx: DogeTx | undefined;
}
export interface QueryAllDogeTxRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllDogeTxResponse {
    DogeTx: DogeTx[];
    pagination: PageResponse | undefined;
}
export interface QueryGetEthTxRequest {
    id: number;
}
export interface QueryGetEthTxResponse {
    EthTx: EthTx | undefined;
}
export interface QueryAllEthTxRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllEthTxResponse {
    EthTx: EthTx[];
    pagination: PageResponse | undefined;
}
export interface QueryGetBtcTxRequest {
    id: number;
}
export interface QueryGetBtcTxResponse {
    BtcTx: BtcTx | undefined;
}
export interface QueryAllBtcTxRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllBtcTxResponse {
    BtcTx: BtcTx[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetBchTxRequest: {
    encode(message: QueryGetBchTxRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBchTxRequest;
    fromJSON(object: any): QueryGetBchTxRequest;
    toJSON(message: QueryGetBchTxRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetBchTxRequest>): QueryGetBchTxRequest;
};
export declare const QueryGetBchTxResponse: {
    encode(message: QueryGetBchTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBchTxResponse;
    fromJSON(object: any): QueryGetBchTxResponse;
    toJSON(message: QueryGetBchTxResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetBchTxResponse>): QueryGetBchTxResponse;
};
export declare const QueryAllBchTxRequest: {
    encode(message: QueryAllBchTxRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBchTxRequest;
    fromJSON(object: any): QueryAllBchTxRequest;
    toJSON(message: QueryAllBchTxRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllBchTxRequest>): QueryAllBchTxRequest;
};
export declare const QueryAllBchTxResponse: {
    encode(message: QueryAllBchTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBchTxResponse;
    fromJSON(object: any): QueryAllBchTxResponse;
    toJSON(message: QueryAllBchTxResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllBchTxResponse>): QueryAllBchTxResponse;
};
export declare const QueryGetXmrTxRequest: {
    encode(message: QueryGetXmrTxRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetXmrTxRequest;
    fromJSON(object: any): QueryGetXmrTxRequest;
    toJSON(message: QueryGetXmrTxRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetXmrTxRequest>): QueryGetXmrTxRequest;
};
export declare const QueryGetXmrTxResponse: {
    encode(message: QueryGetXmrTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetXmrTxResponse;
    fromJSON(object: any): QueryGetXmrTxResponse;
    toJSON(message: QueryGetXmrTxResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetXmrTxResponse>): QueryGetXmrTxResponse;
};
export declare const QueryAllXmrTxRequest: {
    encode(message: QueryAllXmrTxRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllXmrTxRequest;
    fromJSON(object: any): QueryAllXmrTxRequest;
    toJSON(message: QueryAllXmrTxRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllXmrTxRequest>): QueryAllXmrTxRequest;
};
export declare const QueryAllXmrTxResponse: {
    encode(message: QueryAllXmrTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllXmrTxResponse;
    fromJSON(object: any): QueryAllXmrTxResponse;
    toJSON(message: QueryAllXmrTxResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllXmrTxResponse>): QueryAllXmrTxResponse;
};
export declare const QueryGetDogeTxRequest: {
    encode(message: QueryGetDogeTxRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDogeTxRequest;
    fromJSON(object: any): QueryGetDogeTxRequest;
    toJSON(message: QueryGetDogeTxRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetDogeTxRequest>): QueryGetDogeTxRequest;
};
export declare const QueryGetDogeTxResponse: {
    encode(message: QueryGetDogeTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDogeTxResponse;
    fromJSON(object: any): QueryGetDogeTxResponse;
    toJSON(message: QueryGetDogeTxResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetDogeTxResponse>): QueryGetDogeTxResponse;
};
export declare const QueryAllDogeTxRequest: {
    encode(message: QueryAllDogeTxRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDogeTxRequest;
    fromJSON(object: any): QueryAllDogeTxRequest;
    toJSON(message: QueryAllDogeTxRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllDogeTxRequest>): QueryAllDogeTxRequest;
};
export declare const QueryAllDogeTxResponse: {
    encode(message: QueryAllDogeTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDogeTxResponse;
    fromJSON(object: any): QueryAllDogeTxResponse;
    toJSON(message: QueryAllDogeTxResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllDogeTxResponse>): QueryAllDogeTxResponse;
};
export declare const QueryGetEthTxRequest: {
    encode(message: QueryGetEthTxRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetEthTxRequest;
    fromJSON(object: any): QueryGetEthTxRequest;
    toJSON(message: QueryGetEthTxRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetEthTxRequest>): QueryGetEthTxRequest;
};
export declare const QueryGetEthTxResponse: {
    encode(message: QueryGetEthTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetEthTxResponse;
    fromJSON(object: any): QueryGetEthTxResponse;
    toJSON(message: QueryGetEthTxResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetEthTxResponse>): QueryGetEthTxResponse;
};
export declare const QueryAllEthTxRequest: {
    encode(message: QueryAllEthTxRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllEthTxRequest;
    fromJSON(object: any): QueryAllEthTxRequest;
    toJSON(message: QueryAllEthTxRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllEthTxRequest>): QueryAllEthTxRequest;
};
export declare const QueryAllEthTxResponse: {
    encode(message: QueryAllEthTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllEthTxResponse;
    fromJSON(object: any): QueryAllEthTxResponse;
    toJSON(message: QueryAllEthTxResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllEthTxResponse>): QueryAllEthTxResponse;
};
export declare const QueryGetBtcTxRequest: {
    encode(message: QueryGetBtcTxRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBtcTxRequest;
    fromJSON(object: any): QueryGetBtcTxRequest;
    toJSON(message: QueryGetBtcTxRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetBtcTxRequest>): QueryGetBtcTxRequest;
};
export declare const QueryGetBtcTxResponse: {
    encode(message: QueryGetBtcTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBtcTxResponse;
    fromJSON(object: any): QueryGetBtcTxResponse;
    toJSON(message: QueryGetBtcTxResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetBtcTxResponse>): QueryGetBtcTxResponse;
};
export declare const QueryAllBtcTxRequest: {
    encode(message: QueryAllBtcTxRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBtcTxRequest;
    fromJSON(object: any): QueryAllBtcTxRequest;
    toJSON(message: QueryAllBtcTxRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllBtcTxRequest>): QueryAllBtcTxRequest;
};
export declare const QueryAllBtcTxResponse: {
    encode(message: QueryAllBtcTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBtcTxResponse;
    fromJSON(object: any): QueryAllBtcTxResponse;
    toJSON(message: QueryAllBtcTxResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllBtcTxResponse>): QueryAllBtcTxResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a bchTx by id. */
    BchTx(request: QueryGetBchTxRequest): Promise<QueryGetBchTxResponse>;
    /** Queries a list of bchTx items. */
    BchTxAll(request: QueryAllBchTxRequest): Promise<QueryAllBchTxResponse>;
    /** Queries a xmrTx by id. */
    XmrTx(request: QueryGetXmrTxRequest): Promise<QueryGetXmrTxResponse>;
    /** Queries a list of xmrTx items. */
    XmrTxAll(request: QueryAllXmrTxRequest): Promise<QueryAllXmrTxResponse>;
    /** Queries a dogeTx by id. */
    DogeTx(request: QueryGetDogeTxRequest): Promise<QueryGetDogeTxResponse>;
    /** Queries a list of dogeTx items. */
    DogeTxAll(request: QueryAllDogeTxRequest): Promise<QueryAllDogeTxResponse>;
    /** Queries a ethTx by id. */
    EthTx(request: QueryGetEthTxRequest): Promise<QueryGetEthTxResponse>;
    /** Queries a list of ethTx items. */
    EthTxAll(request: QueryAllEthTxRequest): Promise<QueryAllEthTxResponse>;
    /** Queries a btcTx by id. */
    BtcTx(request: QueryGetBtcTxRequest): Promise<QueryGetBtcTxResponse>;
    /** Queries a list of btcTx items. */
    BtcTxAll(request: QueryAllBtcTxRequest): Promise<QueryAllBtcTxResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    BchTx(request: QueryGetBchTxRequest): Promise<QueryGetBchTxResponse>;
    BchTxAll(request: QueryAllBchTxRequest): Promise<QueryAllBchTxResponse>;
    XmrTx(request: QueryGetXmrTxRequest): Promise<QueryGetXmrTxResponse>;
    XmrTxAll(request: QueryAllXmrTxRequest): Promise<QueryAllXmrTxResponse>;
    DogeTx(request: QueryGetDogeTxRequest): Promise<QueryGetDogeTxResponse>;
    DogeTxAll(request: QueryAllDogeTxRequest): Promise<QueryAllDogeTxResponse>;
    EthTx(request: QueryGetEthTxRequest): Promise<QueryGetEthTxResponse>;
    EthTxAll(request: QueryAllEthTxRequest): Promise<QueryAllEthTxResponse>;
    BtcTx(request: QueryGetBtcTxRequest): Promise<QueryGetBtcTxResponse>;
    BtcTxAll(request: QueryAllBtcTxRequest): Promise<QueryAllBtcTxResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
