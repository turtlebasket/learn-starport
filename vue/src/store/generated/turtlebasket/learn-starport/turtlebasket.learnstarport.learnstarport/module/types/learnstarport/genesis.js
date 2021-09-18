/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { ExtTransaction } from '../learnstarport/ext_transaction';
export const protobufPackage = 'turtlebasket.learnstarport.learnstarport';
const baseGenesisState = { extTransactionCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.extTransactionList) {
            ExtTransaction.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.extTransactionCount !== 0) {
            writer.uint32(16).uint64(message.extTransactionCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.extTransactionList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extTransactionList.push(ExtTransaction.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.extTransactionCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.extTransactionList = [];
        if (object.extTransactionList !== undefined && object.extTransactionList !== null) {
            for (const e of object.extTransactionList) {
                message.extTransactionList.push(ExtTransaction.fromJSON(e));
            }
        }
        if (object.extTransactionCount !== undefined && object.extTransactionCount !== null) {
            message.extTransactionCount = Number(object.extTransactionCount);
        }
        else {
            message.extTransactionCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.extTransactionList) {
            obj.extTransactionList = message.extTransactionList.map((e) => (e ? ExtTransaction.toJSON(e) : undefined));
        }
        else {
            obj.extTransactionList = [];
        }
        message.extTransactionCount !== undefined && (obj.extTransactionCount = message.extTransactionCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.extTransactionList = [];
        if (object.extTransactionList !== undefined && object.extTransactionList !== null) {
            for (const e of object.extTransactionList) {
                message.extTransactionList.push(ExtTransaction.fromPartial(e));
            }
        }
        if (object.extTransactionCount !== undefined && object.extTransactionCount !== null) {
            message.extTransactionCount = object.extTransactionCount;
        }
        else {
            message.extTransactionCount = 0;
        }
        return message;
    }
};
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
