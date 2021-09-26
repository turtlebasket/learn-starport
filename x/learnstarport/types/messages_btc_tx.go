package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateBtcTx{}

func NewMsgCreateBtcTx(creator string, txid string, to string, from string, amount string) *MsgCreateBtcTx {
	return &MsgCreateBtcTx{
		Creator: creator,
		Txid:    txid,
		To:      to,
		From:    from,
		Amount:  amount,
	}
}

func (msg *MsgCreateBtcTx) Route() string {
	return RouterKey
}

func (msg *MsgCreateBtcTx) Type() string {
	return "CreateBtcTx"
}

func (msg *MsgCreateBtcTx) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateBtcTx) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateBtcTx) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateBtcTx{}

func NewMsgUpdateBtcTx(creator string, id uint64, txid string, to string, from string, amount string) *MsgUpdateBtcTx {
	return &MsgUpdateBtcTx{
		Id:      id,
		Creator: creator,
		Txid:    txid,
		To:      to,
		From:    from,
		Amount:  amount,
	}
}

func (msg *MsgUpdateBtcTx) Route() string {
	return RouterKey
}

func (msg *MsgUpdateBtcTx) Type() string {
	return "UpdateBtcTx"
}

func (msg *MsgUpdateBtcTx) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateBtcTx) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateBtcTx) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteBtcTx{}

func NewMsgDeleteBtcTx(creator string, id uint64) *MsgDeleteBtcTx {
	return &MsgDeleteBtcTx{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteBtcTx) Route() string {
	return RouterKey
}

func (msg *MsgDeleteBtcTx) Type() string {
	return "DeleteBtcTx"
}

func (msg *MsgDeleteBtcTx) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteBtcTx) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteBtcTx) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
