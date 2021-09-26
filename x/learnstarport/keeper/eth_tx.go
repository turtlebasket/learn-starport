package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
	"strconv"
)

// GetEthTxCount get the total number of TypeName.LowerCamel
func (k Keeper) GetEthTxCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EthTxCountKey))
	byteKey := types.KeyPrefix(types.EthTxCountKey)
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

// SetEthTxCount set the total number of ethTx
func (k Keeper) SetEthTxCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EthTxCountKey))
	byteKey := types.KeyPrefix(types.EthTxCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendEthTx appends a ethTx in the store with a new id and update the count
func (k Keeper) AppendEthTx(
	ctx sdk.Context,
	ethTx types.EthTx,
) uint64 {
	// Create the ethTx
	count := k.GetEthTxCount(ctx)

	// Set the ID of the appended value
	ethTx.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EthTxKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&ethTx)
	store.Set(GetEthTxIDBytes(ethTx.Id), appendedValue)

	// Update ethTx count
	k.SetEthTxCount(ctx, count+1)

	return count
}

// SetEthTx set a specific ethTx in the store
func (k Keeper) SetEthTx(ctx sdk.Context, ethTx types.EthTx) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EthTxKey))
	b := k.cdc.MustMarshalBinaryBare(&ethTx)
	store.Set(GetEthTxIDBytes(ethTx.Id), b)
}

// GetEthTx returns a ethTx from its id
func (k Keeper) GetEthTx(ctx sdk.Context, id uint64) types.EthTx {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EthTxKey))
	var ethTx types.EthTx
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetEthTxIDBytes(id)), &ethTx)
	return ethTx
}

// HasEthTx checks if the ethTx exists in the store
func (k Keeper) HasEthTx(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EthTxKey))
	return store.Has(GetEthTxIDBytes(id))
}

// GetEthTxOwner returns the creator of the
func (k Keeper) GetEthTxOwner(ctx sdk.Context, id uint64) string {
	return k.GetEthTx(ctx, id).Creator
}

// RemoveEthTx removes a ethTx from the store
func (k Keeper) RemoveEthTx(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EthTxKey))
	store.Delete(GetEthTxIDBytes(id))
}

// GetAllEthTx returns all ethTx
func (k Keeper) GetAllEthTx(ctx sdk.Context) (list []types.EthTx) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EthTxKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.EthTx
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetEthTxIDBytes returns the byte representation of the ID
func GetEthTxIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetEthTxIDFromBytes returns ID in uint64 format from a byte array
func GetEthTxIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
