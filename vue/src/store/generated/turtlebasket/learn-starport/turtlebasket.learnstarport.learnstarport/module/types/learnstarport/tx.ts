/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'turtlebasket.learnstarport.learnstarport'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateBchTx {
  creator: string
  txid: string
  to: string
  from: string
  amount: string
}

export interface MsgCreateBchTxResponse {
  id: number
}

export interface MsgUpdateBchTx {
  creator: string
  id: number
  txid: string
  to: string
  from: string
  amount: string
}

export interface MsgUpdateBchTxResponse {}

export interface MsgDeleteBchTx {
  creator: string
  id: number
}

export interface MsgDeleteBchTxResponse {}

export interface MsgCreateXmrTx {
  creator: string
  txid: string
  to: string
  from: string
  amount: string
}

export interface MsgCreateXmrTxResponse {
  id: number
}

export interface MsgUpdateXmrTx {
  creator: string
  id: number
  txid: string
  to: string
  from: string
  amount: string
}

export interface MsgUpdateXmrTxResponse {}

export interface MsgDeleteXmrTx {
  creator: string
  id: number
}

export interface MsgDeleteXmrTxResponse {}

export interface MsgCreateDogeTx {
  creator: string
  txid: string
  to: string
  from: string
  amount: string
}

export interface MsgCreateDogeTxResponse {
  id: number
}

export interface MsgUpdateDogeTx {
  creator: string
  id: number
  txid: string
  to: string
  from: string
  amount: string
}

export interface MsgUpdateDogeTxResponse {}

export interface MsgDeleteDogeTx {
  creator: string
  id: number
}

export interface MsgDeleteDogeTxResponse {}

export interface MsgCreateEthTx {
  creator: string
  txid: string
  to: string
  from: string
  amount: string
}

export interface MsgCreateEthTxResponse {
  id: number
}

export interface MsgUpdateEthTx {
  creator: string
  id: number
  txid: string
  to: string
  from: string
  amount: string
}

export interface MsgUpdateEthTxResponse {}

export interface MsgDeleteEthTx {
  creator: string
  id: number
}

export interface MsgDeleteEthTxResponse {}

export interface MsgCreateBtcTx {
  creator: string
  txid: string
  to: string
  from: string
  amount: string
}

export interface MsgCreateBtcTxResponse {
  id: number
}

export interface MsgUpdateBtcTx {
  creator: string
  id: number
  txid: string
  to: string
  from: string
  amount: string
}

export interface MsgUpdateBtcTxResponse {}

export interface MsgDeleteBtcTx {
  creator: string
  id: number
}

export interface MsgDeleteBtcTxResponse {}

const baseMsgCreateBchTx: object = { creator: '', txid: '', to: '', from: '', amount: '' }

export const MsgCreateBchTx = {
  encode(message: MsgCreateBchTx, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.txid !== '') {
      writer.uint32(18).string(message.txid)
    }
    if (message.to !== '') {
      writer.uint32(26).string(message.to)
    }
    if (message.from !== '') {
      writer.uint32(34).string(message.from)
    }
    if (message.amount !== '') {
      writer.uint32(42).string(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBchTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateBchTx } as MsgCreateBchTx
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.txid = reader.string()
          break
        case 3:
          message.to = reader.string()
          break
        case 4:
          message.from = reader.string()
          break
        case 5:
          message.amount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateBchTx {
    const message = { ...baseMsgCreateBchTx } as MsgCreateBchTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = String(object.txid)
    } else {
      message.txid = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to)
    } else {
      message.to = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from)
    } else {
      message.from = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    return message
  },

  toJSON(message: MsgCreateBchTx): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.txid !== undefined && (obj.txid = message.txid)
    message.to !== undefined && (obj.to = message.to)
    message.from !== undefined && (obj.from = message.from)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateBchTx>): MsgCreateBchTx {
    const message = { ...baseMsgCreateBchTx } as MsgCreateBchTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = object.txid
    } else {
      message.txid = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to
    } else {
      message.to = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from
    } else {
      message.from = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    return message
  }
}

const baseMsgCreateBchTxResponse: object = { id: 0 }

export const MsgCreateBchTxResponse = {
  encode(message: MsgCreateBchTxResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBchTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateBchTxResponse } as MsgCreateBchTxResponse
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

  fromJSON(object: any): MsgCreateBchTxResponse {
    const message = { ...baseMsgCreateBchTxResponse } as MsgCreateBchTxResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateBchTxResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateBchTxResponse>): MsgCreateBchTxResponse {
    const message = { ...baseMsgCreateBchTxResponse } as MsgCreateBchTxResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateBchTx: object = { creator: '', id: 0, txid: '', to: '', from: '', amount: '' }

export const MsgUpdateBchTx = {
  encode(message: MsgUpdateBchTx, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.txid !== '') {
      writer.uint32(26).string(message.txid)
    }
    if (message.to !== '') {
      writer.uint32(34).string(message.to)
    }
    if (message.from !== '') {
      writer.uint32(42).string(message.from)
    }
    if (message.amount !== '') {
      writer.uint32(50).string(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBchTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateBchTx } as MsgUpdateBchTx
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.txid = reader.string()
          break
        case 4:
          message.to = reader.string()
          break
        case 5:
          message.from = reader.string()
          break
        case 6:
          message.amount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateBchTx {
    const message = { ...baseMsgUpdateBchTx } as MsgUpdateBchTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = String(object.txid)
    } else {
      message.txid = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to)
    } else {
      message.to = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from)
    } else {
      message.from = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    return message
  },

  toJSON(message: MsgUpdateBchTx): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.txid !== undefined && (obj.txid = message.txid)
    message.to !== undefined && (obj.to = message.to)
    message.from !== undefined && (obj.from = message.from)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateBchTx>): MsgUpdateBchTx {
    const message = { ...baseMsgUpdateBchTx } as MsgUpdateBchTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = object.txid
    } else {
      message.txid = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to
    } else {
      message.to = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from
    } else {
      message.from = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    return message
  }
}

const baseMsgUpdateBchTxResponse: object = {}

export const MsgUpdateBchTxResponse = {
  encode(_: MsgUpdateBchTxResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBchTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateBchTxResponse } as MsgUpdateBchTxResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateBchTxResponse {
    const message = { ...baseMsgUpdateBchTxResponse } as MsgUpdateBchTxResponse
    return message
  },

  toJSON(_: MsgUpdateBchTxResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateBchTxResponse>): MsgUpdateBchTxResponse {
    const message = { ...baseMsgUpdateBchTxResponse } as MsgUpdateBchTxResponse
    return message
  }
}

const baseMsgDeleteBchTx: object = { creator: '', id: 0 }

export const MsgDeleteBchTx = {
  encode(message: MsgDeleteBchTx, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBchTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteBchTx } as MsgDeleteBchTx
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteBchTx {
    const message = { ...baseMsgDeleteBchTx } as MsgDeleteBchTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteBchTx): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteBchTx>): MsgDeleteBchTx {
    const message = { ...baseMsgDeleteBchTx } as MsgDeleteBchTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteBchTxResponse: object = {}

export const MsgDeleteBchTxResponse = {
  encode(_: MsgDeleteBchTxResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBchTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteBchTxResponse } as MsgDeleteBchTxResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteBchTxResponse {
    const message = { ...baseMsgDeleteBchTxResponse } as MsgDeleteBchTxResponse
    return message
  },

  toJSON(_: MsgDeleteBchTxResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteBchTxResponse>): MsgDeleteBchTxResponse {
    const message = { ...baseMsgDeleteBchTxResponse } as MsgDeleteBchTxResponse
    return message
  }
}

const baseMsgCreateXmrTx: object = { creator: '', txid: '', to: '', from: '', amount: '' }

export const MsgCreateXmrTx = {
  encode(message: MsgCreateXmrTx, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.txid !== '') {
      writer.uint32(18).string(message.txid)
    }
    if (message.to !== '') {
      writer.uint32(26).string(message.to)
    }
    if (message.from !== '') {
      writer.uint32(34).string(message.from)
    }
    if (message.amount !== '') {
      writer.uint32(42).string(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateXmrTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateXmrTx } as MsgCreateXmrTx
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.txid = reader.string()
          break
        case 3:
          message.to = reader.string()
          break
        case 4:
          message.from = reader.string()
          break
        case 5:
          message.amount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateXmrTx {
    const message = { ...baseMsgCreateXmrTx } as MsgCreateXmrTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = String(object.txid)
    } else {
      message.txid = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to)
    } else {
      message.to = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from)
    } else {
      message.from = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    return message
  },

  toJSON(message: MsgCreateXmrTx): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.txid !== undefined && (obj.txid = message.txid)
    message.to !== undefined && (obj.to = message.to)
    message.from !== undefined && (obj.from = message.from)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateXmrTx>): MsgCreateXmrTx {
    const message = { ...baseMsgCreateXmrTx } as MsgCreateXmrTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = object.txid
    } else {
      message.txid = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to
    } else {
      message.to = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from
    } else {
      message.from = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    return message
  }
}

const baseMsgCreateXmrTxResponse: object = { id: 0 }

export const MsgCreateXmrTxResponse = {
  encode(message: MsgCreateXmrTxResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateXmrTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateXmrTxResponse } as MsgCreateXmrTxResponse
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

  fromJSON(object: any): MsgCreateXmrTxResponse {
    const message = { ...baseMsgCreateXmrTxResponse } as MsgCreateXmrTxResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateXmrTxResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateXmrTxResponse>): MsgCreateXmrTxResponse {
    const message = { ...baseMsgCreateXmrTxResponse } as MsgCreateXmrTxResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateXmrTx: object = { creator: '', id: 0, txid: '', to: '', from: '', amount: '' }

export const MsgUpdateXmrTx = {
  encode(message: MsgUpdateXmrTx, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.txid !== '') {
      writer.uint32(26).string(message.txid)
    }
    if (message.to !== '') {
      writer.uint32(34).string(message.to)
    }
    if (message.from !== '') {
      writer.uint32(42).string(message.from)
    }
    if (message.amount !== '') {
      writer.uint32(50).string(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateXmrTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateXmrTx } as MsgUpdateXmrTx
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.txid = reader.string()
          break
        case 4:
          message.to = reader.string()
          break
        case 5:
          message.from = reader.string()
          break
        case 6:
          message.amount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateXmrTx {
    const message = { ...baseMsgUpdateXmrTx } as MsgUpdateXmrTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = String(object.txid)
    } else {
      message.txid = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to)
    } else {
      message.to = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from)
    } else {
      message.from = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    return message
  },

  toJSON(message: MsgUpdateXmrTx): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.txid !== undefined && (obj.txid = message.txid)
    message.to !== undefined && (obj.to = message.to)
    message.from !== undefined && (obj.from = message.from)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateXmrTx>): MsgUpdateXmrTx {
    const message = { ...baseMsgUpdateXmrTx } as MsgUpdateXmrTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = object.txid
    } else {
      message.txid = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to
    } else {
      message.to = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from
    } else {
      message.from = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    return message
  }
}

const baseMsgUpdateXmrTxResponse: object = {}

export const MsgUpdateXmrTxResponse = {
  encode(_: MsgUpdateXmrTxResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateXmrTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateXmrTxResponse } as MsgUpdateXmrTxResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateXmrTxResponse {
    const message = { ...baseMsgUpdateXmrTxResponse } as MsgUpdateXmrTxResponse
    return message
  },

  toJSON(_: MsgUpdateXmrTxResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateXmrTxResponse>): MsgUpdateXmrTxResponse {
    const message = { ...baseMsgUpdateXmrTxResponse } as MsgUpdateXmrTxResponse
    return message
  }
}

const baseMsgDeleteXmrTx: object = { creator: '', id: 0 }

export const MsgDeleteXmrTx = {
  encode(message: MsgDeleteXmrTx, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteXmrTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteXmrTx } as MsgDeleteXmrTx
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteXmrTx {
    const message = { ...baseMsgDeleteXmrTx } as MsgDeleteXmrTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteXmrTx): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteXmrTx>): MsgDeleteXmrTx {
    const message = { ...baseMsgDeleteXmrTx } as MsgDeleteXmrTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteXmrTxResponse: object = {}

export const MsgDeleteXmrTxResponse = {
  encode(_: MsgDeleteXmrTxResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteXmrTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteXmrTxResponse } as MsgDeleteXmrTxResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteXmrTxResponse {
    const message = { ...baseMsgDeleteXmrTxResponse } as MsgDeleteXmrTxResponse
    return message
  },

  toJSON(_: MsgDeleteXmrTxResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteXmrTxResponse>): MsgDeleteXmrTxResponse {
    const message = { ...baseMsgDeleteXmrTxResponse } as MsgDeleteXmrTxResponse
    return message
  }
}

const baseMsgCreateDogeTx: object = { creator: '', txid: '', to: '', from: '', amount: '' }

export const MsgCreateDogeTx = {
  encode(message: MsgCreateDogeTx, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.txid !== '') {
      writer.uint32(18).string(message.txid)
    }
    if (message.to !== '') {
      writer.uint32(26).string(message.to)
    }
    if (message.from !== '') {
      writer.uint32(34).string(message.from)
    }
    if (message.amount !== '') {
      writer.uint32(42).string(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDogeTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateDogeTx } as MsgCreateDogeTx
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.txid = reader.string()
          break
        case 3:
          message.to = reader.string()
          break
        case 4:
          message.from = reader.string()
          break
        case 5:
          message.amount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateDogeTx {
    const message = { ...baseMsgCreateDogeTx } as MsgCreateDogeTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = String(object.txid)
    } else {
      message.txid = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to)
    } else {
      message.to = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from)
    } else {
      message.from = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    return message
  },

  toJSON(message: MsgCreateDogeTx): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.txid !== undefined && (obj.txid = message.txid)
    message.to !== undefined && (obj.to = message.to)
    message.from !== undefined && (obj.from = message.from)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateDogeTx>): MsgCreateDogeTx {
    const message = { ...baseMsgCreateDogeTx } as MsgCreateDogeTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = object.txid
    } else {
      message.txid = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to
    } else {
      message.to = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from
    } else {
      message.from = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    return message
  }
}

const baseMsgCreateDogeTxResponse: object = { id: 0 }

export const MsgCreateDogeTxResponse = {
  encode(message: MsgCreateDogeTxResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDogeTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateDogeTxResponse } as MsgCreateDogeTxResponse
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

  fromJSON(object: any): MsgCreateDogeTxResponse {
    const message = { ...baseMsgCreateDogeTxResponse } as MsgCreateDogeTxResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateDogeTxResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateDogeTxResponse>): MsgCreateDogeTxResponse {
    const message = { ...baseMsgCreateDogeTxResponse } as MsgCreateDogeTxResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateDogeTx: object = { creator: '', id: 0, txid: '', to: '', from: '', amount: '' }

export const MsgUpdateDogeTx = {
  encode(message: MsgUpdateDogeTx, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.txid !== '') {
      writer.uint32(26).string(message.txid)
    }
    if (message.to !== '') {
      writer.uint32(34).string(message.to)
    }
    if (message.from !== '') {
      writer.uint32(42).string(message.from)
    }
    if (message.amount !== '') {
      writer.uint32(50).string(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDogeTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateDogeTx } as MsgUpdateDogeTx
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.txid = reader.string()
          break
        case 4:
          message.to = reader.string()
          break
        case 5:
          message.from = reader.string()
          break
        case 6:
          message.amount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateDogeTx {
    const message = { ...baseMsgUpdateDogeTx } as MsgUpdateDogeTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = String(object.txid)
    } else {
      message.txid = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to)
    } else {
      message.to = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from)
    } else {
      message.from = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    return message
  },

  toJSON(message: MsgUpdateDogeTx): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.txid !== undefined && (obj.txid = message.txid)
    message.to !== undefined && (obj.to = message.to)
    message.from !== undefined && (obj.from = message.from)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateDogeTx>): MsgUpdateDogeTx {
    const message = { ...baseMsgUpdateDogeTx } as MsgUpdateDogeTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = object.txid
    } else {
      message.txid = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to
    } else {
      message.to = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from
    } else {
      message.from = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    return message
  }
}

const baseMsgUpdateDogeTxResponse: object = {}

export const MsgUpdateDogeTxResponse = {
  encode(_: MsgUpdateDogeTxResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDogeTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateDogeTxResponse } as MsgUpdateDogeTxResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateDogeTxResponse {
    const message = { ...baseMsgUpdateDogeTxResponse } as MsgUpdateDogeTxResponse
    return message
  },

  toJSON(_: MsgUpdateDogeTxResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateDogeTxResponse>): MsgUpdateDogeTxResponse {
    const message = { ...baseMsgUpdateDogeTxResponse } as MsgUpdateDogeTxResponse
    return message
  }
}

const baseMsgDeleteDogeTx: object = { creator: '', id: 0 }

export const MsgDeleteDogeTx = {
  encode(message: MsgDeleteDogeTx, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDogeTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteDogeTx } as MsgDeleteDogeTx
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteDogeTx {
    const message = { ...baseMsgDeleteDogeTx } as MsgDeleteDogeTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteDogeTx): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteDogeTx>): MsgDeleteDogeTx {
    const message = { ...baseMsgDeleteDogeTx } as MsgDeleteDogeTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteDogeTxResponse: object = {}

export const MsgDeleteDogeTxResponse = {
  encode(_: MsgDeleteDogeTxResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDogeTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteDogeTxResponse } as MsgDeleteDogeTxResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteDogeTxResponse {
    const message = { ...baseMsgDeleteDogeTxResponse } as MsgDeleteDogeTxResponse
    return message
  },

  toJSON(_: MsgDeleteDogeTxResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteDogeTxResponse>): MsgDeleteDogeTxResponse {
    const message = { ...baseMsgDeleteDogeTxResponse } as MsgDeleteDogeTxResponse
    return message
  }
}

const baseMsgCreateEthTx: object = { creator: '', txid: '', to: '', from: '', amount: '' }

export const MsgCreateEthTx = {
  encode(message: MsgCreateEthTx, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.txid !== '') {
      writer.uint32(18).string(message.txid)
    }
    if (message.to !== '') {
      writer.uint32(26).string(message.to)
    }
    if (message.from !== '') {
      writer.uint32(34).string(message.from)
    }
    if (message.amount !== '') {
      writer.uint32(42).string(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateEthTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateEthTx } as MsgCreateEthTx
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.txid = reader.string()
          break
        case 3:
          message.to = reader.string()
          break
        case 4:
          message.from = reader.string()
          break
        case 5:
          message.amount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateEthTx {
    const message = { ...baseMsgCreateEthTx } as MsgCreateEthTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = String(object.txid)
    } else {
      message.txid = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to)
    } else {
      message.to = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from)
    } else {
      message.from = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    return message
  },

  toJSON(message: MsgCreateEthTx): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.txid !== undefined && (obj.txid = message.txid)
    message.to !== undefined && (obj.to = message.to)
    message.from !== undefined && (obj.from = message.from)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateEthTx>): MsgCreateEthTx {
    const message = { ...baseMsgCreateEthTx } as MsgCreateEthTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = object.txid
    } else {
      message.txid = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to
    } else {
      message.to = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from
    } else {
      message.from = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    return message
  }
}

const baseMsgCreateEthTxResponse: object = { id: 0 }

export const MsgCreateEthTxResponse = {
  encode(message: MsgCreateEthTxResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateEthTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateEthTxResponse } as MsgCreateEthTxResponse
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

  fromJSON(object: any): MsgCreateEthTxResponse {
    const message = { ...baseMsgCreateEthTxResponse } as MsgCreateEthTxResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateEthTxResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateEthTxResponse>): MsgCreateEthTxResponse {
    const message = { ...baseMsgCreateEthTxResponse } as MsgCreateEthTxResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateEthTx: object = { creator: '', id: 0, txid: '', to: '', from: '', amount: '' }

export const MsgUpdateEthTx = {
  encode(message: MsgUpdateEthTx, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.txid !== '') {
      writer.uint32(26).string(message.txid)
    }
    if (message.to !== '') {
      writer.uint32(34).string(message.to)
    }
    if (message.from !== '') {
      writer.uint32(42).string(message.from)
    }
    if (message.amount !== '') {
      writer.uint32(50).string(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateEthTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateEthTx } as MsgUpdateEthTx
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.txid = reader.string()
          break
        case 4:
          message.to = reader.string()
          break
        case 5:
          message.from = reader.string()
          break
        case 6:
          message.amount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateEthTx {
    const message = { ...baseMsgUpdateEthTx } as MsgUpdateEthTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = String(object.txid)
    } else {
      message.txid = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to)
    } else {
      message.to = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from)
    } else {
      message.from = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    return message
  },

  toJSON(message: MsgUpdateEthTx): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.txid !== undefined && (obj.txid = message.txid)
    message.to !== undefined && (obj.to = message.to)
    message.from !== undefined && (obj.from = message.from)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateEthTx>): MsgUpdateEthTx {
    const message = { ...baseMsgUpdateEthTx } as MsgUpdateEthTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = object.txid
    } else {
      message.txid = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to
    } else {
      message.to = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from
    } else {
      message.from = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    return message
  }
}

const baseMsgUpdateEthTxResponse: object = {}

export const MsgUpdateEthTxResponse = {
  encode(_: MsgUpdateEthTxResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateEthTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateEthTxResponse } as MsgUpdateEthTxResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateEthTxResponse {
    const message = { ...baseMsgUpdateEthTxResponse } as MsgUpdateEthTxResponse
    return message
  },

  toJSON(_: MsgUpdateEthTxResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateEthTxResponse>): MsgUpdateEthTxResponse {
    const message = { ...baseMsgUpdateEthTxResponse } as MsgUpdateEthTxResponse
    return message
  }
}

const baseMsgDeleteEthTx: object = { creator: '', id: 0 }

export const MsgDeleteEthTx = {
  encode(message: MsgDeleteEthTx, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteEthTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteEthTx } as MsgDeleteEthTx
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteEthTx {
    const message = { ...baseMsgDeleteEthTx } as MsgDeleteEthTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteEthTx): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteEthTx>): MsgDeleteEthTx {
    const message = { ...baseMsgDeleteEthTx } as MsgDeleteEthTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteEthTxResponse: object = {}

export const MsgDeleteEthTxResponse = {
  encode(_: MsgDeleteEthTxResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteEthTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteEthTxResponse } as MsgDeleteEthTxResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteEthTxResponse {
    const message = { ...baseMsgDeleteEthTxResponse } as MsgDeleteEthTxResponse
    return message
  },

  toJSON(_: MsgDeleteEthTxResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteEthTxResponse>): MsgDeleteEthTxResponse {
    const message = { ...baseMsgDeleteEthTxResponse } as MsgDeleteEthTxResponse
    return message
  }
}

const baseMsgCreateBtcTx: object = { creator: '', txid: '', to: '', from: '', amount: '' }

export const MsgCreateBtcTx = {
  encode(message: MsgCreateBtcTx, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.txid !== '') {
      writer.uint32(18).string(message.txid)
    }
    if (message.to !== '') {
      writer.uint32(26).string(message.to)
    }
    if (message.from !== '') {
      writer.uint32(34).string(message.from)
    }
    if (message.amount !== '') {
      writer.uint32(42).string(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBtcTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateBtcTx } as MsgCreateBtcTx
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.txid = reader.string()
          break
        case 3:
          message.to = reader.string()
          break
        case 4:
          message.from = reader.string()
          break
        case 5:
          message.amount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateBtcTx {
    const message = { ...baseMsgCreateBtcTx } as MsgCreateBtcTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = String(object.txid)
    } else {
      message.txid = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to)
    } else {
      message.to = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from)
    } else {
      message.from = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    return message
  },

  toJSON(message: MsgCreateBtcTx): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.txid !== undefined && (obj.txid = message.txid)
    message.to !== undefined && (obj.to = message.to)
    message.from !== undefined && (obj.from = message.from)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateBtcTx>): MsgCreateBtcTx {
    const message = { ...baseMsgCreateBtcTx } as MsgCreateBtcTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = object.txid
    } else {
      message.txid = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to
    } else {
      message.to = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from
    } else {
      message.from = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    return message
  }
}

const baseMsgCreateBtcTxResponse: object = { id: 0 }

export const MsgCreateBtcTxResponse = {
  encode(message: MsgCreateBtcTxResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBtcTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateBtcTxResponse } as MsgCreateBtcTxResponse
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

  fromJSON(object: any): MsgCreateBtcTxResponse {
    const message = { ...baseMsgCreateBtcTxResponse } as MsgCreateBtcTxResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateBtcTxResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateBtcTxResponse>): MsgCreateBtcTxResponse {
    const message = { ...baseMsgCreateBtcTxResponse } as MsgCreateBtcTxResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateBtcTx: object = { creator: '', id: 0, txid: '', to: '', from: '', amount: '' }

export const MsgUpdateBtcTx = {
  encode(message: MsgUpdateBtcTx, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.txid !== '') {
      writer.uint32(26).string(message.txid)
    }
    if (message.to !== '') {
      writer.uint32(34).string(message.to)
    }
    if (message.from !== '') {
      writer.uint32(42).string(message.from)
    }
    if (message.amount !== '') {
      writer.uint32(50).string(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBtcTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateBtcTx } as MsgUpdateBtcTx
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.txid = reader.string()
          break
        case 4:
          message.to = reader.string()
          break
        case 5:
          message.from = reader.string()
          break
        case 6:
          message.amount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateBtcTx {
    const message = { ...baseMsgUpdateBtcTx } as MsgUpdateBtcTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = String(object.txid)
    } else {
      message.txid = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to)
    } else {
      message.to = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from)
    } else {
      message.from = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    return message
  },

  toJSON(message: MsgUpdateBtcTx): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.txid !== undefined && (obj.txid = message.txid)
    message.to !== undefined && (obj.to = message.to)
    message.from !== undefined && (obj.from = message.from)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateBtcTx>): MsgUpdateBtcTx {
    const message = { ...baseMsgUpdateBtcTx } as MsgUpdateBtcTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = object.txid
    } else {
      message.txid = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to
    } else {
      message.to = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from
    } else {
      message.from = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    return message
  }
}

const baseMsgUpdateBtcTxResponse: object = {}

export const MsgUpdateBtcTxResponse = {
  encode(_: MsgUpdateBtcTxResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBtcTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateBtcTxResponse } as MsgUpdateBtcTxResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateBtcTxResponse {
    const message = { ...baseMsgUpdateBtcTxResponse } as MsgUpdateBtcTxResponse
    return message
  },

  toJSON(_: MsgUpdateBtcTxResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateBtcTxResponse>): MsgUpdateBtcTxResponse {
    const message = { ...baseMsgUpdateBtcTxResponse } as MsgUpdateBtcTxResponse
    return message
  }
}

const baseMsgDeleteBtcTx: object = { creator: '', id: 0 }

export const MsgDeleteBtcTx = {
  encode(message: MsgDeleteBtcTx, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBtcTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteBtcTx } as MsgDeleteBtcTx
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteBtcTx {
    const message = { ...baseMsgDeleteBtcTx } as MsgDeleteBtcTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteBtcTx): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteBtcTx>): MsgDeleteBtcTx {
    const message = { ...baseMsgDeleteBtcTx } as MsgDeleteBtcTx
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteBtcTxResponse: object = {}

export const MsgDeleteBtcTxResponse = {
  encode(_: MsgDeleteBtcTxResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBtcTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteBtcTxResponse } as MsgDeleteBtcTxResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteBtcTxResponse {
    const message = { ...baseMsgDeleteBtcTxResponse } as MsgDeleteBtcTxResponse
    return message
  },

  toJSON(_: MsgDeleteBtcTxResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteBtcTxResponse>): MsgDeleteBtcTxResponse {
    const message = { ...baseMsgDeleteBtcTxResponse } as MsgDeleteBtcTxResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateBchTx(request: MsgCreateBchTx): Promise<MsgCreateBchTxResponse>
  UpdateBchTx(request: MsgUpdateBchTx): Promise<MsgUpdateBchTxResponse>
  DeleteBchTx(request: MsgDeleteBchTx): Promise<MsgDeleteBchTxResponse>
  CreateXmrTx(request: MsgCreateXmrTx): Promise<MsgCreateXmrTxResponse>
  UpdateXmrTx(request: MsgUpdateXmrTx): Promise<MsgUpdateXmrTxResponse>
  DeleteXmrTx(request: MsgDeleteXmrTx): Promise<MsgDeleteXmrTxResponse>
  CreateDogeTx(request: MsgCreateDogeTx): Promise<MsgCreateDogeTxResponse>
  UpdateDogeTx(request: MsgUpdateDogeTx): Promise<MsgUpdateDogeTxResponse>
  DeleteDogeTx(request: MsgDeleteDogeTx): Promise<MsgDeleteDogeTxResponse>
  CreateEthTx(request: MsgCreateEthTx): Promise<MsgCreateEthTxResponse>
  UpdateEthTx(request: MsgUpdateEthTx): Promise<MsgUpdateEthTxResponse>
  DeleteEthTx(request: MsgDeleteEthTx): Promise<MsgDeleteEthTxResponse>
  CreateBtcTx(request: MsgCreateBtcTx): Promise<MsgCreateBtcTxResponse>
  UpdateBtcTx(request: MsgUpdateBtcTx): Promise<MsgUpdateBtcTxResponse>
  DeleteBtcTx(request: MsgDeleteBtcTx): Promise<MsgDeleteBtcTxResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateBchTx(request: MsgCreateBchTx): Promise<MsgCreateBchTxResponse> {
    const data = MsgCreateBchTx.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Msg', 'CreateBchTx', data)
    return promise.then((data) => MsgCreateBchTxResponse.decode(new Reader(data)))
  }

  UpdateBchTx(request: MsgUpdateBchTx): Promise<MsgUpdateBchTxResponse> {
    const data = MsgUpdateBchTx.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Msg', 'UpdateBchTx', data)
    return promise.then((data) => MsgUpdateBchTxResponse.decode(new Reader(data)))
  }

  DeleteBchTx(request: MsgDeleteBchTx): Promise<MsgDeleteBchTxResponse> {
    const data = MsgDeleteBchTx.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Msg', 'DeleteBchTx', data)
    return promise.then((data) => MsgDeleteBchTxResponse.decode(new Reader(data)))
  }

  CreateXmrTx(request: MsgCreateXmrTx): Promise<MsgCreateXmrTxResponse> {
    const data = MsgCreateXmrTx.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Msg', 'CreateXmrTx', data)
    return promise.then((data) => MsgCreateXmrTxResponse.decode(new Reader(data)))
  }

  UpdateXmrTx(request: MsgUpdateXmrTx): Promise<MsgUpdateXmrTxResponse> {
    const data = MsgUpdateXmrTx.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Msg', 'UpdateXmrTx', data)
    return promise.then((data) => MsgUpdateXmrTxResponse.decode(new Reader(data)))
  }

  DeleteXmrTx(request: MsgDeleteXmrTx): Promise<MsgDeleteXmrTxResponse> {
    const data = MsgDeleteXmrTx.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Msg', 'DeleteXmrTx', data)
    return promise.then((data) => MsgDeleteXmrTxResponse.decode(new Reader(data)))
  }

  CreateDogeTx(request: MsgCreateDogeTx): Promise<MsgCreateDogeTxResponse> {
    const data = MsgCreateDogeTx.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Msg', 'CreateDogeTx', data)
    return promise.then((data) => MsgCreateDogeTxResponse.decode(new Reader(data)))
  }

  UpdateDogeTx(request: MsgUpdateDogeTx): Promise<MsgUpdateDogeTxResponse> {
    const data = MsgUpdateDogeTx.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Msg', 'UpdateDogeTx', data)
    return promise.then((data) => MsgUpdateDogeTxResponse.decode(new Reader(data)))
  }

  DeleteDogeTx(request: MsgDeleteDogeTx): Promise<MsgDeleteDogeTxResponse> {
    const data = MsgDeleteDogeTx.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Msg', 'DeleteDogeTx', data)
    return promise.then((data) => MsgDeleteDogeTxResponse.decode(new Reader(data)))
  }

  CreateEthTx(request: MsgCreateEthTx): Promise<MsgCreateEthTxResponse> {
    const data = MsgCreateEthTx.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Msg', 'CreateEthTx', data)
    return promise.then((data) => MsgCreateEthTxResponse.decode(new Reader(data)))
  }

  UpdateEthTx(request: MsgUpdateEthTx): Promise<MsgUpdateEthTxResponse> {
    const data = MsgUpdateEthTx.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Msg', 'UpdateEthTx', data)
    return promise.then((data) => MsgUpdateEthTxResponse.decode(new Reader(data)))
  }

  DeleteEthTx(request: MsgDeleteEthTx): Promise<MsgDeleteEthTxResponse> {
    const data = MsgDeleteEthTx.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Msg', 'DeleteEthTx', data)
    return promise.then((data) => MsgDeleteEthTxResponse.decode(new Reader(data)))
  }

  CreateBtcTx(request: MsgCreateBtcTx): Promise<MsgCreateBtcTxResponse> {
    const data = MsgCreateBtcTx.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Msg', 'CreateBtcTx', data)
    return promise.then((data) => MsgCreateBtcTxResponse.decode(new Reader(data)))
  }

  UpdateBtcTx(request: MsgUpdateBtcTx): Promise<MsgUpdateBtcTxResponse> {
    const data = MsgUpdateBtcTx.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Msg', 'UpdateBtcTx', data)
    return promise.then((data) => MsgUpdateBtcTxResponse.decode(new Reader(data)))
  }

  DeleteBtcTx(request: MsgDeleteBtcTx): Promise<MsgDeleteBtcTxResponse> {
    const data = MsgDeleteBtcTx.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Msg', 'DeleteBtcTx', data)
    return promise.then((data) => MsgDeleteBtcTxResponse.decode(new Reader(data)))
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
