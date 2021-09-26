package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

func createNXmrTx(keeper *Keeper, ctx sdk.Context, n int) []types.XmrTx {
	items := make([]types.XmrTx, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendXmrTx(ctx, items[i])
	}
	return items
}

func TestXmrTxGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNXmrTx(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetXmrTx(ctx, item.Id))
	}
}

func TestXmrTxExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNXmrTx(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasXmrTx(ctx, item.Id))
	}
}

func TestXmrTxRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNXmrTx(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveXmrTx(ctx, item.Id)
		assert.False(t, keeper.HasXmrTx(ctx, item.Id))
	}
}

func TestXmrTxGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNXmrTx(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllXmrTx(ctx))
}

func TestXmrTxCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNXmrTx(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetXmrTxCount(ctx))
}
