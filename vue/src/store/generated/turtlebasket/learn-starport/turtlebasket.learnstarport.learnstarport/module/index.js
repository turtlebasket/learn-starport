// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
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
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgDeleteEthTx: (data) => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgDeleteEthTx", value: data }),
        msgDeleteBtcTx: (data) => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgDeleteBtcTx", value: data }),
        msgCreateBchTx: (data) => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgCreateBchTx", value: data }),
        msgUpdateDogeTx: (data) => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgUpdateDogeTx", value: data }),
        msgUpdateXmrTx: (data) => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgUpdateXmrTx", value: data }),
        msgDeleteXmrTx: (data) => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgDeleteXmrTx", value: data }),
        msgCreateXmrTx: (data) => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgCreateXmrTx", value: data }),
        msgCreateBtcTx: (data) => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgCreateBtcTx", value: data }),
        msgDeleteDogeTx: (data) => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgDeleteDogeTx", value: data }),
        msgUpdateBchTx: (data) => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgUpdateBchTx", value: data }),
        msgDeleteBchTx: (data) => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgDeleteBchTx", value: data }),
        msgCreateDogeTx: (data) => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgCreateDogeTx", value: data }),
        msgCreateEthTx: (data) => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgCreateEthTx", value: data }),
        msgUpdateEthTx: (data) => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgUpdateEthTx", value: data }),
        msgUpdateBtcTx: (data) => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgUpdateBtcTx", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
