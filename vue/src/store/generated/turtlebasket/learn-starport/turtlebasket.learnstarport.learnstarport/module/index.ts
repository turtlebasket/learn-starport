// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
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


const types = [
  ["/turtlebasket.learnstarport.learnstarport.MsgDeleteEthTx", MsgDeleteEthTx],
  ["/turtlebasket.learnstarport.learnstarport.MsgDeleteBtcTx", MsgDeleteBtcTx],
  ["/turtlebasket.learnstarport.learnstarport.MsgCreateBchTx", MsgCreateBchTx],
  ["/turtlebasket.learnstarport.learnstarport.MsgUpdateDogeTx", MsgUpdateDogeTx],
  ["/turtlebasket.learnstarport.learnstarport.MsgUpdateXmrTx", MsgUpdateXmrTx],
  ["/turtlebasket.learnstarport.learnstarport.MsgDeleteXmrTx", MsgDeleteXmrTx],
  ["/turtlebasket.learnstarport.learnstarport.MsgCreateXmrTx", MsgCreateXmrTx],
  ["/turtlebasket.learnstarport.learnstarport.MsgCreateBtcTx", MsgCreateBtcTx],
  ["/turtlebasket.learnstarport.learnstarport.MsgDeleteDogeTx", MsgDeleteDogeTx],
  ["/turtlebasket.learnstarport.learnstarport.MsgUpdateBchTx", MsgUpdateBchTx],
  ["/turtlebasket.learnstarport.learnstarport.MsgDeleteBchTx", MsgDeleteBchTx],
  ["/turtlebasket.learnstarport.learnstarport.MsgCreateDogeTx", MsgCreateDogeTx],
  ["/turtlebasket.learnstarport.learnstarport.MsgCreateEthTx", MsgCreateEthTx],
  ["/turtlebasket.learnstarport.learnstarport.MsgUpdateEthTx", MsgUpdateEthTx],
  ["/turtlebasket.learnstarport.learnstarport.MsgUpdateBtcTx", MsgUpdateBtcTx],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgDeleteEthTx: (data: MsgDeleteEthTx): EncodeObject => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgDeleteEthTx", value: data }),
    msgDeleteBtcTx: (data: MsgDeleteBtcTx): EncodeObject => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgDeleteBtcTx", value: data }),
    msgCreateBchTx: (data: MsgCreateBchTx): EncodeObject => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgCreateBchTx", value: data }),
    msgUpdateDogeTx: (data: MsgUpdateDogeTx): EncodeObject => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgUpdateDogeTx", value: data }),
    msgUpdateXmrTx: (data: MsgUpdateXmrTx): EncodeObject => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgUpdateXmrTx", value: data }),
    msgDeleteXmrTx: (data: MsgDeleteXmrTx): EncodeObject => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgDeleteXmrTx", value: data }),
    msgCreateXmrTx: (data: MsgCreateXmrTx): EncodeObject => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgCreateXmrTx", value: data }),
    msgCreateBtcTx: (data: MsgCreateBtcTx): EncodeObject => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgCreateBtcTx", value: data }),
    msgDeleteDogeTx: (data: MsgDeleteDogeTx): EncodeObject => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgDeleteDogeTx", value: data }),
    msgUpdateBchTx: (data: MsgUpdateBchTx): EncodeObject => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgUpdateBchTx", value: data }),
    msgDeleteBchTx: (data: MsgDeleteBchTx): EncodeObject => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgDeleteBchTx", value: data }),
    msgCreateDogeTx: (data: MsgCreateDogeTx): EncodeObject => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgCreateDogeTx", value: data }),
    msgCreateEthTx: (data: MsgCreateEthTx): EncodeObject => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgCreateEthTx", value: data }),
    msgUpdateEthTx: (data: MsgUpdateEthTx): EncodeObject => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgUpdateEthTx", value: data }),
    msgUpdateBtcTx: (data: MsgUpdateBtcTx): EncodeObject => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgUpdateBtcTx", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
