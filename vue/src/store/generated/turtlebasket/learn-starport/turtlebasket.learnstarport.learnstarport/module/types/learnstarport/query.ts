/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { ExtTransaction } from '../learnstarport/ext_transaction'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'

export const protobufPackage = 'turtlebasket.learnstarport.learnstarport'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetExtTransactionRequest {
  id: number
}

export interface QueryGetExtTransactionResponse {
  ExtTransaction: ExtTransaction | undefined
}

export interface QueryAllExtTransactionRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllExtTransactionResponse {
  ExtTransaction: ExtTransaction[]
  pagination: PageResponse | undefined
}

const baseQueryGetExtTransactionRequest: object = { id: 0 }

export const QueryGetExtTransactionRequest = {
  encode(message: QueryGetExtTransactionRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetExtTransactionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetExtTransactionRequest } as QueryGetExtTransactionRequest
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

  fromJSON(object: any): QueryGetExtTransactionRequest {
    const message = { ...baseQueryGetExtTransactionRequest } as QueryGetExtTransactionRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetExtTransactionRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetExtTransactionRequest>): QueryGetExtTransactionRequest {
    const message = { ...baseQueryGetExtTransactionRequest } as QueryGetExtTransactionRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetExtTransactionResponse: object = {}

export const QueryGetExtTransactionResponse = {
  encode(message: QueryGetExtTransactionResponse, writer: Writer = Writer.create()): Writer {
    if (message.ExtTransaction !== undefined) {
      ExtTransaction.encode(message.ExtTransaction, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetExtTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetExtTransactionResponse } as QueryGetExtTransactionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ExtTransaction = ExtTransaction.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetExtTransactionResponse {
    const message = { ...baseQueryGetExtTransactionResponse } as QueryGetExtTransactionResponse
    if (object.ExtTransaction !== undefined && object.ExtTransaction !== null) {
      message.ExtTransaction = ExtTransaction.fromJSON(object.ExtTransaction)
    } else {
      message.ExtTransaction = undefined
    }
    return message
  },

  toJSON(message: QueryGetExtTransactionResponse): unknown {
    const obj: any = {}
    message.ExtTransaction !== undefined && (obj.ExtTransaction = message.ExtTransaction ? ExtTransaction.toJSON(message.ExtTransaction) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetExtTransactionResponse>): QueryGetExtTransactionResponse {
    const message = { ...baseQueryGetExtTransactionResponse } as QueryGetExtTransactionResponse
    if (object.ExtTransaction !== undefined && object.ExtTransaction !== null) {
      message.ExtTransaction = ExtTransaction.fromPartial(object.ExtTransaction)
    } else {
      message.ExtTransaction = undefined
    }
    return message
  }
}

const baseQueryAllExtTransactionRequest: object = {}

export const QueryAllExtTransactionRequest = {
  encode(message: QueryAllExtTransactionRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllExtTransactionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllExtTransactionRequest } as QueryAllExtTransactionRequest
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

  fromJSON(object: any): QueryAllExtTransactionRequest {
    const message = { ...baseQueryAllExtTransactionRequest } as QueryAllExtTransactionRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllExtTransactionRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllExtTransactionRequest>): QueryAllExtTransactionRequest {
    const message = { ...baseQueryAllExtTransactionRequest } as QueryAllExtTransactionRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllExtTransactionResponse: object = {}

export const QueryAllExtTransactionResponse = {
  encode(message: QueryAllExtTransactionResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.ExtTransaction) {
      ExtTransaction.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllExtTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllExtTransactionResponse } as QueryAllExtTransactionResponse
    message.ExtTransaction = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ExtTransaction.push(ExtTransaction.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllExtTransactionResponse {
    const message = { ...baseQueryAllExtTransactionResponse } as QueryAllExtTransactionResponse
    message.ExtTransaction = []
    if (object.ExtTransaction !== undefined && object.ExtTransaction !== null) {
      for (const e of object.ExtTransaction) {
        message.ExtTransaction.push(ExtTransaction.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllExtTransactionResponse): unknown {
    const obj: any = {}
    if (message.ExtTransaction) {
      obj.ExtTransaction = message.ExtTransaction.map((e) => (e ? ExtTransaction.toJSON(e) : undefined))
    } else {
      obj.ExtTransaction = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllExtTransactionResponse>): QueryAllExtTransactionResponse {
    const message = { ...baseQueryAllExtTransactionResponse } as QueryAllExtTransactionResponse
    message.ExtTransaction = []
    if (object.ExtTransaction !== undefined && object.ExtTransaction !== null) {
      for (const e of object.ExtTransaction) {
        message.ExtTransaction.push(ExtTransaction.fromPartial(e))
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
  /** Queries a extTransaction by id. */
  ExtTransaction(request: QueryGetExtTransactionRequest): Promise<QueryGetExtTransactionResponse>
  /** Queries a list of extTransaction items. */
  ExtTransactionAll(request: QueryAllExtTransactionRequest): Promise<QueryAllExtTransactionResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  ExtTransaction(request: QueryGetExtTransactionRequest): Promise<QueryGetExtTransactionResponse> {
    const data = QueryGetExtTransactionRequest.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'ExtTransaction', data)
    return promise.then((data) => QueryGetExtTransactionResponse.decode(new Reader(data)))
  }

  ExtTransactionAll(request: QueryAllExtTransactionRequest): Promise<QueryAllExtTransactionResponse> {
    const data = QueryAllExtTransactionRequest.encode(request).finish()
    const promise = this.rpc.request('turtlebasket.learnstarport.learnstarport.Query', 'ExtTransactionAll', data)
    return promise.then((data) => QueryAllExtTransactionResponse.decode(new Reader(data)))
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
