package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
	"strconv"
)

// GetBtcTxCount get the total number of TypeName.LowerCamel
func (k Keeper) GetBtcTxCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BtcTxCountKey))
	byteKey := types.KeyPrefix(types.BtcTxCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to uint64
		panic("cannot decode count")
	}

	return count
}

// SetBtcTxCount set the total number of btcTx
func (k Keeper) SetBtcTxCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BtcTxCountKey))
	byteKey := types.KeyPrefix(types.BtcTxCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendBtcTx appends a btcTx in the store with a new id and update the count
func (k Keeper) AppendBtcTx(
	ctx sdk.Context,
	btcTx types.BtcTx,
) uint64 {
	// Create the btcTx
	count := k.GetBtcTxCount(ctx)

	// Set the ID of the appended value
	btcTx.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BtcTxKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&btcTx)
	store.Set(GetBtcTxIDBytes(btcTx.Id), appendedValue)

	// Update btcTx count
	k.SetBtcTxCount(ctx, count+1)

	return count
}

// SetBtcTx set a specific btcTx in the store
func (k Keeper) SetBtcTx(ctx sdk.Context, btcTx types.BtcTx) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BtcTxKey))
	b := k.cdc.MustMarshalBinaryBare(&btcTx)
	store.Set(GetBtcTxIDBytes(btcTx.Id), b)
}

// GetBtcTx returns a btcTx from its id
func (k Keeper) GetBtcTx(ctx sdk.Context, id uint64) types.BtcTx {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BtcTxKey))
	var btcTx types.BtcTx
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetBtcTxIDBytes(id)), &btcTx)
	return btcTx
}

// HasBtcTx checks if the btcTx exists in the store
func (k Keeper) HasBtcTx(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BtcTxKey))
	return store.Has(GetBtcTxIDBytes(id))
}

// GetBtcTxOwner returns the creator of the
func (k Keeper) GetBtcTxOwner(ctx sdk.Context, id uint64) string {
	return k.GetBtcTx(ctx, id).Creator
}

// RemoveBtcTx removes a btcTx from the store
func (k Keeper) RemoveBtcTx(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BtcTxKey))
	store.Delete(GetBtcTxIDBytes(id))
}

// GetAllBtcTx returns all btcTx
func (k Keeper) GetAllBtcTx(ctx sdk.Context) (list []types.BtcTx) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BtcTxKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.BtcTx
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetBtcTxIDBytes returns the byte representation of the ID
func GetBtcTxIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetBtcTxIDFromBytes returns ID in uint64 format from a byte array
func GetBtcTxIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
