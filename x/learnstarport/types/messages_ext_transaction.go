package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateExtTransaction{}

func NewMsgCreateExtTransaction(creator string, chain string, to string, from string, amount string, txid string) *MsgCreateExtTransaction {
	return &MsgCreateExtTransaction{
		Creator: creator,
		Chain:   chain,
		To:      to,
		From:    from,
		Amount:  amount,
		Txid:    txid,
	}
}

func (msg *MsgCreateExtTransaction) Route() string {
	return RouterKey
}

func (msg *MsgCreateExtTransaction) Type() string {
	return "CreateExtTransaction"
}

func (msg *MsgCreateExtTransaction) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateExtTransaction) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateExtTransaction) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateExtTransaction{}

func NewMsgUpdateExtTransaction(creator string, id uint64, chain string, to string, from string, amount string, txid string) *MsgUpdateExtTransaction {
	return &MsgUpdateExtTransaction{
		Id:      id,
		Creator: creator,
		Chain:   chain,
		To:      to,
		From:    from,
		Amount:  amount,
		Txid:    txid,
	}
}

func (msg *MsgUpdateExtTransaction) Route() string {
	return RouterKey
}

func (msg *MsgUpdateExtTransaction) Type() string {
	return "UpdateExtTransaction"
}

func (msg *MsgUpdateExtTransaction) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateExtTransaction) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateExtTransaction) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteExtTransaction{}

func NewMsgDeleteExtTransaction(creator string, id uint64) *MsgDeleteExtTransaction {
	return &MsgDeleteExtTransaction{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteExtTransaction) Route() string {
	return RouterKey
}

func (msg *MsgDeleteExtTransaction) Type() string {
	return "DeleteExtTransaction"
}

func (msg *MsgDeleteExtTransaction) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteExtTransaction) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteExtTransaction) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
