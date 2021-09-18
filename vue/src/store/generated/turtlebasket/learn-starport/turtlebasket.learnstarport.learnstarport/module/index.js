// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateExtTransaction } from "./types/learnstarport/tx";
import { MsgDeleteExtTransaction } from "./types/learnstarport/tx";
import { MsgUpdateExtTransaction } from "./types/learnstarport/tx";
const types = [
    ["/turtlebasket.learnstarport.learnstarport.MsgCreateExtTransaction", MsgCreateExtTransaction],
    ["/turtlebasket.learnstarport.learnstarport.MsgDeleteExtTransaction", MsgDeleteExtTransaction],
    ["/turtlebasket.learnstarport.learnstarport.MsgUpdateExtTransaction", MsgUpdateExtTransaction],
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
        msgCreateExtTransaction: (data) => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgCreateExtTransaction", value: data }),
        msgDeleteExtTransaction: (data) => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgDeleteExtTransaction", value: data }),
        msgUpdateExtTransaction: (data) => ({ typeUrl: "/turtlebasket.learnstarport.learnstarport.MsgUpdateExtTransaction", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
