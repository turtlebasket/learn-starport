package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

func (k msgServer) CreateExtTransaction(goCtx context.Context, msg *types.MsgCreateExtTransaction) (*types.MsgCreateExtTransactionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var extTransaction = types.ExtTransaction{
		Creator: msg.Creator,
		Chain:   msg.Chain,
		To:      msg.To,
		From:    msg.From,
		Amount:  msg.Amount,
		Txid:    msg.Txid,
	}

	id := k.AppendExtTransaction(
		ctx,
		extTransaction,
	)

	return &types.MsgCreateExtTransactionResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateExtTransaction(goCtx context.Context, msg *types.MsgUpdateExtTransaction) (*types.MsgUpdateExtTransactionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var extTransaction = types.ExtTransaction{
		Creator: msg.Creator,
		Id:      msg.Id,
		Chain:   msg.Chain,
		To:      msg.To,
		From:    msg.From,
		Amount:  msg.Amount,
		Txid:    msg.Txid,
	}

	// Checks that the element exists
	if !k.HasExtTransaction(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetExtTransactionOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetExtTransaction(ctx, extTransaction)

	return &types.MsgUpdateExtTransactionResponse{}, nil
}

func (k msgServer) DeleteExtTransaction(goCtx context.Context, msg *types.MsgDeleteExtTransaction) (*types.MsgDeleteExtTransactionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasExtTransaction(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetExtTransactionOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveExtTransaction(ctx, msg.Id)

	return &types.MsgDeleteExtTransactionResponse{}, nil
}
