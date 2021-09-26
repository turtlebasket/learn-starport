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

func (k Keeper) BchTxAll(c context.Context, req *types.QueryAllBchTxRequest) (*types.QueryAllBchTxResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var bchTxs []*types.BchTx
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	bchTxStore := prefix.NewStore(store, types.KeyPrefix(types.BchTxKey))

	pageRes, err := query.Paginate(bchTxStore, req.Pagination, func(key []byte, value []byte) error {
		var bchTx types.BchTx
		if err := k.cdc.UnmarshalBinaryBare(value, &bchTx); err != nil {
			return err
		}

		bchTxs = append(bchTxs, &bchTx)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBchTxResponse{BchTx: bchTxs, Pagination: pageRes}, nil
}

func (k Keeper) BchTx(c context.Context, req *types.QueryGetBchTxRequest) (*types.QueryGetBchTxResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var bchTx types.BchTx
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasBchTx(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BchTxKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetBchTxIDBytes(req.Id)), &bchTx)

	return &types.QueryGetBchTxResponse{BchTx: &bchTx}, nil
}
