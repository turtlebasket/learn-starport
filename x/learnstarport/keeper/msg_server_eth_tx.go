package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

func (k msgServer) CreateEthTx(goCtx context.Context, msg *types.MsgCreateEthTx) (*types.MsgCreateEthTxResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var ethTx = types.EthTx{
		Creator: msg.Creator,
		Txid:    msg.Txid,
		To:      msg.To,
		From:    msg.From,
		Amount:  msg.Amount,
	}

	id := k.AppendEthTx(
		ctx,
		ethTx,
	)

	return &types.MsgCreateEthTxResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateEthTx(goCtx context.Context, msg *types.MsgUpdateEthTx) (*types.MsgUpdateEthTxResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var ethTx = types.EthTx{
		Creator: msg.Creator,
		Id:      msg.Id,
		Txid:    msg.Txid,
		To:      msg.To,
		From:    msg.From,
		Amount:  msg.Amount,
	}

	// Checks that the element exists
	if !k.HasEthTx(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetEthTxOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetEthTx(ctx, ethTx)

	return &types.MsgUpdateEthTxResponse{}, nil
}

func (k msgServer) DeleteEthTx(goCtx context.Context, msg *types.MsgDeleteEthTx) (*types.MsgDeleteEthTxResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasEthTx(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetEthTxOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveEthTx(ctx, msg.Id)

	return &types.MsgDeleteEthTxResponse{}, nil
}
