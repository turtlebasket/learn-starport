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

func (k Keeper) XmrTxAll(c context.Context, req *types.QueryAllXmrTxRequest) (*types.QueryAllXmrTxResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var xmrTxs []*types.XmrTx
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	xmrTxStore := prefix.NewStore(store, types.KeyPrefix(types.XmrTxKey))

	pageRes, err := query.Paginate(xmrTxStore, req.Pagination, func(key []byte, value []byte) error {
		var xmrTx types.XmrTx
		if err := k.cdc.UnmarshalBinaryBare(value, &xmrTx); err != nil {
			return err
		}

		xmrTxs = append(xmrTxs, &xmrTx)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllXmrTxResponse{XmrTx: xmrTxs, Pagination: pageRes}, nil
}

func (k Keeper) XmrTx(c context.Context, req *types.QueryGetXmrTxRequest) (*types.QueryGetXmrTxResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var xmrTx types.XmrTx
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasXmrTx(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.XmrTxKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetXmrTxIDBytes(req.Id)), &xmrTx)

	return &types.QueryGetXmrTxResponse{XmrTx: &xmrTx}, nil
}
