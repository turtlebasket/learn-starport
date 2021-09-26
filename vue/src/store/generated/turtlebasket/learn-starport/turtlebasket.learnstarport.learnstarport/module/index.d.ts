import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteEthTx } from "./types/learnstarport/tx";
import { MsgDeleteBtcTx } from "./types/learnstarport/tx";
import { MsgCreateBchTx } from "./types/learnstarport/tx";
import { MsgUpdateDogeTx } from "./types/learnstarport/tx";
import { MsgUpdateXmrTx } from "./types/learnstarport/tx";
import { MsgDeleteXmrTx } from "./types/learnstarport/tx";
import { MsgCreateXmrTx } from "./types/learnstarport/tx";
import { MsgCreateBtcTx } from "./types/learnstarport/tx";
import { MsgDeleteDogeTx } from "./types/learnstarport/tx";
import { MsgUpdateBchTx } from "./types/learnstarport/tx";
import { MsgDeleteBchTx } from "./types/learnstarport/tx";
import { MsgCreateDogeTx } from "./types/learnstarport/tx";
import { MsgCreateEthTx } from "./types/learnstarport/tx";
import { MsgUpdateEthTx } from "./types/learnstarport/tx";
import { MsgUpdateBtcTx } from "./types/learnstarport/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgDeleteEthTx: (data: MsgDeleteEthTx) => EncodeObject;
    msgDeleteBtcTx: (data: MsgDeleteBtcTx) => EncodeObject;
    msgCreateBchTx: (data: MsgCreateBchTx) => EncodeObject;
    msgUpdateDogeTx: (data: MsgUpdateDogeTx) => EncodeObject;
    msgUpdateXmrTx: (data: MsgUpdateXmrTx) => EncodeObject;
    msgDeleteXmrTx: (data: MsgDeleteXmrTx) => EncodeObject;
    msgCreateXmrTx: (data: MsgCreateXmrTx) => EncodeObject;
    msgCreateBtcTx: (data: MsgCreateBtcTx) => EncodeObject;
    msgDeleteDogeTx: (data: MsgDeleteDogeTx) => EncodeObject;
    msgUpdateBchTx: (data: MsgUpdateBchTx) => EncodeObject;
    msgDeleteBchTx: (data: MsgDeleteBchTx) => EncodeObject;
    msgCreateDogeTx: (data: MsgCreateDogeTx) => EncodeObject;
    msgCreateEthTx: (data: MsgCreateEthTx) => EncodeObject;
    msgUpdateEthTx: (data: MsgUpdateEthTx) => EncodeObject;
    msgUpdateBtcTx: (data: MsgUpdateBtcTx) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
