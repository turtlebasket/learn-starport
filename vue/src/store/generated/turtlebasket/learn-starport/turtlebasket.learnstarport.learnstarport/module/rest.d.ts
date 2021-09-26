export interface LearnstarportBchTx {
    creator?: string;
    /** @format uint64 */
    id?: string;
    txid?: string;
    to?: string;
    from?: string;
    amount?: string;
}
export interface LearnstarportBtcTx {
    creator?: string;
    /** @format uint64 */
    id?: string;
    txid?: string;
    to?: string;
    from?: string;
    amount?: string;
}
export interface LearnstarportDogeTx {
    creator?: string;
    /** @format uint64 */
    id?: string;
    txid?: string;
    to?: string;
    from?: string;
    amount?: string;
}
export interface LearnstarportEthTx {
    creator?: string;
    /** @format uint64 */
    id?: string;
    txid?: string;
    to?: string;
    from?: string;
    amount?: string;
}
export interface LearnstarportMsgCreateBchTxResponse {
    /** @format uint64 */
    id?: string;
}
export interface LearnstarportMsgCreateBtcTxResponse {
    /** @format uint64 */
    id?: string;
}
export interface LearnstarportMsgCreateDogeTxResponse {
    /** @format uint64 */
    id?: string;
}
export interface LearnstarportMsgCreateEthTxResponse {
    /** @format uint64 */
    id?: string;
}
export interface LearnstarportMsgCreateXmrTxResponse {
    /** @format uint64 */
    id?: string;
}
export declare type LearnstarportMsgDeleteBchTxResponse = object;
export declare type LearnstarportMsgDeleteBtcTxResponse = object;
export declare type LearnstarportMsgDeleteDogeTxResponse = object;
export declare type LearnstarportMsgDeleteEthTxResponse = object;
export declare type LearnstarportMsgDeleteXmrTxResponse = object;
export declare type LearnstarportMsgUpdateBchTxResponse = object;
export declare type LearnstarportMsgUpdateBtcTxResponse = object;
export declare type LearnstarportMsgUpdateDogeTxResponse = object;
export declare type LearnstarportMsgUpdateEthTxResponse = object;
export declare type LearnstarportMsgUpdateXmrTxResponse = object;
export interface LearnstarportQueryAllBchTxResponse {
    BchTx?: LearnstarportBchTx[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface LearnstarportQueryAllBtcTxResponse {
    BtcTx?: LearnstarportBtcTx[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface LearnstarportQueryAllDogeTxResponse {
    DogeTx?: LearnstarportDogeTx[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface LearnstarportQueryAllEthTxResponse {
    EthTx?: LearnstarportEthTx[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface LearnstarportQueryAllXmrTxResponse {
    XmrTx?: LearnstarportXmrTx[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface LearnstarportQueryGetBchTxResponse {
    BchTx?: LearnstarportBchTx;
}
export interface LearnstarportQueryGetBtcTxResponse {
    BtcTx?: LearnstarportBtcTx;
}
export interface LearnstarportQueryGetDogeTxResponse {
    DogeTx?: LearnstarportDogeTx;
}
export interface LearnstarportQueryGetEthTxResponse {
    EthTx?: LearnstarportEthTx;
}
export interface LearnstarportQueryGetXmrTxResponse {
    XmrTx?: LearnstarportXmrTx;
}
export interface LearnstarportXmrTx {
    creator?: string;
    /** @format uint64 */
    id?: string;
    txid?: string;
    to?: string;
    from?: string;
    amount?: string;
}
export interface ProtobufAny {
    "@type"?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title learnstarport/bch_tx.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryBchTxAll
     * @summary Queries a list of bchTx items.
     * @request GET:/turtlebasket/learnstarport/learnstarport/bchTx
     */
    queryBchTxAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<LearnstarportQueryAllBchTxResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryBchTx
     * @summary Queries a bchTx by id.
     * @request GET:/turtlebasket/learnstarport/learnstarport/bchTx/{id}
     */
    queryBchTx: (id: string, params?: RequestParams) => Promise<HttpResponse<LearnstarportQueryGetBchTxResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryBtcTxAll
     * @summary Queries a list of btcTx items.
     * @request GET:/turtlebasket/learnstarport/learnstarport/btcTx
     */
    queryBtcTxAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<LearnstarportQueryAllBtcTxResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryBtcTx
     * @summary Queries a btcTx by id.
     * @request GET:/turtlebasket/learnstarport/learnstarport/btcTx/{id}
     */
    queryBtcTx: (id: string, params?: RequestParams) => Promise<HttpResponse<LearnstarportQueryGetBtcTxResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryDogeTxAll
     * @summary Queries a list of dogeTx items.
     * @request GET:/turtlebasket/learnstarport/learnstarport/dogeTx
     */
    queryDogeTxAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<LearnstarportQueryAllDogeTxResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryDogeTx
     * @summary Queries a dogeTx by id.
     * @request GET:/turtlebasket/learnstarport/learnstarport/dogeTx/{id}
     */
    queryDogeTx: (id: string, params?: RequestParams) => Promise<HttpResponse<LearnstarportQueryGetDogeTxResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryEthTxAll
     * @summary Queries a list of ethTx items.
     * @request GET:/turtlebasket/learnstarport/learnstarport/ethTx
     */
    queryEthTxAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<LearnstarportQueryAllEthTxResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryEthTx
     * @summary Queries a ethTx by id.
     * @request GET:/turtlebasket/learnstarport/learnstarport/ethTx/{id}
     */
    queryEthTx: (id: string, params?: RequestParams) => Promise<HttpResponse<LearnstarportQueryGetEthTxResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryXmrTxAll
     * @summary Queries a list of xmrTx items.
     * @request GET:/turtlebasket/learnstarport/learnstarport/xmrTx
     */
    queryXmrTxAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<LearnstarportQueryAllXmrTxResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryXmrTx
     * @summary Queries a xmrTx by id.
     * @request GET:/turtlebasket/learnstarport/learnstarport/xmrTx/{id}
     */
    queryXmrTx: (id: string, params?: RequestParams) => Promise<HttpResponse<LearnstarportQueryGetXmrTxResponse, RpcStatus>>;
}
export {};
