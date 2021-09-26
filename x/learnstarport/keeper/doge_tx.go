package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
	"strconv"
)

// GetDogeTxCount get the total number of TypeName.LowerCamel
func (k Keeper) GetDogeTxCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DogeTxCountKey))
	byteKey := types.KeyPrefix(types.DogeTxCountKey)
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

// SetDogeTxCount set the total number of dogeTx
func (k Keeper) SetDogeTxCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DogeTxCountKey))
	byteKey := types.KeyPrefix(types.DogeTxCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendDogeTx appends a dogeTx in the store with a new id and update the count
func (k Keeper) AppendDogeTx(
	ctx sdk.Context,
	dogeTx types.DogeTx,
) uint64 {
	// Create the dogeTx
	count := k.GetDogeTxCount(ctx)

	// Set the ID of the appended value
	dogeTx.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DogeTxKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&dogeTx)
	store.Set(GetDogeTxIDBytes(dogeTx.Id), appendedValue)

	// Update dogeTx count
	k.SetDogeTxCount(ctx, count+1)

	return count
}

// SetDogeTx set a specific dogeTx in the store
func (k Keeper) SetDogeTx(ctx sdk.Context, dogeTx types.DogeTx) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DogeTxKey))
	b := k.cdc.MustMarshalBinaryBare(&dogeTx)
	store.Set(GetDogeTxIDBytes(dogeTx.Id), b)
}

// GetDogeTx returns a dogeTx from its id
func (k Keeper) GetDogeTx(ctx sdk.Context, id uint64) types.DogeTx {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DogeTxKey))
	var dogeTx types.DogeTx
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetDogeTxIDBytes(id)), &dogeTx)
	return dogeTx
}

// HasDogeTx checks if the dogeTx exists in the store
func (k Keeper) HasDogeTx(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DogeTxKey))
	return store.Has(GetDogeTxIDBytes(id))
}

// GetDogeTxOwner returns the creator of the
func (k Keeper) GetDogeTxOwner(ctx sdk.Context, id uint64) string {
	return k.GetDogeTx(ctx, id).Creator
}

// RemoveDogeTx removes a dogeTx from the store
func (k Keeper) RemoveDogeTx(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DogeTxKey))
	store.Delete(GetDogeTxIDBytes(id))
}

// GetAllDogeTx returns all dogeTx
func (k Keeper) GetAllDogeTx(ctx sdk.Context) (list []types.DogeTx) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DogeTxKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DogeTx
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetDogeTxIDBytes returns the byte representation of the ID
func GetDogeTxIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetDogeTxIDFromBytes returns ID in uint64 format from a byte array
func GetDogeTxIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
