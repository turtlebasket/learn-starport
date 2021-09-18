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

func (k Keeper) ExtTransactionAll(c context.Context, req *types.QueryAllExtTransactionRequest) (*types.QueryAllExtTransactionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var extTransactions []*types.ExtTransaction
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	extTransactionStore := prefix.NewStore(store, types.KeyPrefix(types.ExtTransactionKey))

	pageRes, err := query.Paginate(extTransactionStore, req.Pagination, func(key []byte, value []byte) error {
		var extTransaction types.ExtTransaction
		if err := k.cdc.UnmarshalBinaryBare(value, &extTransaction); err != nil {
			return err
		}

		extTransactions = append(extTransactions, &extTransaction)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllExtTransactionResponse{ExtTransaction: extTransactions, Pagination: pageRes}, nil
}

func (k Keeper) ExtTransaction(c context.Context, req *types.QueryGetExtTransactionRequest) (*types.QueryGetExtTransactionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var extTransaction types.ExtTransaction
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasExtTransaction(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExtTransactionKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetExtTransactionIDBytes(req.Id)), &extTransaction)

	return &types.QueryGetExtTransactionResponse{ExtTransaction: &extTransaction}, nil
}
