/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'turtlebasket.learnstarport.learnstarport'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateExtTransaction {
  creator: string
  chain: string
  to: string
  from: string
  amount: string
  txid: string
}

export interface MsgCreateExtTransactionResponse {
  id: number
}

export interface MsgUpdateExtTransaction {
  creator: string
  id: number
  chain: string
  to: string
  from: string
  amount: string
  txid: string
}

export interface MsgUpdateExtTransactionResponse {}

export interface MsgDeleteExtTransaction {
  creator: string
  id: number
}

export interface MsgDeleteExtTransactionResponse {}

const baseMsgCreateExtTransaction: object = { creator: '', chain: '', to: '', from: '', amount: '', txid: '' }

export const MsgCreateExtTransaction = {
  encode(message: MsgCreateExtTransaction, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.chain !== '') {
      writer.uint32(18).string(message.chain)
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
    if (message.txid !== '') {
      writer.uint32(50).string(message.txid)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateExtTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateExtTransaction } as MsgCreateExtTransaction
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.chain = reader.string()
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
        case 6:
          message.txid = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateExtTransaction {
    const message = { ...baseMsgCreateExtTransaction } as MsgCreateExtTransaction
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = String(object.chain)
    } else {
      message.chain = ''
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
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = String(object.txid)
    } else {
      message.txid = ''
    }
    return message
  },

  toJSON(message: MsgCreateExtTransaction): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.chain !== undefined && (obj.chain = message.chain)
    message.to !== undefined && (obj.to = message.to)
    message.from !== undefined && (obj.from = message.from)
    message.amount !== undefined && (obj.amount = message.amount)
    message.txid !== undefined && (obj.txid = message.txid)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateExtTransaction>): MsgCreateExtTransaction {
    const message = { ...baseMsgCreateExtTransaction } as MsgCreateExtTransaction
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain
    } else {
      message.chain = ''
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
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = object.txid
    } else {
      message.txid = ''
    }
    return message
  }
}

const baseMsgCreateExtTransactionResponse: object = { id: 0 }

export const MsgCreateExtTransactionResponse = {
  encode(message: MsgCreateExtTransactionResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateExtTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateExtTransactionResponse } as MsgCreateExtTransactionResponse
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

  fromJSON(object: any): MsgCreateExtTransactionResponse {
    const message = { ...baseMsgCreateExtTransactionResponse } as MsgCreateExtTransactionResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateExtTransactionResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateExtTransactionResponse>): MsgCreateExtTransactionResponse {
    const message = { ...baseMsgCreateExtTransactionResponse } as MsgCreateExtTransactionResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateExtTransaction: object = { creator: '', id: 0, chain: '', to: '', from: '', amount: '', txid: '' }

export const MsgUpdateExtTransaction = {
  encode(message: MsgUpdateExtTransaction, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.chain !== '') {
      writer.uint32(26).string(message.chain)
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
    if (message.txid !== '') {
      writer.uint32(58).string(message.txid)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateExtTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateExtTransaction } as MsgUpdateExtTransaction
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
          message.chain = reader.string()
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
        case 7:
          message.txid = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateExtTransaction {
    const message = { ...baseMsgUpdateExtTransaction } as MsgUpdateExtTransaction
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
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = String(object.chain)
    } else {
      message.chain = ''
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
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = String(object.txid)
    } else {
      message.txid = ''
    }
    return message
  },

  toJSON(message: MsgUpdateExtTransaction): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.chain !== undefined && (obj.chain = message.chain)
    message.to !== undefined && (obj.to = message.to)
    message.from !== undefined && (obj.from = message.from)
    message.amount !== undefined && (obj.amount = message.amount)
    message.txid !== undefined && (obj.txid = message.txid)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateExtTransaction>): MsgUpdateExtTransaction {
    const message = { ...baseMsgUpdateExtTransaction } as MsgUpdateExtTransaction
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
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain
    } else {
      message.chain = ''
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
    if (object.txid !== undefined && object.txid !== null) {
      message.txid = object.txid
    } else {
      message.txid = ''
    }
    return message
  }
}

const baseMsgUpdateExtTransactionResponse: object = {}

export const MsgUpdateExtTransactionResponse = {
  encode(_: MsgUpdateExtTransactionResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateExtTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateExtTransactionResponse } as MsgUpdateExtTransactionResponse
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

  fromJSON(_: any): MsgUpdateExtTransactionResponse {
    const message = { ...baseMsgUpdateExtTransactionResponse } as MsgUpdateExtTransactionResponse
    return message
  },

  toJSON(_: MsgUpdateExtTransactionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateExtTransactionResponse>): MsgUpdateExtTransactionResponse {
    const message = { ...baseMsgUpdateExtTransactionResponse } as MsgUpdateExtTransactionResponse
    return message
  }
}

const baseMsgDeleteExtTransaction: object = { creator: '', id: 0 }

export const MsgDeleteExtTransaction = {
  encode(message: MsgDeleteExtTransaction, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteExtTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteExtTransaction } as MsgDeleteExtTransaction
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

  fromJSON(object: any): MsgDeleteExtTransaction {
    const message = { ...baseMsgDeleteExtTransaction } as MsgDeleteExtTransaction
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

  toJSON(message: MsgDeleteExtTransaction): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteExtTransaction>): MsgDeleteExtTransaction {
    const message = { ...baseMsgDeleteExtTransaction } as MsgDeleteExtTransaction
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

const baseMsgDeleteExtTransactionResponse: object = {}

export const MsgDeleteExtTransactionResponse = {
  encode(_: MsgDeleteExtTransactionResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteExtTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteExtTransactionResponse } as MsgDeleteExtTransactionResponse
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

  fromJSON(_: any): MsgDeleteExtTransactionResponse {
    const message = { ...baseMsgDeleteExtTransactionResponse } as MsgDeleteExtTransactionResponse
    return message
  },

  toJSON(_: MsgDeleteExtTransactionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteExtTransactionResponse>): MsgDeleteExtTransactionResponse {
    const message = { ...baseMsgDeleteExtTransactionResponse } as MsgDeleteExtTransactionResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateExtTransaction(request: MsgCreateExtTransaction): Promise<MsgCreateExtTransactionResponse>
  UpdateExtTransaction(request: MsgUpdateExtTransaction): Promise<MsgUpdateExtTransactionResponse>
  DeleteExtTransaction(request: MsgDeleteExtTransaction): Promise<MsgDeleteExtTransactionResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateExtTransaction(request: MsgCreateExtTransaction): Promise<MsgCreateExtTransactionResponse> {
    const data = MsgCreateExtTransaction.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Msg', 'CreateExtTransaction', data)
    return promise.then((data) => MsgCreateExtTransactionResponse.decode(new Reader(data)))
  }

  UpdateExtTransaction(request: MsgUpdateExtTransaction): Promise<MsgUpdateExtTransactionResponse> {
    const data = MsgUpdateExtTransaction.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Msg', 'UpdateExtTransaction', data)
    return promise.then((data) => MsgUpdateExtTransactionResponse.decode(new Reader(data)))
  }

  DeleteExtTransaction(request: MsgDeleteExtTransaction): Promise<MsgDeleteExtTransactionResponse> {
    const data = MsgDeleteExtTransaction.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Msg', 'DeleteExtTransaction', data)
    return promise.then((data) => MsgDeleteExtTransactionResponse.decode(new Reader(data)))
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
