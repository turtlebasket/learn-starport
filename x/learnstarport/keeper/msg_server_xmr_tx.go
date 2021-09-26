package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

func (k msgServer) CreateXmrTx(goCtx context.Context, msg *types.MsgCreateXmrTx) (*types.MsgCreateXmrTxResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var xmrTx = types.XmrTx{
		Creator: msg.Creator,
		Txid:    msg.Txid,
		To:      msg.To,
		From:    msg.From,
		Amount:  msg.Amount,
	}

	id := k.AppendXmrTx(
		ctx,
		xmrTx,
	)

	return &types.MsgCreateXmrTxResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateXmrTx(goCtx context.Context, msg *types.MsgUpdateXmrTx) (*types.MsgUpdateXmrTxResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var xmrTx = types.XmrTx{
		Creator: msg.Creator,
		Id:      msg.Id,
		Txid:    msg.Txid,
		To:      msg.To,
		From:    msg.From,
		Amount:  msg.Amount,
	}

	// Checks that the element exists
	if !k.HasXmrTx(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetXmrTxOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetXmrTx(ctx, xmrTx)

	return &types.MsgUpdateXmrTxResponse{}, nil
}

func (k msgServer) DeleteXmrTx(goCtx context.Context, msg *types.MsgDeleteXmrTx) (*types.MsgDeleteXmrTxResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasXmrTx(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetXmrTxOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveXmrTx(ctx, msg.Id)

	return &types.MsgDeleteXmrTxResponse{}, nil
}
