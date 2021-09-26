package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) DogeTxAll(c context.Context, req *types.QueryAllDogeTxRequest) (*types.QueryAllDogeTxResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var dogeTxs []*types.DogeTx
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	dogeTxStore := prefix.NewStore(store, types.KeyPrefix(types.DogeTxKey))

	pageRes, err := query.Paginate(dogeTxStore, req.Pagination, func(key []byte, value []byte) error {
		var dogeTx types.DogeTx
		if err := k.cdc.UnmarshalBinaryBare(value, &dogeTx); err != nil {
			return err
		}

		dogeTxs = append(dogeTxs, &dogeTx)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDogeTxResponse{DogeTx: dogeTxs, Pagination: pageRes}, nil
}

func (k Keeper) DogeTx(c context.Context, req *types.QueryGetDogeTxRequest) (*types.QueryGetDogeTxResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var dogeTx types.DogeTx
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasDogeTx(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DogeTxKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetDogeTxIDBytes(req.Id)), &dogeTx)

	return &types.QueryGetDogeTxResponse{DogeTx: &dogeTx}, nil
}
