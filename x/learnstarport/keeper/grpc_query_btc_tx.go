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

func (k Keeper) BtcTxAll(c context.Context, req *types.QueryAllBtcTxRequest) (*types.QueryAllBtcTxResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var btcTxs []*types.BtcTx
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	btcTxStore := prefix.NewStore(store, types.KeyPrefix(types.BtcTxKey))

	pageRes, err := query.Paginate(btcTxStore, req.Pagination, func(key []byte, value []byte) error {
		var btcTx types.BtcTx
		if err := k.cdc.UnmarshalBinaryBare(value, &btcTx); err != nil {
			return err
		}

		btcTxs = append(btcTxs, &btcTx)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBtcTxResponse{BtcTx: btcTxs, Pagination: pageRes}, nil
}

func (k Keeper) BtcTx(c context.Context, req *types.QueryGetBtcTxRequest) (*types.QueryGetBtcTxResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var btcTx types.BtcTx
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasBtcTx(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BtcTxKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetBtcTxIDBytes(req.Id)), &btcTx)

	return &types.QueryGetBtcTxResponse{BtcTx: &btcTx}, nil
}
