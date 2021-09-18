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
	// Set all the extTransaction
	for _, elem := range genState.ExtTransactionList {
		k.SetExtTransaction(ctx, *elem)
	}

	// Set extTransaction count
	k.SetExtTransactionCount(ctx, genState.ExtTransactionCount)

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all extTransaction
	extTransactionList := k.GetAllExtTransaction(ctx)
	for _, elem := range extTransactionList {
		elem := elem
		genesis.ExtTransactionList = append(genesis.ExtTransactionList, &elem)
	}

	// Set the current count
	genesis.ExtTransactionCount = k.GetExtTransactionCount(ctx)

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
