package learnstarport

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/turtlebasket/learn-starport/x/learnstarport/keeper"
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the bchTx
	for _, elem := range genState.BchTxList {
		k.SetBchTx(ctx, *elem)
	}

	// Set bchTx count
	k.SetBchTxCount(ctx, genState.BchTxCount)

	// Set all the xmrTx
	for _, elem := range genState.XmrTxList {
		k.SetXmrTx(ctx, *elem)
	}

	// Set xmrTx count
	k.SetXmrTxCount(ctx, genState.XmrTxCount)

	// Set all the dogeTx
	for _, elem := range genState.DogeTxList {
		k.SetDogeTx(ctx, *elem)
	}

	// Set dogeTx count
	k.SetDogeTxCount(ctx, genState.DogeTxCount)

	// Set all the ethTx
	for _, elem := range genState.EthTxList {
		k.SetEthTx(ctx, *elem)
	}

	// Set ethTx count
	k.SetEthTxCount(ctx, genState.EthTxCount)

	// Set all the btcTx
	for _, elem := range genState.BtcTxList {
		k.SetBtcTx(ctx, *elem)
	}

	// Set btcTx count
	k.SetBtcTxCount(ctx, genState.BtcTxCount)

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all bchTx
	bchTxList := k.GetAllBchTx(ctx)
	for _, elem := range bchTxList {
		elem := elem
		genesis.BchTxList = append(genesis.BchTxList, &elem)
	}

	// Set the current count
	genesis.BchTxCount = k.GetBchTxCount(ctx)

	// Get all xmrTx
	xmrTxList := k.GetAllXmrTx(ctx)
	for _, elem := range xmrTxList {
		elem := elem
		genesis.XmrTxList = append(genesis.XmrTxList, &elem)
	}

	// Set the current count
	genesis.XmrTxCount = k.GetXmrTxCount(ctx)

	// Get all dogeTx
	dogeTxList := k.GetAllDogeTx(ctx)
	for _, elem := range dogeTxList {
		elem := elem
		genesis.DogeTxList = append(genesis.DogeTxList, &elem)
	}

	// Set the current count
	genesis.DogeTxCount = k.GetDogeTxCount(ctx)

	// Get all ethTx
	ethTxList := k.GetAllEthTx(ctx)
	for _, elem := range ethTxList {
		elem := elem
		genesis.EthTxList = append(genesis.EthTxList, &elem)
	}

	// Set the current count
	genesis.EthTxCount = k.GetEthTxCount(ctx)

	// Get all btcTx
	btcTxList := k.GetAllBtcTx(ctx)
	for _, elem := range btcTxList {
		elem := elem
		genesis.BtcTxList = append(genesis.BtcTxList, &elem)
	}

	// Set the current count
	genesis.BtcTxCount = k.GetBtcTxCount(ctx)

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
