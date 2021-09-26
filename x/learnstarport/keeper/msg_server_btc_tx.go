package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

func (k msgServer) CreateBtcTx(goCtx context.Context, msg *types.MsgCreateBtcTx) (*types.MsgCreateBtcTxResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var btcTx = types.BtcTx{
		Creator: msg.Creator,
		Txid:    msg.Txid,
		To:      msg.To,
		From:    msg.From,
		Amount:  msg.Amount,
	}

	id := k.AppendBtcTx(
		ctx,
		btcTx,
	)

	return &types.MsgCreateBtcTxResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateBtcTx(goCtx context.Context, msg *types.MsgUpdateBtcTx) (*types.MsgUpdateBtcTxResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var btcTx = types.BtcTx{
		Creator: msg.Creator,
		Id:      msg.Id,
		Txid:    msg.Txid,
		To:      msg.To,
		From:    msg.From,
		Amount:  msg.Amount,
	}

	// Checks that the element exists
	if !k.HasBtcTx(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetBtcTxOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetBtcTx(ctx, btcTx)

	return &types.MsgUpdateBtcTxResponse{}, nil
}

func (k msgServer) DeleteBtcTx(goCtx context.Context, msg *types.MsgDeleteBtcTx) (*types.MsgDeleteBtcTxResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasBtcTx(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetBtcTxOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveBtcTx(ctx, msg.Id)

	return &types.MsgDeleteBtcTxResponse{}, nil
}
