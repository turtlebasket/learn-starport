/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'turtlebasket.learnstarport.learnstarport'

export interface ExtTransaction {
  creator: string
  id: number
  chain: string
  to: string
  from: string
  amount: string
  txid: string
}

const baseExtTransaction: object = { creator: '', id: 0, chain: '', to: '', from: '', amount: '', txid: '' }

export const ExtTransaction = {
  encode(message: ExtTransaction, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): ExtTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseExtTransaction } as ExtTransaction
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

  fromJSON(object: any): ExtTransaction {
    const message = { ...baseExtTransaction } as ExtTransaction
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

  toJSON(message: ExtTransaction): unknown {
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

  fromPartial(object: DeepPartial<ExtTransaction>): ExtTransaction {
    const message = { ...baseExtTransaction } as ExtTransaction
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
