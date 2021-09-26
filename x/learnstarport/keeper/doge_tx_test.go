package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

func createNDogeTx(keeper *Keeper, ctx sdk.Context, n int) []types.DogeTx {
	items := make([]types.DogeTx, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendDogeTx(ctx, items[i])
	}
	return items
}

func TestDogeTxGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNDogeTx(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetDogeTx(ctx, item.Id))
	}
}

func TestDogeTxExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNDogeTx(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasDogeTx(ctx, item.Id))
	}
}

func TestDogeTxRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNDogeTx(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDogeTx(ctx, item.Id)
		assert.False(t, keeper.HasDogeTx(ctx, item.Id))
	}
}

func TestDogeTxGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNDogeTx(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllDogeTx(ctx))
}

func TestDogeTxCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNDogeTx(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetDogeTxCount(ctx))
}
