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
export var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType || (ContentType = {}));
export class HttpClient {
    constructor(apiConfig = {}) {
        this.baseUrl = "";
        this.securityData = null;
        this.securityWorker = null;
        this.abortControllers = new Map();
        this.baseApiParams = {
            credentials: "same-origin",
            headers: {},
            redirect: "follow",
            referrerPolicy: "no-referrer",
        };
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.contentFormatters = {
            [ContentType.Json]: (input) => input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
            [ContentType.FormData]: (input) => Object.keys(input || {}).reduce((data, key) => {
                data.append(key, input[key]);
                return data;
            }, new FormData()),
            [ContentType.UrlEncoded]: (input) => this.toQueryString(input),
        };
        this.createAbortSignal = (cancelToken) => {
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
        this.abortRequest = (cancelToken) => {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                abortController.abort();
                this.abortControllers.delete(cancelToken);
            }
        };
        this.request = ({ body, secure, path, type, query, format = "json", baseUrl, cancelToken, ...params }) => {
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
                const r = response;
                r.data = null;
                r.error = null;
                const data = await response[format]()
                    .then((data) => {
                    if (r.ok) {
                        r.data = data;
                    }
                    else {
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
                if (!response.ok)
                    throw data;
                return data;
            });
        };
        Object.assign(this, apiConfig);
    }
    addQueryParam(query, key) {
        const value = query[key];
        return (encodeURIComponent(key) +
            "=" +
            encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`));
    }
    toQueryString(rawQuery) {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
        return keys
            .map((key) => typeof query[key] === "object" && !Array.isArray(query[key])
            ? this.toQueryString(query[key])
            : this.addQueryParam(query, key))
            .join("&");
    }
    addQueryParams(rawQuery) {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }
    mergeRequestParams(params1, params2) {
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
}
/**
 * @title learnstarport/bch_tx.proto
 * @version version not set
 */
export class Api extends HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Query
         * @name QueryBchTxAll
         * @summary Queries a list of bchTx items.
         * @request GET:/turtlebasket/learnstarport/learnstarport/bchTx
         */
        this.queryBchTxAll = (query, params = {}) => this.request({
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
        this.queryBchTx = (id, params = {}) => this.request({
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
        this.queryBtcTxAll = (query, params = {}) => this.request({
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
        this.queryBtcTx = (id, params = {}) => this.request({
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
        this.queryDogeTxAll = (query, params = {}) => this.request({
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
        this.queryDogeTx = (id, params = {}) => this.request({
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
        this.queryEthTxAll = (query, params = {}) => this.request({
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
        this.queryEthTx = (id, params = {}) => this.request({
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
        this.queryXmrTxAll = (query, params = {}) => this.request({
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
        this.queryXmrTx = (id, params = {}) => this.request({
            path: `/turtlebasket/learnstarport/learnstarport/xmrTx/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
    }
}
