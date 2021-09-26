package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

func createNEthTx(keeper *Keeper, ctx sdk.Context, n int) []types.EthTx {
	items := make([]types.EthTx, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendEthTx(ctx, items[i])
	}
	return items
}

func TestEthTxGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNEthTx(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetEthTx(ctx, item.Id))
	}
}

func TestEthTxExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNEthTx(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasEthTx(ctx, item.Id))
	}
}

func TestEthTxRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNEthTx(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveEthTx(ctx, item.Id)
		assert.False(t, keeper.HasEthTx(ctx, item.Id))
	}
}

func TestEthTxGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNEthTx(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllEthTx(ctx))
}

func TestEthTxCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNEthTx(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetEthTxCount(ctx))
}
