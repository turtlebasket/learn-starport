package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
	"strconv"
)

// GetXmrTxCount get the total number of TypeName.LowerCamel
func (k Keeper) GetXmrTxCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.XmrTxCountKey))
	byteKey := types.KeyPrefix(types.XmrTxCountKey)
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

// SetXmrTxCount set the total number of xmrTx
func (k Keeper) SetXmrTxCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.XmrTxCountKey))
	byteKey := types.KeyPrefix(types.XmrTxCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendXmrTx appends a xmrTx in the store with a new id and update the count
func (k Keeper) AppendXmrTx(
	ctx sdk.Context,
	xmrTx types.XmrTx,
) uint64 {
	// Create the xmrTx
	count := k.GetXmrTxCount(ctx)

	// Set the ID of the appended value
	xmrTx.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.XmrTxKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&xmrTx)
	store.Set(GetXmrTxIDBytes(xmrTx.Id), appendedValue)

	// Update xmrTx count
	k.SetXmrTxCount(ctx, count+1)

	return count
}

// SetXmrTx set a specific xmrTx in the store
func (k Keeper) SetXmrTx(ctx sdk.Context, xmrTx types.XmrTx) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.XmrTxKey))
	b := k.cdc.MustMarshalBinaryBare(&xmrTx)
	store.Set(GetXmrTxIDBytes(xmrTx.Id), b)
}

// GetXmrTx returns a xmrTx from its id
func (k Keeper) GetXmrTx(ctx sdk.Context, id uint64) types.XmrTx {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.XmrTxKey))
	var xmrTx types.XmrTx
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetXmrTxIDBytes(id)), &xmrTx)
	return xmrTx
}

// HasXmrTx checks if the xmrTx exists in the store
func (k Keeper) HasXmrTx(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.XmrTxKey))
	return store.Has(GetXmrTxIDBytes(id))
}

// GetXmrTxOwner returns the creator of the
func (k Keeper) GetXmrTxOwner(ctx sdk.Context, id uint64) string {
	return k.GetXmrTx(ctx, id).Creator
}

// RemoveXmrTx removes a xmrTx from the store
func (k Keeper) RemoveXmrTx(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.XmrTxKey))
	store.Delete(GetXmrTxIDBytes(id))
}

// GetAllXmrTx returns all xmrTx
func (k Keeper) GetAllXmrTx(ctx sdk.Context) (list []types.XmrTx) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.XmrTxKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.XmrTx
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetXmrTxIDBytes returns the byte representation of the ID
func GetXmrTxIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetXmrTxIDFromBytes returns ID in uint64 format from a byte array
func GetXmrTxIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
