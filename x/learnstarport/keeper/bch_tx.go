package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
	"strconv"
)

// GetBchTxCount get the total number of TypeName.LowerCamel
func (k Keeper) GetBchTxCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BchTxCountKey))
	byteKey := types.KeyPrefix(types.BchTxCountKey)
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

// SetBchTxCount set the total number of bchTx
func (k Keeper) SetBchTxCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BchTxCountKey))
	byteKey := types.KeyPrefix(types.BchTxCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendBchTx appends a bchTx in the store with a new id and update the count
func (k Keeper) AppendBchTx(
	ctx sdk.Context,
	bchTx types.BchTx,
) uint64 {
	// Create the bchTx
	count := k.GetBchTxCount(ctx)

	// Set the ID of the appended value
	bchTx.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BchTxKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&bchTx)
	store.Set(GetBchTxIDBytes(bchTx.Id), appendedValue)

	// Update bchTx count
	k.SetBchTxCount(ctx, count+1)

	return count
}

// SetBchTx set a specific bchTx in the store
func (k Keeper) SetBchTx(ctx sdk.Context, bchTx types.BchTx) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BchTxKey))
	b := k.cdc.MustMarshalBinaryBare(&bchTx)
	store.Set(GetBchTxIDBytes(bchTx.Id), b)
}

// GetBchTx returns a bchTx from its id
func (k Keeper) GetBchTx(ctx sdk.Context, id uint64) types.BchTx {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BchTxKey))
	var bchTx types.BchTx
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetBchTxIDBytes(id)), &bchTx)
	return bchTx
}

// HasBchTx checks if the bchTx exists in the store
func (k Keeper) HasBchTx(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BchTxKey))
	return store.Has(GetBchTxIDBytes(id))
}

// GetBchTxOwner returns the creator of the
func (k Keeper) GetBchTxOwner(ctx sdk.Context, id uint64) string {
	return k.GetBchTx(ctx, id).Creator
}

// RemoveBchTx removes a bchTx from the store
func (k Keeper) RemoveBchTx(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BchTxKey))
	store.Delete(GetBchTxIDBytes(id))
}

// GetAllBchTx returns all bchTx
func (k Keeper) GetAllBchTx(ctx sdk.Context) (list []types.BchTx) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BchTxKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.BchTx
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetBchTxIDBytes returns the byte representation of the ID
func GetBchTxIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetBchTxIDFromBytes returns ID in uint64 format from a byte array
func GetBchTxIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
