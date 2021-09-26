/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { BchTx } from '../learnstarport/bch_tx';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { XmrTx } from '../learnstarport/xmr_tx';
import { DogeTx } from '../learnstarport/doge_tx';
import { EthTx } from '../learnstarport/eth_tx';
import { BtcTx } from '../learnstarport/btc_tx';
export const protobufPackage = 'turtlebasket.learnstarport.learnstarport';
const baseQueryGetBchTxRequest = { id: 0 };
export const QueryGetBchTxRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBchTxRequest };
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
        const message = { ...baseQueryGetBchTxRequest };
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
        const message = { ...baseQueryGetBchTxRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetBchTxResponse = {};
export const QueryGetBchTxResponse = {
    encode(message, writer = Writer.create()) {
        if (message.BchTx !== undefined) {
            BchTx.encode(message.BchTx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBchTxResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.BchTx = BchTx.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetBchTxResponse };
        if (object.BchTx !== undefined && object.BchTx !== null) {
            message.BchTx = BchTx.fromJSON(object.BchTx);
        }
        else {
            message.BchTx = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.BchTx !== undefined && (obj.BchTx = message.BchTx ? BchTx.toJSON(message.BchTx) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBchTxResponse };
        if (object.BchTx !== undefined && object.BchTx !== null) {
            message.BchTx = BchTx.fromPartial(object.BchTx);
        }
        else {
            message.BchTx = undefined;
        }
        return message;
    }
};
const baseQueryAllBchTxRequest = {};
export const QueryAllBchTxRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBchTxRequest };
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
        const message = { ...baseQueryAllBchTxRequest };
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
        const message = { ...baseQueryAllBchTxRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllBchTxResponse = {};
export const QueryAllBchTxResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.BchTx) {
            BchTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBchTxResponse };
        message.BchTx = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.BchTx.push(BchTx.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryAllBchTxResponse };
        message.BchTx = [];
        if (object.BchTx !== undefined && object.BchTx !== null) {
            for (const e of object.BchTx) {
                message.BchTx.push(BchTx.fromJSON(e));
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
        if (message.BchTx) {
            obj.BchTx = message.BchTx.map((e) => (e ? BchTx.toJSON(e) : undefined));
        }
        else {
            obj.BchTx = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBchTxResponse };
        message.BchTx = [];
        if (object.BchTx !== undefined && object.BchTx !== null) {
            for (const e of object.BchTx) {
                message.BchTx.push(BchTx.fromPartial(e));
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
const baseQueryGetXmrTxRequest = { id: 0 };
export const QueryGetXmrTxRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetXmrTxRequest };
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
        const message = { ...baseQueryGetXmrTxRequest };
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
        const message = { ...baseQueryGetXmrTxRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetXmrTxResponse = {};
export const QueryGetXmrTxResponse = {
    encode(message, writer = Writer.create()) {
        if (message.XmrTx !== undefined) {
            XmrTx.encode(message.XmrTx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetXmrTxResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.XmrTx = XmrTx.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetXmrTxResponse };
        if (object.XmrTx !== undefined && object.XmrTx !== null) {
            message.XmrTx = XmrTx.fromJSON(object.XmrTx);
        }
        else {
            message.XmrTx = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.XmrTx !== undefined && (obj.XmrTx = message.XmrTx ? XmrTx.toJSON(message.XmrTx) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetXmrTxResponse };
        if (object.XmrTx !== undefined && object.XmrTx !== null) {
            message.XmrTx = XmrTx.fromPartial(object.XmrTx);
        }
        else {
            message.XmrTx = undefined;
        }
        return message;
    }
};
const baseQueryAllXmrTxRequest = {};
export const QueryAllXmrTxRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllXmrTxRequest };
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
        const message = { ...baseQueryAllXmrTxRequest };
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
        const message = { ...baseQueryAllXmrTxRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllXmrTxResponse = {};
export const QueryAllXmrTxResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.XmrTx) {
            XmrTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllXmrTxResponse };
        message.XmrTx = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.XmrTx.push(XmrTx.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryAllXmrTxResponse };
        message.XmrTx = [];
        if (object.XmrTx !== undefined && object.XmrTx !== null) {
            for (const e of object.XmrTx) {
                message.XmrTx.push(XmrTx.fromJSON(e));
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
        if (message.XmrTx) {
            obj.XmrTx = message.XmrTx.map((e) => (e ? XmrTx.toJSON(e) : undefined));
        }
        else {
            obj.XmrTx = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllXmrTxResponse };
        message.XmrTx = [];
        if (object.XmrTx !== undefined && object.XmrTx !== null) {
            for (const e of object.XmrTx) {
                message.XmrTx.push(XmrTx.fromPartial(e));
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
const baseQueryGetDogeTxRequest = { id: 0 };
export const QueryGetDogeTxRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetDogeTxRequest };
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
        const message = { ...baseQueryGetDogeTxRequest };
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
        const message = { ...baseQueryGetDogeTxRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetDogeTxResponse = {};
export const QueryGetDogeTxResponse = {
    encode(message, writer = Writer.create()) {
        if (message.DogeTx !== undefined) {
            DogeTx.encode(message.DogeTx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetDogeTxResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.DogeTx = DogeTx.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetDogeTxResponse };
        if (object.DogeTx !== undefined && object.DogeTx !== null) {
            message.DogeTx = DogeTx.fromJSON(object.DogeTx);
        }
        else {
            message.DogeTx = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.DogeTx !== undefined && (obj.DogeTx = message.DogeTx ? DogeTx.toJSON(message.DogeTx) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetDogeTxResponse };
        if (object.DogeTx !== undefined && object.DogeTx !== null) {
            message.DogeTx = DogeTx.fromPartial(object.DogeTx);
        }
        else {
            message.DogeTx = undefined;
        }
        return message;
    }
};
const baseQueryAllDogeTxRequest = {};
export const QueryAllDogeTxRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllDogeTxRequest };
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
        const message = { ...baseQueryAllDogeTxRequest };
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
        const message = { ...baseQueryAllDogeTxRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllDogeTxResponse = {};
export const QueryAllDogeTxResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.DogeTx) {
            DogeTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllDogeTxResponse };
        message.DogeTx = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.DogeTx.push(DogeTx.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryAllDogeTxResponse };
        message.DogeTx = [];
        if (object.DogeTx !== undefined && object.DogeTx !== null) {
            for (const e of object.DogeTx) {
                message.DogeTx.push(DogeTx.fromJSON(e));
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
        if (message.DogeTx) {
            obj.DogeTx = message.DogeTx.map((e) => (e ? DogeTx.toJSON(e) : undefined));
        }
        else {
            obj.DogeTx = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllDogeTxResponse };
        message.DogeTx = [];
        if (object.DogeTx !== undefined && object.DogeTx !== null) {
            for (const e of object.DogeTx) {
                message.DogeTx.push(DogeTx.fromPartial(e));
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
const baseQueryGetEthTxRequest = { id: 0 };
export const QueryGetEthTxRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetEthTxRequest };
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
        const message = { ...baseQueryGetEthTxRequest };
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
        const message = { ...baseQueryGetEthTxRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetEthTxResponse = {};
export const QueryGetEthTxResponse = {
    encode(message, writer = Writer.create()) {
        if (message.EthTx !== undefined) {
            EthTx.encode(message.EthTx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetEthTxResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.EthTx = EthTx.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetEthTxResponse };
        if (object.EthTx !== undefined && object.EthTx !== null) {
            message.EthTx = EthTx.fromJSON(object.EthTx);
        }
        else {
            message.EthTx = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.EthTx !== undefined && (obj.EthTx = message.EthTx ? EthTx.toJSON(message.EthTx) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetEthTxResponse };
        if (object.EthTx !== undefined && object.EthTx !== null) {
            message.EthTx = EthTx.fromPartial(object.EthTx);
        }
        else {
            message.EthTx = undefined;
        }
        return message;
    }
};
const baseQueryAllEthTxRequest = {};
export const QueryAllEthTxRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllEthTxRequest };
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
        const message = { ...baseQueryAllEthTxRequest };
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
        const message = { ...baseQueryAllEthTxRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllEthTxResponse = {};
export const QueryAllEthTxResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.EthTx) {
            EthTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllEthTxResponse };
        message.EthTx = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.EthTx.push(EthTx.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryAllEthTxResponse };
        message.EthTx = [];
        if (object.EthTx !== undefined && object.EthTx !== null) {
            for (const e of object.EthTx) {
                message.EthTx.push(EthTx.fromJSON(e));
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
        if (message.EthTx) {
            obj.EthTx = message.EthTx.map((e) => (e ? EthTx.toJSON(e) : undefined));
        }
        else {
            obj.EthTx = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllEthTxResponse };
        message.EthTx = [];
        if (object.EthTx !== undefined && object.EthTx !== null) {
            for (const e of object.EthTx) {
                message.EthTx.push(EthTx.fromPartial(e));
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
const baseQueryGetBtcTxRequest = { id: 0 };
export const QueryGetBtcTxRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBtcTxRequest };
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
        const message = { ...baseQueryGetBtcTxRequest };
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
        const message = { ...baseQueryGetBtcTxRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetBtcTxResponse = {};
export const QueryGetBtcTxResponse = {
    encode(message, writer = Writer.create()) {
        if (message.BtcTx !== undefined) {
            BtcTx.encode(message.BtcTx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBtcTxResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.BtcTx = BtcTx.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetBtcTxResponse };
        if (object.BtcTx !== undefined && object.BtcTx !== null) {
            message.BtcTx = BtcTx.fromJSON(object.BtcTx);
        }
        else {
            message.BtcTx = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.BtcTx !== undefined && (obj.BtcTx = message.BtcTx ? BtcTx.toJSON(message.BtcTx) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBtcTxResponse };
        if (object.BtcTx !== undefined && object.BtcTx !== null) {
            message.BtcTx = BtcTx.fromPartial(object.BtcTx);
        }
        else {
            message.BtcTx = undefined;
        }
        return message;
    }
};
const baseQueryAllBtcTxRequest = {};
export const QueryAllBtcTxRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBtcTxRequest };
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
        const message = { ...baseQueryAllBtcTxRequest };
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
        const message = { ...baseQueryAllBtcTxRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllBtcTxResponse = {};
export const QueryAllBtcTxResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.BtcTx) {
            BtcTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBtcTxResponse };
        message.BtcTx = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.BtcTx.push(BtcTx.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryAllBtcTxResponse };
        message.BtcTx = [];
        if (object.BtcTx !== undefined && object.BtcTx !== null) {
            for (const e of object.BtcTx) {
                message.BtcTx.push(BtcTx.fromJSON(e));
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
        if (message.BtcTx) {
            obj.BtcTx = message.BtcTx.map((e) => (e ? BtcTx.toJSON(e) : undefined));
        }
        else {
            obj.BtcTx = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBtcTxResponse };
        message.BtcTx = [];
        if (object.BtcTx !== undefined && object.BtcTx !== null) {
            for (const e of object.BtcTx) {
                message.BtcTx.push(BtcTx.fromPartial(e));
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
    BchTx(request) {
        const data = QueryGetBchTxRequest.encode(request).finish();
        const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'BchTx', data);
        return promise.then((data) => QueryGetBchTxResponse.decode(new Reader(data)));
    }
    BchTxAll(request) {
        const data = QueryAllBchTxRequest.encode(request).finish();
        const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'BchTxAll', data);
        return promise.then((data) => QueryAllBchTxResponse.decode(new Reader(data)));
    }
    XmrTx(request) {
        const data = QueryGetXmrTxRequest.encode(request).finish();
        const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'XmrTx', data);
        return promise.then((data) => QueryGetXmrTxResponse.decode(new Reader(data)));
    }
    XmrTxAll(request) {
        const data = QueryAllXmrTxRequest.encode(request).finish();
        const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'XmrTxAll', data);
        return promise.then((data) => QueryAllXmrTxResponse.decode(new Reader(data)));
    }
    DogeTx(request) {
        const data = QueryGetDogeTxRequest.encode(request).finish();
        const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'DogeTx', data);
        return promise.then((data) => QueryGetDogeTxResponse.decode(new Reader(data)));
    }
    DogeTxAll(request) {
        const data = QueryAllDogeTxRequest.encode(request).finish();
        const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'DogeTxAll', data);
        return promise.then((data) => QueryAllDogeTxResponse.decode(new Reader(data)));
    }
    EthTx(request) {
        const data = QueryGetEthTxRequest.encode(request).finish();
        const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'EthTx', data);
        return promise.then((data) => QueryGetEthTxResponse.decode(new Reader(data)));
    }
    EthTxAll(request) {
        const data = QueryAllEthTxRequest.encode(request).finish();
        const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'EthTxAll', data);
        return promise.then((data) => QueryAllEthTxResponse.decode(new Reader(data)));
    }
    BtcTx(request) {
        const data = QueryGetBtcTxRequest.encode(request).finish();
        const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'BtcTx', data);
        return promise.then((data) => QueryGetBtcTxResponse.decode(new Reader(data)));
    }
    BtcTxAll(request) {
        const data = QueryAllBtcTxRequest.encode(request).finish();
        const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'BtcTxAll', data);
        return promise.then((data) => QueryAllBtcTxResponse.decode(new Reader(data)));
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
