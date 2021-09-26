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

func (k Keeper) EthTxAll(c context.Context, req *types.QueryAllEthTxRequest) (*types.QueryAllEthTxResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var ethTxs []*types.EthTx
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	ethTxStore := prefix.NewStore(store, types.KeyPrefix(types.EthTxKey))

	pageRes, err := query.Paginate(ethTxStore, req.Pagination, func(key []byte, value []byte) error {
		var ethTx types.EthTx
		if err := k.cdc.UnmarshalBinaryBare(value, &ethTx); err != nil {
			return err
		}

		ethTxs = append(ethTxs, &ethTx)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllEthTxResponse{EthTx: ethTxs, Pagination: pageRes}, nil
}

func (k Keeper) EthTx(c context.Context, req *types.QueryGetEthTxRequest) (*types.QueryGetEthTxResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var ethTx types.EthTx
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasEthTx(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EthTxKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetEthTxIDBytes(req.Id)), &ethTx)

	return &types.QueryGetEthTxResponse{EthTx: &ethTx}, nil
}
