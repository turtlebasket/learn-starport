/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { BchTx } from '../learnstarport/bch_tx';
import { XmrTx } from '../learnstarport/xmr_tx';
import { DogeTx } from '../learnstarport/doge_tx';
import { EthTx } from '../learnstarport/eth_tx';
import { BtcTx } from '../learnstarport/btc_tx';
export const protobufPackage = 'turtlebasket.learnstarport.learnstarport';
const baseGenesisState = { bchTxCount: 0, xmrTxCount: 0, dogeTxCount: 0, ethTxCount: 0, btcTxCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.bchTxList) {
            BchTx.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.bchTxCount !== 0) {
            writer.uint32(80).uint64(message.bchTxCount);
        }
        for (const v of message.xmrTxList) {
            XmrTx.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.xmrTxCount !== 0) {
            writer.uint32(64).uint64(message.xmrTxCount);
        }
        for (const v of message.dogeTxList) {
            DogeTx.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.dogeTxCount !== 0) {
            writer.uint32(48).uint64(message.dogeTxCount);
        }
        for (const v of message.ethTxList) {
            EthTx.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.ethTxCount !== 0) {
            writer.uint32(32).uint64(message.ethTxCount);
        }
        for (const v of message.btcTxList) {
            BtcTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.btcTxCount !== 0) {
            writer.uint32(16).uint64(message.btcTxCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.bchTxList = [];
        message.xmrTxList = [];
        message.dogeTxList = [];
        message.ethTxList = [];
        message.btcTxList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 9:
                    message.bchTxList.push(BchTx.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.bchTxCount = longToNumber(reader.uint64());
                    break;
                case 7:
                    message.xmrTxList.push(XmrTx.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.xmrTxCount = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.dogeTxList.push(DogeTx.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.dogeTxCount = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.ethTxList.push(EthTx.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.ethTxCount = longToNumber(reader.uint64());
                    break;
                case 1:
                    message.btcTxList.push(BtcTx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.btcTxCount = longToNumber(reader.uint64());
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
        message.bchTxList = [];
        message.xmrTxList = [];
        message.dogeTxList = [];
        message.ethTxList = [];
        message.btcTxList = [];
        if (object.bchTxList !== undefined && object.bchTxList !== null) {
            for (const e of object.bchTxList) {
                message.bchTxList.push(BchTx.fromJSON(e));
            }
        }
        if (object.bchTxCount !== undefined && object.bchTxCount !== null) {
            message.bchTxCount = Number(object.bchTxCount);
        }
        else {
            message.bchTxCount = 0;
        }
        if (object.xmrTxList !== undefined && object.xmrTxList !== null) {
            for (const e of object.xmrTxList) {
                message.xmrTxList.push(XmrTx.fromJSON(e));
            }
        }
        if (object.xmrTxCount !== undefined && object.xmrTxCount !== null) {
            message.xmrTxCount = Number(object.xmrTxCount);
        }
        else {
            message.xmrTxCount = 0;
        }
        if (object.dogeTxList !== undefined && object.dogeTxList !== null) {
            for (const e of object.dogeTxList) {
                message.dogeTxList.push(DogeTx.fromJSON(e));
            }
        }
        if (object.dogeTxCount !== undefined && object.dogeTxCount !== null) {
            message.dogeTxCount = Number(object.dogeTxCount);
        }
        else {
            message.dogeTxCount = 0;
        }
        if (object.ethTxList !== undefined && object.ethTxList !== null) {
            for (const e of object.ethTxList) {
                message.ethTxList.push(EthTx.fromJSON(e));
            }
        }
        if (object.ethTxCount !== undefined && object.ethTxCount !== null) {
            message.ethTxCount = Number(object.ethTxCount);
        }
        else {
            message.ethTxCount = 0;
        }
        if (object.btcTxList !== undefined && object.btcTxList !== null) {
            for (const e of object.btcTxList) {
                message.btcTxList.push(BtcTx.fromJSON(e));
            }
        }
        if (object.btcTxCount !== undefined && object.btcTxCount !== null) {
            message.btcTxCount = Number(object.btcTxCount);
        }
        else {
            message.btcTxCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.bchTxList) {
            obj.bchTxList = message.bchTxList.map((e) => (e ? BchTx.toJSON(e) : undefined));
        }
        else {
            obj.bchTxList = [];
        }
        message.bchTxCount !== undefined && (obj.bchTxCount = message.bchTxCount);
        if (message.xmrTxList) {
            obj.xmrTxList = message.xmrTxList.map((e) => (e ? XmrTx.toJSON(e) : undefined));
        }
        else {
            obj.xmrTxList = [];
        }
        message.xmrTxCount !== undefined && (obj.xmrTxCount = message.xmrTxCount);
        if (message.dogeTxList) {
            obj.dogeTxList = message.dogeTxList.map((e) => (e ? DogeTx.toJSON(e) : undefined));
        }
        else {
            obj.dogeTxList = [];
        }
        message.dogeTxCount !== undefined && (obj.dogeTxCount = message.dogeTxCount);
        if (message.ethTxList) {
            obj.ethTxList = message.ethTxList.map((e) => (e ? EthTx.toJSON(e) : undefined));
        }
        else {
            obj.ethTxList = [];
        }
        message.ethTxCount !== undefined && (obj.ethTxCount = message.ethTxCount);
        if (message.btcTxList) {
            obj.btcTxList = message.btcTxList.map((e) => (e ? BtcTx.toJSON(e) : undefined));
        }
        else {
            obj.btcTxList = [];
        }
        message.btcTxCount !== undefined && (obj.btcTxCount = message.btcTxCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.bchTxList = [];
        message.xmrTxList = [];
        message.dogeTxList = [];
        message.ethTxList = [];
        message.btcTxList = [];
        if (object.bchTxList !== undefined && object.bchTxList !== null) {
            for (const e of object.bchTxList) {
                message.bchTxList.push(BchTx.fromPartial(e));
            }
        }
        if (object.bchTxCount !== undefined && object.bchTxCount !== null) {
            message.bchTxCount = object.bchTxCount;
        }
        else {
            message.bchTxCount = 0;
        }
        if (object.xmrTxList !== undefined && object.xmrTxList !== null) {
            for (const e of object.xmrTxList) {
                message.xmrTxList.push(XmrTx.fromPartial(e));
            }
        }
        if (object.xmrTxCount !== undefined && object.xmrTxCount !== null) {
            message.xmrTxCount = object.xmrTxCount;
        }
        else {
            message.xmrTxCount = 0;
        }
        if (object.dogeTxList !== undefined && object.dogeTxList !== null) {
            for (const e of object.dogeTxList) {
                message.dogeTxList.push(DogeTx.fromPartial(e));
            }
        }
        if (object.dogeTxCount !== undefined && object.dogeTxCount !== null) {
            message.dogeTxCount = object.dogeTxCount;
        }
        else {
            message.dogeTxCount = 0;
        }
        if (object.ethTxList !== undefined && object.ethTxList !== null) {
            for (const e of object.ethTxList) {
                message.ethTxList.push(EthTx.fromPartial(e));
            }
        }
        if (object.ethTxCount !== undefined && object.ethTxCount !== null) {
            message.ethTxCount = object.ethTxCount;
        }
        else {
            message.ethTxCount = 0;
        }
        if (object.btcTxList !== undefined && object.btcTxList !== null) {
            for (const e of object.btcTxList) {
                message.btcTxList.push(BtcTx.fromPartial(e));
            }
        }
        if (object.btcTxCount !== undefined && object.btcTxCount !== null) {
            message.btcTxCount = object.btcTxCount;
        }
        else {
            message.btcTxCount = 0;
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
