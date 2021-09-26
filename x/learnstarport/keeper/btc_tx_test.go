package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

func createNBtcTx(keeper *Keeper, ctx sdk.Context, n int) []types.BtcTx {
	items := make([]types.BtcTx, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendBtcTx(ctx, items[i])
	}
	return items
}

func TestBtcTxGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBtcTx(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetBtcTx(ctx, item.Id))
	}
}

func TestBtcTxExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBtcTx(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasBtcTx(ctx, item.Id))
	}
}

func TestBtcTxRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBtcTx(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBtcTx(ctx, item.Id)
		assert.False(t, keeper.HasBtcTx(ctx, item.Id))
	}
}

func TestBtcTxGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBtcTx(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllBtcTx(ctx))
}

func TestBtcTxCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBtcTx(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetBtcTxCount(ctx))
}
