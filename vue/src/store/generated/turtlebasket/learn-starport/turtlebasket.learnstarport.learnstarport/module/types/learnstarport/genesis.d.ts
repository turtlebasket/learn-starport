import { Writer, Reader } from 'protobufjs/minimal';
import { BchTx } from '../learnstarport/bch_tx';
import { XmrTx } from '../learnstarport/xmr_tx';
import { DogeTx } from '../learnstarport/doge_tx';
import { EthTx } from '../learnstarport/eth_tx';
import { BtcTx } from '../learnstarport/btc_tx';
export declare const protobufPackage = "turtlebasket.learnstarport.learnstarport";
/** GenesisState defines the learnstarport module's genesis state. */
export interface GenesisState {
    /** this line is used by starport scaffolding # genesis/proto/state */
    bchTxList: BchTx[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    bchTxCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    xmrTxList: XmrTx[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    xmrTxCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    dogeTxList: DogeTx[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    dogeTxCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    ethTxList: EthTx[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    ethTxCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    btcTxList: BtcTx[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    btcTxCount: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
