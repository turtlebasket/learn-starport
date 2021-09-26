package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

func (k msgServer) CreateDogeTx(goCtx context.Context, msg *types.MsgCreateDogeTx) (*types.MsgCreateDogeTxResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var dogeTx = types.DogeTx{
		Creator: msg.Creator,
		Txid:    msg.Txid,
		To:      msg.To,
		From:    msg.From,
		Amount:  msg.Amount,
	}

	id := k.AppendDogeTx(
		ctx,
		dogeTx,
	)

	return &types.MsgCreateDogeTxResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateDogeTx(goCtx context.Context, msg *types.MsgUpdateDogeTx) (*types.MsgUpdateDogeTxResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var dogeTx = types.DogeTx{
		Creator: msg.Creator,
		Id:      msg.Id,
		Txid:    msg.Txid,
		To:      msg.To,
		From:    msg.From,
		Amount:  msg.Amount,
	}

	// Checks that the element exists
	if !k.HasDogeTx(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetDogeTxOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetDogeTx(ctx, dogeTx)

	return &types.MsgUpdateDogeTxResponse{}, nil
}

func (k msgServer) DeleteDogeTx(goCtx context.Context, msg *types.MsgDeleteDogeTx) (*types.MsgDeleteDogeTxResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasDogeTx(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetDogeTxOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveDogeTx(ctx, msg.Id)

	return &types.MsgDeleteDogeTxResponse{}, nil
}
