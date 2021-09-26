package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateXmrTx{}

func NewMsgCreateXmrTx(creator string, txid string, to string, from string, amount string) *MsgCreateXmrTx {
	return &MsgCreateXmrTx{
		Creator: creator,
		Txid:    txid,
		To:      to,
		From:    from,
		Amount:  amount,
	}
}

func (msg *MsgCreateXmrTx) Route() string {
	return RouterKey
}

func (msg *MsgCreateXmrTx) Type() string {
	return "CreateXmrTx"
}

func (msg *MsgCreateXmrTx) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateXmrTx) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateXmrTx) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateXmrTx{}

func NewMsgUpdateXmrTx(creator string, id uint64, txid string, to string, from string, amount string) *MsgUpdateXmrTx {
	return &MsgUpdateXmrTx{
		Id:      id,
		Creator: creator,
		Txid:    txid,
		To:      to,
		From:    from,
		Amount:  amount,
	}
}

func (msg *MsgUpdateXmrTx) Route() string {
	return RouterKey
}

func (msg *MsgUpdateXmrTx) Type() string {
	return "UpdateXmrTx"
}

func (msg *MsgUpdateXmrTx) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateXmrTx) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateXmrTx) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteXmrTx{}

func NewMsgDeleteXmrTx(creator string, id uint64) *MsgDeleteXmrTx {
	return &MsgDeleteXmrTx{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteXmrTx) Route() string {
	return RouterKey
}

func (msg *MsgDeleteXmrTx) Type() string {
	return "DeleteXmrTx"
}

func (msg *MsgDeleteXmrTx) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteXmrTx) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteXmrTx) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
