package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateBchTx{}

func NewMsgCreateBchTx(creator string, txid string, to string, from string, amount string) *MsgCreateBchTx {
	return &MsgCreateBchTx{
		Creator: creator,
		Txid:    txid,
		To:      to,
		From:    from,
		Amount:  amount,
	}
}

func (msg *MsgCreateBchTx) Route() string {
	return RouterKey
}

func (msg *MsgCreateBchTx) Type() string {
	return "CreateBchTx"
}

func (msg *MsgCreateBchTx) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateBchTx) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateBchTx) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateBchTx{}

func NewMsgUpdateBchTx(creator string, id uint64, txid string, to string, from string, amount string) *MsgUpdateBchTx {
	return &MsgUpdateBchTx{
		Id:      id,
		Creator: creator,
		Txid:    txid,
		To:      to,
		From:    from,
		Amount:  amount,
	}
}

func (msg *MsgUpdateBchTx) Route() string {
	return RouterKey
}

func (msg *MsgUpdateBchTx) Type() string {
	return "UpdateBchTx"
}

func (msg *MsgUpdateBchTx) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateBchTx) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateBchTx) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteBchTx{}

func NewMsgDeleteBchTx(creator string, id uint64) *MsgDeleteBchTx {
	return &MsgDeleteBchTx{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteBchTx) Route() string {
	return RouterKey
}

func (msg *MsgDeleteBchTx) Type() string {
	return "DeleteBchTx"
}

func (msg *MsgDeleteBchTx) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteBchTx) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteBchTx) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
