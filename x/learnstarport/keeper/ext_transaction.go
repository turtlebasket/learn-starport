package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
	"strconv"
)

// GetExtTransactionCount get the total number of TypeName.LowerCamel
func (k Keeper) GetExtTransactionCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExtTransactionCountKey))
	byteKey := types.KeyPrefix(types.ExtTransactionCountKey)
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

// SetExtTransactionCount set the total number of extTransaction
func (k Keeper) SetExtTransactionCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExtTransactionCountKey))
	byteKey := types.KeyPrefix(types.ExtTransactionCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendExtTransaction appends a extTransaction in the store with a new id and update the count
func (k Keeper) AppendExtTransaction(
	ctx sdk.Context,
	extTransaction types.ExtTransaction,
) uint64 {
	// Create the extTransaction
	count := k.GetExtTransactionCount(ctx)

	// Set the ID of the appended value
	extTransaction.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExtTransactionKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&extTransaction)
	store.Set(GetExtTransactionIDBytes(extTransaction.Id), appendedValue)

	// Update extTransaction count
	k.SetExtTransactionCount(ctx, count+1)

	return count
}

// SetExtTransaction set a specific extTransaction in the store
func (k Keeper) SetExtTransaction(ctx sdk.Context, extTransaction types.ExtTransaction) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExtTransactionKey))
	b := k.cdc.MustMarshalBinaryBare(&extTransaction)
	store.Set(GetExtTransactionIDBytes(extTransaction.Id), b)
}

// GetExtTransaction returns a extTransaction from its id
func (k Keeper) GetExtTransaction(ctx sdk.Context, id uint64) types.ExtTransaction {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExtTransactionKey))
	var extTransaction types.ExtTransaction
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetExtTransactionIDBytes(id)), &extTransaction)
	return extTransaction
}

// HasExtTransaction checks if the extTransaction exists in the store
func (k Keeper) HasExtTransaction(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExtTransactionKey))
	return store.Has(GetExtTransactionIDBytes(id))
}

// GetExtTransactionOwner returns the creator of the
func (k Keeper) GetExtTransactionOwner(ctx sdk.Context, id uint64) string {
	return k.GetExtTransaction(ctx, id).Creator
}

// RemoveExtTransaction removes a extTransaction from the store
func (k Keeper) RemoveExtTransaction(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExtTransactionKey))
	store.Delete(GetExtTransactionIDBytes(id))
}

// GetAllExtTransaction returns all extTransaction
func (k Keeper) GetAllExtTransaction(ctx sdk.Context) (list []types.ExtTransaction) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExtTransactionKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ExtTransaction
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetExtTransactionIDBytes returns the byte representation of the ID
func GetExtTransactionIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetExtTransactionIDFromBytes returns ID in uint64 format from a byte array
func GetExtTransactionIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
