import { Reader, Writer } from 'protobufjs/minimal';
import { ExtTransaction } from '../learnstarport/ext_transaction';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "turtlebasket.learnstarport.learnstarport";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetExtTransactionRequest {
    id: number;
}
export interface QueryGetExtTransactionResponse {
    ExtTransaction: ExtTransaction | undefined;
}
export interface QueryAllExtTransactionRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllExtTransactionResponse {
    ExtTransaction: ExtTransaction[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetExtTransactionRequest: {
    encode(message: QueryGetExtTransactionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetExtTransactionRequest;
    fromJSON(object: any): QueryGetExtTransactionRequest;
    toJSON(message: QueryGetExtTransactionRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetExtTransactionRequest>): QueryGetExtTransactionRequest;
};
export declare const QueryGetExtTransactionResponse: {
    encode(message: QueryGetExtTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetExtTransactionResponse;
    fromJSON(object: any): QueryGetExtTransactionResponse;
    toJSON(message: QueryGetExtTransactionResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetExtTransactionResponse>): QueryGetExtTransactionResponse;
};
export declare const QueryAllExtTransactionRequest: {
    encode(message: QueryAllExtTransactionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllExtTransactionRequest;
    fromJSON(object: any): QueryAllExtTransactionRequest;
    toJSON(message: QueryAllExtTransactionRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllExtTransactionRequest>): QueryAllExtTransactionRequest;
};
export declare const QueryAllExtTransactionResponse: {
    encode(message: QueryAllExtTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllExtTransactionResponse;
    fromJSON(object: any): QueryAllExtTransactionResponse;
    toJSON(message: QueryAllExtTransactionResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllExtTransactionResponse>): QueryAllExtTransactionResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a extTransaction by id. */
    ExtTransaction(request: QueryGetExtTransactionRequest): Promise<QueryGetExtTransactionResponse>;
    /** Queries a list of extTransaction items. */
    ExtTransactionAll(request: QueryAllExtTransactionRequest): Promise<QueryAllExtTransactionResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    ExtTransaction(request: QueryGetExtTransactionRequest): Promise<QueryGetExtTransactionResponse>;
    ExtTransactionAll(request: QueryAllExtTransactionRequest): Promise<QueryAllExtTransactionResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
