/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { BchTx } from '../learnstarport/bch_tx'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { XmrTx } from '../learnstarport/xmr_tx'
import { DogeTx } from '../learnstarport/doge_tx'
import { EthTx } from '../learnstarport/eth_tx'
import { BtcTx } from '../learnstarport/btc_tx'

export const protobufPackage = 'turtlebasket.learnstarport.learnstarport'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetBchTxRequest {
  id: number
}

export interface QueryGetBchTxResponse {
  BchTx: BchTx | undefined
}

export interface QueryAllBchTxRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllBchTxResponse {
  BchTx: BchTx[]
  pagination: PageResponse | undefined
}

export interface QueryGetXmrTxRequest {
  id: number
}

export interface QueryGetXmrTxResponse {
  XmrTx: XmrTx | undefined
}

export interface QueryAllXmrTxRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllXmrTxResponse {
  XmrTx: XmrTx[]
  pagination: PageResponse | undefined
}

export interface QueryGetDogeTxRequest {
  id: number
}

export interface QueryGetDogeTxResponse {
  DogeTx: DogeTx | undefined
}

export interface QueryAllDogeTxRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllDogeTxResponse {
  DogeTx: DogeTx[]
  pagination: PageResponse | undefined
}

export interface QueryGetEthTxRequest {
  id: number
}

export interface QueryGetEthTxResponse {
  EthTx: EthTx | undefined
}

export interface QueryAllEthTxRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllEthTxResponse {
  EthTx: EthTx[]
  pagination: PageResponse | undefined
}

export interface QueryGetBtcTxRequest {
  id: number
}

export interface QueryGetBtcTxResponse {
  BtcTx: BtcTx | undefined
}

export interface QueryAllBtcTxRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllBtcTxResponse {
  BtcTx: BtcTx[]
  pagination: PageResponse | undefined
}

const baseQueryGetBchTxRequest: object = { id: 0 }

export const QueryGetBchTxRequest = {
  encode(message: QueryGetBchTxRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBchTxRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetBchTxRequest } as QueryGetBchTxRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetBchTxRequest {
    const message = { ...baseQueryGetBchTxRequest } as QueryGetBchTxRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetBchTxRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetBchTxRequest>): QueryGetBchTxRequest {
    const message = { ...baseQueryGetBchTxRequest } as QueryGetBchTxRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetBchTxResponse: object = {}

export const QueryGetBchTxResponse = {
  encode(message: QueryGetBchTxResponse, writer: Writer = Writer.create()): Writer {
    if (message.BchTx !== undefined) {
      BchTx.encode(message.BchTx, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBchTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetBchTxResponse } as QueryGetBchTxResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.BchTx = BchTx.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetBchTxResponse {
    const message = { ...baseQueryGetBchTxResponse } as QueryGetBchTxResponse
    if (object.BchTx !== undefined && object.BchTx !== null) {
      message.BchTx = BchTx.fromJSON(object.BchTx)
    } else {
      message.BchTx = undefined
    }
    return message
  },

  toJSON(message: QueryGetBchTxResponse): unknown {
    const obj: any = {}
    message.BchTx !== undefined && (obj.BchTx = message.BchTx ? BchTx.toJSON(message.BchTx) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetBchTxResponse>): QueryGetBchTxResponse {
    const message = { ...baseQueryGetBchTxResponse } as QueryGetBchTxResponse
    if (object.BchTx !== undefined && object.BchTx !== null) {
      message.BchTx = BchTx.fromPartial(object.BchTx)
    } else {
      message.BchTx = undefined
    }
    return message
  }
}

const baseQueryAllBchTxRequest: object = {}

export const QueryAllBchTxRequest = {
  encode(message: QueryAllBchTxRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBchTxRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllBchTxRequest } as QueryAllBchTxRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllBchTxRequest {
    const message = { ...baseQueryAllBchTxRequest } as QueryAllBchTxRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllBchTxRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllBchTxRequest>): QueryAllBchTxRequest {
    const message = { ...baseQueryAllBchTxRequest } as QueryAllBchTxRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllBchTxResponse: object = {}

export const QueryAllBchTxResponse = {
  encode(message: QueryAllBchTxResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.BchTx) {
      BchTx.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBchTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllBchTxResponse } as QueryAllBchTxResponse
    message.BchTx = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.BchTx.push(BchTx.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllBchTxResponse {
    const message = { ...baseQueryAllBchTxResponse } as QueryAllBchTxResponse
    message.BchTx = []
    if (object.BchTx !== undefined && object.BchTx !== null) {
      for (const e of object.BchTx) {
        message.BchTx.push(BchTx.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllBchTxResponse): unknown {
    const obj: any = {}
    if (message.BchTx) {
      obj.BchTx = message.BchTx.map((e) => (e ? BchTx.toJSON(e) : undefined))
    } else {
      obj.BchTx = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllBchTxResponse>): QueryAllBchTxResponse {
    const message = { ...baseQueryAllBchTxResponse } as QueryAllBchTxResponse
    message.BchTx = []
    if (object.BchTx !== undefined && object.BchTx !== null) {
      for (const e of object.BchTx) {
        message.BchTx.push(BchTx.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetXmrTxRequest: object = { id: 0 }

export const QueryGetXmrTxRequest = {
  encode(message: QueryGetXmrTxRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetXmrTxRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetXmrTxRequest } as QueryGetXmrTxRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetXmrTxRequest {
    const message = { ...baseQueryGetXmrTxRequest } as QueryGetXmrTxRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetXmrTxRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetXmrTxRequest>): QueryGetXmrTxRequest {
    const message = { ...baseQueryGetXmrTxRequest } as QueryGetXmrTxRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetXmrTxResponse: object = {}

export const QueryGetXmrTxResponse = {
  encode(message: QueryGetXmrTxResponse, writer: Writer = Writer.create()): Writer {
    if (message.XmrTx !== undefined) {
      XmrTx.encode(message.XmrTx, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetXmrTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetXmrTxResponse } as QueryGetXmrTxResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.XmrTx = XmrTx.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetXmrTxResponse {
    const message = { ...baseQueryGetXmrTxResponse } as QueryGetXmrTxResponse
    if (object.XmrTx !== undefined && object.XmrTx !== null) {
      message.XmrTx = XmrTx.fromJSON(object.XmrTx)
    } else {
      message.XmrTx = undefined
    }
    return message
  },

  toJSON(message: QueryGetXmrTxResponse): unknown {
    const obj: any = {}
    message.XmrTx !== undefined && (obj.XmrTx = message.XmrTx ? XmrTx.toJSON(message.XmrTx) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetXmrTxResponse>): QueryGetXmrTxResponse {
    const message = { ...baseQueryGetXmrTxResponse } as QueryGetXmrTxResponse
    if (object.XmrTx !== undefined && object.XmrTx !== null) {
      message.XmrTx = XmrTx.fromPartial(object.XmrTx)
    } else {
      message.XmrTx = undefined
    }
    return message
  }
}

const baseQueryAllXmrTxRequest: object = {}

export const QueryAllXmrTxRequest = {
  encode(message: QueryAllXmrTxRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllXmrTxRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllXmrTxRequest } as QueryAllXmrTxRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllXmrTxRequest {
    const message = { ...baseQueryAllXmrTxRequest } as QueryAllXmrTxRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllXmrTxRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllXmrTxRequest>): QueryAllXmrTxRequest {
    const message = { ...baseQueryAllXmrTxRequest } as QueryAllXmrTxRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllXmrTxResponse: object = {}

export const QueryAllXmrTxResponse = {
  encode(message: QueryAllXmrTxResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.XmrTx) {
      XmrTx.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllXmrTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllXmrTxResponse } as QueryAllXmrTxResponse
    message.XmrTx = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.XmrTx.push(XmrTx.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllXmrTxResponse {
    const message = { ...baseQueryAllXmrTxResponse } as QueryAllXmrTxResponse
    message.XmrTx = []
    if (object.XmrTx !== undefined && object.XmrTx !== null) {
      for (const e of object.XmrTx) {
        message.XmrTx.push(XmrTx.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllXmrTxResponse): unknown {
    const obj: any = {}
    if (message.XmrTx) {
      obj.XmrTx = message.XmrTx.map((e) => (e ? XmrTx.toJSON(e) : undefined))
    } else {
      obj.XmrTx = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllXmrTxResponse>): QueryAllXmrTxResponse {
    const message = { ...baseQueryAllXmrTxResponse } as QueryAllXmrTxResponse
    message.XmrTx = []
    if (object.XmrTx !== undefined && object.XmrTx !== null) {
      for (const e of object.XmrTx) {
        message.XmrTx.push(XmrTx.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetDogeTxRequest: object = { id: 0 }

export const QueryGetDogeTxRequest = {
  encode(message: QueryGetDogeTxRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDogeTxRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetDogeTxRequest } as QueryGetDogeTxRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetDogeTxRequest {
    const message = { ...baseQueryGetDogeTxRequest } as QueryGetDogeTxRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetDogeTxRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetDogeTxRequest>): QueryGetDogeTxRequest {
    const message = { ...baseQueryGetDogeTxRequest } as QueryGetDogeTxRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetDogeTxResponse: object = {}

export const QueryGetDogeTxResponse = {
  encode(message: QueryGetDogeTxResponse, writer: Writer = Writer.create()): Writer {
    if (message.DogeTx !== undefined) {
      DogeTx.encode(message.DogeTx, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDogeTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetDogeTxResponse } as QueryGetDogeTxResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.DogeTx = DogeTx.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetDogeTxResponse {
    const message = { ...baseQueryGetDogeTxResponse } as QueryGetDogeTxResponse
    if (object.DogeTx !== undefined && object.DogeTx !== null) {
      message.DogeTx = DogeTx.fromJSON(object.DogeTx)
    } else {
      message.DogeTx = undefined
    }
    return message
  },

  toJSON(message: QueryGetDogeTxResponse): unknown {
    const obj: any = {}
    message.DogeTx !== undefined && (obj.DogeTx = message.DogeTx ? DogeTx.toJSON(message.DogeTx) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetDogeTxResponse>): QueryGetDogeTxResponse {
    const message = { ...baseQueryGetDogeTxResponse } as QueryGetDogeTxResponse
    if (object.DogeTx !== undefined && object.DogeTx !== null) {
      message.DogeTx = DogeTx.fromPartial(object.DogeTx)
    } else {
      message.DogeTx = undefined
    }
    return message
  }
}

const baseQueryAllDogeTxRequest: object = {}

export const QueryAllDogeTxRequest = {
  encode(message: QueryAllDogeTxRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDogeTxRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllDogeTxRequest } as QueryAllDogeTxRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllDogeTxRequest {
    const message = { ...baseQueryAllDogeTxRequest } as QueryAllDogeTxRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllDogeTxRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllDogeTxRequest>): QueryAllDogeTxRequest {
    const message = { ...baseQueryAllDogeTxRequest } as QueryAllDogeTxRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllDogeTxResponse: object = {}

export const QueryAllDogeTxResponse = {
  encode(message: QueryAllDogeTxResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.DogeTx) {
      DogeTx.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDogeTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllDogeTxResponse } as QueryAllDogeTxResponse
    message.DogeTx = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.DogeTx.push(DogeTx.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllDogeTxResponse {
    const message = { ...baseQueryAllDogeTxResponse } as QueryAllDogeTxResponse
    message.DogeTx = []
    if (object.DogeTx !== undefined && object.DogeTx !== null) {
      for (const e of object.DogeTx) {
        message.DogeTx.push(DogeTx.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllDogeTxResponse): unknown {
    const obj: any = {}
    if (message.DogeTx) {
      obj.DogeTx = message.DogeTx.map((e) => (e ? DogeTx.toJSON(e) : undefined))
    } else {
      obj.DogeTx = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllDogeTxResponse>): QueryAllDogeTxResponse {
    const message = { ...baseQueryAllDogeTxResponse } as QueryAllDogeTxResponse
    message.DogeTx = []
    if (object.DogeTx !== undefined && object.DogeTx !== null) {
      for (const e of object.DogeTx) {
        message.DogeTx.push(DogeTx.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetEthTxRequest: object = { id: 0 }

export const QueryGetEthTxRequest = {
  encode(message: QueryGetEthTxRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetEthTxRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetEthTxRequest } as QueryGetEthTxRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetEthTxRequest {
    const message = { ...baseQueryGetEthTxRequest } as QueryGetEthTxRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetEthTxRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetEthTxRequest>): QueryGetEthTxRequest {
    const message = { ...baseQueryGetEthTxRequest } as QueryGetEthTxRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetEthTxResponse: object = {}

export const QueryGetEthTxResponse = {
  encode(message: QueryGetEthTxResponse, writer: Writer = Writer.create()): Writer {
    if (message.EthTx !== undefined) {
      EthTx.encode(message.EthTx, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetEthTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetEthTxResponse } as QueryGetEthTxResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.EthTx = EthTx.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetEthTxResponse {
    const message = { ...baseQueryGetEthTxResponse } as QueryGetEthTxResponse
    if (object.EthTx !== undefined && object.EthTx !== null) {
      message.EthTx = EthTx.fromJSON(object.EthTx)
    } else {
      message.EthTx = undefined
    }
    return message
  },

  toJSON(message: QueryGetEthTxResponse): unknown {
    const obj: any = {}
    message.EthTx !== undefined && (obj.EthTx = message.EthTx ? EthTx.toJSON(message.EthTx) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetEthTxResponse>): QueryGetEthTxResponse {
    const message = { ...baseQueryGetEthTxResponse } as QueryGetEthTxResponse
    if (object.EthTx !== undefined && object.EthTx !== null) {
      message.EthTx = EthTx.fromPartial(object.EthTx)
    } else {
      message.EthTx = undefined
    }
    return message
  }
}

const baseQueryAllEthTxRequest: object = {}

export const QueryAllEthTxRequest = {
  encode(message: QueryAllEthTxRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllEthTxRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllEthTxRequest } as QueryAllEthTxRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllEthTxRequest {
    const message = { ...baseQueryAllEthTxRequest } as QueryAllEthTxRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllEthTxRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllEthTxRequest>): QueryAllEthTxRequest {
    const message = { ...baseQueryAllEthTxRequest } as QueryAllEthTxRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllEthTxResponse: object = {}

export const QueryAllEthTxResponse = {
  encode(message: QueryAllEthTxResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.EthTx) {
      EthTx.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllEthTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllEthTxResponse } as QueryAllEthTxResponse
    message.EthTx = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.EthTx.push(EthTx.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllEthTxResponse {
    const message = { ...baseQueryAllEthTxResponse } as QueryAllEthTxResponse
    message.EthTx = []
    if (object.EthTx !== undefined && object.EthTx !== null) {
      for (const e of object.EthTx) {
        message.EthTx.push(EthTx.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllEthTxResponse): unknown {
    const obj: any = {}
    if (message.EthTx) {
      obj.EthTx = message.EthTx.map((e) => (e ? EthTx.toJSON(e) : undefined))
    } else {
      obj.EthTx = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllEthTxResponse>): QueryAllEthTxResponse {
    const message = { ...baseQueryAllEthTxResponse } as QueryAllEthTxResponse
    message.EthTx = []
    if (object.EthTx !== undefined && object.EthTx !== null) {
      for (const e of object.EthTx) {
        message.EthTx.push(EthTx.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetBtcTxRequest: object = { id: 0 }

export const QueryGetBtcTxRequest = {
  encode(message: QueryGetBtcTxRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBtcTxRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetBtcTxRequest } as QueryGetBtcTxRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetBtcTxRequest {
    const message = { ...baseQueryGetBtcTxRequest } as QueryGetBtcTxRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetBtcTxRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetBtcTxRequest>): QueryGetBtcTxRequest {
    const message = { ...baseQueryGetBtcTxRequest } as QueryGetBtcTxRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetBtcTxResponse: object = {}

export const QueryGetBtcTxResponse = {
  encode(message: QueryGetBtcTxResponse, writer: Writer = Writer.create()): Writer {
    if (message.BtcTx !== undefined) {
      BtcTx.encode(message.BtcTx, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBtcTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetBtcTxResponse } as QueryGetBtcTxResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.BtcTx = BtcTx.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetBtcTxResponse {
    const message = { ...baseQueryGetBtcTxResponse } as QueryGetBtcTxResponse
    if (object.BtcTx !== undefined && object.BtcTx !== null) {
      message.BtcTx = BtcTx.fromJSON(object.BtcTx)
    } else {
      message.BtcTx = undefined
    }
    return message
  },

  toJSON(message: QueryGetBtcTxResponse): unknown {
    const obj: any = {}
    message.BtcTx !== undefined && (obj.BtcTx = message.BtcTx ? BtcTx.toJSON(message.BtcTx) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetBtcTxResponse>): QueryGetBtcTxResponse {
    const message = { ...baseQueryGetBtcTxResponse } as QueryGetBtcTxResponse
    if (object.BtcTx !== undefined && object.BtcTx !== null) {
      message.BtcTx = BtcTx.fromPartial(object.BtcTx)
    } else {
      message.BtcTx = undefined
    }
    return message
  }
}

const baseQueryAllBtcTxRequest: object = {}

export const QueryAllBtcTxRequest = {
  encode(message: QueryAllBtcTxRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBtcTxRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllBtcTxRequest } as QueryAllBtcTxRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllBtcTxRequest {
    const message = { ...baseQueryAllBtcTxRequest } as QueryAllBtcTxRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllBtcTxRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllBtcTxRequest>): QueryAllBtcTxRequest {
    const message = { ...baseQueryAllBtcTxRequest } as QueryAllBtcTxRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllBtcTxResponse: object = {}

export const QueryAllBtcTxResponse = {
  encode(message: QueryAllBtcTxResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.BtcTx) {
      BtcTx.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBtcTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllBtcTxResponse } as QueryAllBtcTxResponse
    message.BtcTx = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.BtcTx.push(BtcTx.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllBtcTxResponse {
    const message = { ...baseQueryAllBtcTxResponse } as QueryAllBtcTxResponse
    message.BtcTx = []
    if (object.BtcTx !== undefined && object.BtcTx !== null) {
      for (const e of object.BtcTx) {
        message.BtcTx.push(BtcTx.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllBtcTxResponse): unknown {
    const obj: any = {}
    if (message.BtcTx) {
      obj.BtcTx = message.BtcTx.map((e) => (e ? BtcTx.toJSON(e) : undefined))
    } else {
      obj.BtcTx = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllBtcTxResponse>): QueryAllBtcTxResponse {
    const message = { ...baseQueryAllBtcTxResponse } as QueryAllBtcTxResponse
    message.BtcTx = []
    if (object.BtcTx !== undefined && object.BtcTx !== null) {
      for (const e of object.BtcTx) {
        message.BtcTx.push(BtcTx.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a bchTx by id. */
  BchTx(request: QueryGetBchTxRequest): Promise<QueryGetBchTxResponse>
  /** Queries a list of bchTx items. */
  BchTxAll(request: QueryAllBchTxRequest): Promise<QueryAllBchTxResponse>
  /** Queries a xmrTx by id. */
  XmrTx(request: QueryGetXmrTxRequest): Promise<QueryGetXmrTxResponse>
  /** Queries a list of xmrTx items. */
  XmrTxAll(request: QueryAllXmrTxRequest): Promise<QueryAllXmrTxResponse>
  /** Queries a dogeTx by id. */
  DogeTx(request: QueryGetDogeTxRequest): Promise<QueryGetDogeTxResponse>
  /** Queries a list of dogeTx items. */
  DogeTxAll(request: QueryAllDogeTxRequest): Promise<QueryAllDogeTxResponse>
  /** Queries a ethTx by id. */
  EthTx(request: QueryGetEthTxRequest): Promise<QueryGetEthTxResponse>
  /** Queries a list of ethTx items. */
  EthTxAll(request: QueryAllEthTxRequest): Promise<QueryAllEthTxResponse>
  /** Queries a btcTx by id. */
  BtcTx(request: QueryGetBtcTxRequest): Promise<QueryGetBtcTxResponse>
  /** Queries a list of btcTx items. */
  BtcTxAll(request: QueryAllBtcTxRequest): Promise<QueryAllBtcTxResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  BchTx(request: QueryGetBchTxRequest): Promise<QueryGetBchTxResponse> {
    const data = QueryGetBchTxRequest.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'BchTx', data)
    return promise.then((data) => QueryGetBchTxResponse.decode(new Reader(data)))
  }

  BchTxAll(request: QueryAllBchTxRequest): Promise<QueryAllBchTxResponse> {
    const data = QueryAllBchTxRequest.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'BchTxAll', data)
    return promise.then((data) => QueryAllBchTxResponse.decode(new Reader(data)))
  }

  XmrTx(request: QueryGetXmrTxRequest): Promise<QueryGetXmrTxResponse> {
    const data = QueryGetXmrTxRequest.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'XmrTx', data)
    return promise.then((data) => QueryGetXmrTxResponse.decode(new Reader(data)))
  }

  XmrTxAll(request: QueryAllXmrTxRequest): Promise<QueryAllXmrTxResponse> {
    const data = QueryAllXmrTxRequest.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'XmrTxAll', data)
    return promise.then((data) => QueryAllXmrTxResponse.decode(new Reader(data)))
  }

  DogeTx(request: QueryGetDogeTxRequest): Promise<QueryGetDogeTxResponse> {
    const data = QueryGetDogeTxRequest.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'DogeTx', data)
    return promise.then((data) => QueryGetDogeTxResponse.decode(new Reader(data)))
  }

  DogeTxAll(request: QueryAllDogeTxRequest): Promise<QueryAllDogeTxResponse> {
    const data = QueryAllDogeTxRequest.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'DogeTxAll', data)
    return promise.then((data) => QueryAllDogeTxResponse.decode(new Reader(data)))
  }

  EthTx(request: QueryGetEthTxRequest): Promise<QueryGetEthTxResponse> {
    const data = QueryGetEthTxRequest.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'EthTx', data)
    return promise.then((data) => QueryGetEthTxResponse.decode(new Reader(data)))
  }

  EthTxAll(request: QueryAllEthTxRequest): Promise<QueryAllEthTxResponse> {
    const data = QueryAllEthTxRequest.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'EthTxAll', data)
    return promise.then((data) => QueryAllEthTxResponse.decode(new Reader(data)))
  }

  BtcTx(request: QueryGetBtcTxRequest): Promise<QueryGetBtcTxResponse> {
    const data = QueryGetBtcTxRequest.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'BtcTx', data)
    return promise.then((data) => QueryGetBtcTxResponse.decode(new Reader(data)))
  }

  BtcTxAll(request: QueryAllBtcTxRequest): Promise<QueryAllBtcTxResponse> {
    const data = QueryAllBtcTxRequest.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'BtcTxAll', data)
    return promise.then((data) => QueryAllBtcTxResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
