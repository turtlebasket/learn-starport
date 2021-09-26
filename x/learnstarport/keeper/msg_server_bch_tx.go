package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

func (k msgServer) CreateBchTx(goCtx context.Context, msg *types.MsgCreateBchTx) (*types.MsgCreateBchTxResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var bchTx = types.BchTx{
		Creator: msg.Creator,
		Txid:    msg.Txid,
		To:      msg.To,
		From:    msg.From,
		Amount:  msg.Amount,
	}

	id := k.AppendBchTx(
		ctx,
		bchTx,
	)

	return &types.MsgCreateBchTxResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateBchTx(goCtx context.Context, msg *types.MsgUpdateBchTx) (*types.MsgUpdateBchTxResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var bchTx = types.BchTx{
		Creator: msg.Creator,
		Id:      msg.Id,
		Txid:    msg.Txid,
		To:      msg.To,
		From:    msg.From,
		Amount:  msg.Amount,
	}

	// Checks that the element exists
	if !k.HasBchTx(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetBchTxOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetBchTx(ctx, bchTx)

	return &types.MsgUpdateBchTxResponse{}, nil
}

func (k msgServer) DeleteBchTx(goCtx context.Context, msg *types.MsgDeleteBchTx) (*types.MsgDeleteBchTxResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasBchTx(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetBchTxOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveBchTx(ctx, msg.Id)

	return &types.MsgDeleteBchTxResponse{}, nil
}
