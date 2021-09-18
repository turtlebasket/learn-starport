package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

func createNExtTransaction(keeper *Keeper, ctx sdk.Context, n int) []types.ExtTransaction {
	items := make([]types.ExtTransaction, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendExtTransaction(ctx, items[i])
	}
	return items
}

func TestExtTransactionGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNExtTransaction(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetExtTransaction(ctx, item.Id))
	}
}

func TestExtTransactionExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNExtTransaction(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasExtTransaction(ctx, item.Id))
	}
}

func TestExtTransactionRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNExtTransaction(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveExtTransaction(ctx, item.Id)
		assert.False(t, keeper.HasExtTransaction(ctx, item.Id))
	}
}

func TestExtTransactionGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNExtTransaction(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllExtTransaction(ctx))
}

func TestExtTransactionCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNExtTransaction(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetExtTransactionCount(ctx))
}
