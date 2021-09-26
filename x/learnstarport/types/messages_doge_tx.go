package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateDogeTx{}

func NewMsgCreateDogeTx(creator string, txid string, to string, from string, amount string) *MsgCreateDogeTx {
	return &MsgCreateDogeTx{
		Creator: creator,
		Txid:    txid,
		To:      to,
		From:    from,
		Amount:  amount,
	}
}

func (msg *MsgCreateDogeTx) Route() string {
	return RouterKey
}

func (msg *MsgCreateDogeTx) Type() string {
	return "CreateDogeTx"
}

func (msg *MsgCreateDogeTx) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDogeTx) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDogeTx) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateDogeTx{}

func NewMsgUpdateDogeTx(creator string, id uint64, txid string, to string, from string, amount string) *MsgUpdateDogeTx {
	return &MsgUpdateDogeTx{
		Id:      id,
		Creator: creator,
		Txid:    txid,
		To:      to,
		From:    from,
		Amount:  amount,
	}
}

func (msg *MsgUpdateDogeTx) Route() string {
	return RouterKey
}

func (msg *MsgUpdateDogeTx) Type() string {
	return "UpdateDogeTx"
}

func (msg *MsgUpdateDogeTx) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateDogeTx) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateDogeTx) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteDogeTx{}

func NewMsgDeleteDogeTx(creator string, id uint64) *MsgDeleteDogeTx {
	return &MsgDeleteDogeTx{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteDogeTx) Route() string {
	return RouterKey
}

func (msg *MsgDeleteDogeTx) Type() string {
	return "DeleteDogeTx"
}

func (msg *MsgDeleteDogeTx) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteDogeTx) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteDogeTx) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
