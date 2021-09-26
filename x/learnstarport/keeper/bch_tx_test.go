package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

func createNBchTx(keeper *Keeper, ctx sdk.Context, n int) []types.BchTx {
	items := make([]types.BchTx, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendBchTx(ctx, items[i])
	}
	return items
}

func TestBchTxGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBchTx(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetBchTx(ctx, item.Id))
	}
}

func TestBchTxExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBchTx(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasBchTx(ctx, item.Id))
	}
}

func TestBchTxRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBchTx(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBchTx(ctx, item.Id)
		assert.False(t, keeper.HasBchTx(ctx, item.Id))
	}
}

func TestBchTxGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBchTx(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllBchTx(ctx))
}

func TestBchTxCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBchTx(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetBchTxCount(ctx))
}
