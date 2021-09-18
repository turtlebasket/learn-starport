/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { ExtTransaction } from '../learnstarport/ext_transaction';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export const protobufPackage = 'turtlebasket.learnstarport.learnstarport';
const baseQueryGetExtTransactionRequest = { id: 0 };
export const QueryGetExtTransactionRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetExtTransactionRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetExtTransactionRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetExtTransactionRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetExtTransactionResponse = {};
export const QueryGetExtTransactionResponse = {
    encode(message, writer = Writer.create()) {
        if (message.ExtTransaction !== undefined) {
            ExtTransaction.encode(message.ExtTransaction, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetExtTransactionResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ExtTransaction = ExtTransaction.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetExtTransactionResponse };
        if (object.ExtTransaction !== undefined && object.ExtTransaction !== null) {
            message.ExtTransaction = ExtTransaction.fromJSON(object.ExtTransaction);
        }
        else {
            message.ExtTransaction = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ExtTransaction !== undefined && (obj.ExtTransaction = message.ExtTransaction ? ExtTransaction.toJSON(message.ExtTransaction) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetExtTransactionResponse };
        if (object.ExtTransaction !== undefined && object.ExtTransaction !== null) {
            message.ExtTransaction = ExtTransaction.fromPartial(object.ExtTransaction);
        }
        else {
            message.ExtTransaction = undefined;
        }
        return message;
    }
};
const baseQueryAllExtTransactionRequest = {};
export const QueryAllExtTransactionRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllExtTransactionRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllExtTransactionRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllExtTransactionRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllExtTransactionResponse = {};
export const QueryAllExtTransactionResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.ExtTransaction) {
            ExtTransaction.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllExtTransactionResponse };
        message.ExtTransaction = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ExtTransaction.push(ExtTransaction.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllExtTransactionResponse };
        message.ExtTransaction = [];
        if (object.ExtTransaction !== undefined && object.ExtTransaction !== null) {
            for (const e of object.ExtTransaction) {
                message.ExtTransaction.push(ExtTransaction.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.ExtTransaction) {
            obj.ExtTransaction = message.ExtTransaction.map((e) => (e ? ExtTransaction.toJSON(e) : undefined));
        }
        else {
            obj.ExtTransaction = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllExtTransactionResponse };
        message.ExtTransaction = [];
        if (object.ExtTransaction !== undefined && object.ExtTransaction !== null) {
            for (const e of object.ExtTransaction) {
                message.ExtTransaction.push(ExtTransaction.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    ExtTransaction(request) {
        const data = QueryGetExtTransactionRequest.encode(request).finish();
        const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'ExtTransaction', data);
        return promise.then((data) => QueryGetExtTransactionResponse.decode(new Reader(data)));
    }
    ExtTransactionAll(request) {
        const data = QueryAllExtTransactionRequest.encode(request).finish();
        const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'ExtTransactionAll', data);
        return promise.then((data) => QueryAllExtTransactionResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
