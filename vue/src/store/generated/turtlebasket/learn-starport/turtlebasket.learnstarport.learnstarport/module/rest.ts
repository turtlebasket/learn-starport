/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

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

export type LearnstarportMsgDeleteBchTxResponse = object;

export type LearnstarportMsgDeleteBtcTxResponse = object;

export type LearnstarportMsgDeleteDogeTxResponse = object;

export type LearnstarportMsgDeleteEthTxResponse = object;

export type LearnstarportMsgDeleteXmrTxResponse = object;

export type LearnstarportMsgUpdateBchTxResponse = object;

export type LearnstarportMsgUpdateBtcTxResponse = object;

export type LearnstarportMsgUpdateDogeTxResponse = object;

export type LearnstarportMsgUpdateEthTxResponse = object;

export type LearnstarportMsgUpdateXmrTxResponse = object;

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

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

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

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title learnstarport/bch_tx.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryBchTxAll
   * @summary Queries a list of bchTx items.
   * @request GET:/turtlebasket/learnstarport/learnstarport/bchTx
   */
  queryBchTxAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<LearnstarportQueryAllBchTxResponse, RpcStatus>({
      path: `/turtlebasket/learnstarport/learnstarport/bchTx`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBchTx
   * @summary Queries a bchTx by id.
   * @request GET:/turtlebasket/learnstarport/learnstarport/bchTx/{id}
   */
  queryBchTx = (id: string, params: RequestParams = {}) =>
    this.request<LearnstarportQueryGetBchTxResponse, RpcStatus>({
      path: `/turtlebasket/learnstarport/learnstarport/bchTx/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBtcTxAll
   * @summary Queries a list of btcTx items.
   * @request GET:/turtlebasket/learnstarport/learnstarport/btcTx
   */
  queryBtcTxAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<LearnstarportQueryAllBtcTxResponse, RpcStatus>({
      path: `/turtlebasket/learnstarport/learnstarport/btcTx`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBtcTx
   * @summary Queries a btcTx by id.
   * @request GET:/turtlebasket/learnstarport/learnstarport/btcTx/{id}
   */
  queryBtcTx = (id: string, params: RequestParams = {}) =>
    this.request<LearnstarportQueryGetBtcTxResponse, RpcStatus>({
      path: `/turtlebasket/learnstarport/learnstarport/btcTx/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDogeTxAll
   * @summary Queries a list of dogeTx items.
   * @request GET:/turtlebasket/learnstarport/learnstarport/dogeTx
   */
  queryDogeTxAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<LearnstarportQueryAllDogeTxResponse, RpcStatus>({
      path: `/turtlebasket/learnstarport/learnstarport/dogeTx`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDogeTx
   * @summary Queries a dogeTx by id.
   * @request GET:/turtlebasket/learnstarport/learnstarport/dogeTx/{id}
   */
  queryDogeTx = (id: string, params: RequestParams = {}) =>
    this.request<LearnstarportQueryGetDogeTxResponse, RpcStatus>({
      path: `/turtlebasket/learnstarport/learnstarport/dogeTx/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryEthTxAll
   * @summary Queries a list of ethTx items.
   * @request GET:/turtlebasket/learnstarport/learnstarport/ethTx
   */
  queryEthTxAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<LearnstarportQueryAllEthTxResponse, RpcStatus>({
      path: `/turtlebasket/learnstarport/learnstarport/ethTx`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryEthTx
   * @summary Queries a ethTx by id.
   * @request GET:/turtlebasket/learnstarport/learnstarport/ethTx/{id}
   */
  queryEthTx = (id: string, params: RequestParams = {}) =>
    this.request<LearnstarportQueryGetEthTxResponse, RpcStatus>({
      path: `/turtlebasket/learnstarport/learnstarport/ethTx/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryXmrTxAll
   * @summary Queries a list of xmrTx items.
   * @request GET:/turtlebasket/learnstarport/learnstarport/xmrTx
   */
  queryXmrTxAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<LearnstarportQueryAllXmrTxResponse, RpcStatus>({
      path: `/turtlebasket/learnstarport/learnstarport/xmrTx`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryXmrTx
   * @summary Queries a xmrTx by id.
   * @request GET:/turtlebasket/learnstarport/learnstarport/xmrTx/{id}
   */
  queryXmrTx = (id: string, params: RequestParams = {}) =>
    this.request<LearnstarportQueryGetXmrTxResponse, RpcStatus>({
      path: `/turtlebasket/learnstarport/learnstarport/xmrTx/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
