package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateEthTx{}

func NewMsgCreateEthTx(creator string, txid string, to string, from string, amount string) *MsgCreateEthTx {
	return &MsgCreateEthTx{
		Creator: creator,
		Txid:    txid,
		To:      to,
		From:    from,
		Amount:  amount,
	}
}

func (msg *MsgCreateEthTx) Route() string {
	return RouterKey
}

func (msg *MsgCreateEthTx) Type() string {
	return "CreateEthTx"
}

func (msg *MsgCreateEthTx) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateEthTx) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateEthTx) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateEthTx{}

func NewMsgUpdateEthTx(creator string, id uint64, txid string, to string, from string, amount string) *MsgUpdateEthTx {
	return &MsgUpdateEthTx{
		Id:      id,
		Creator: creator,
		Txid:    txid,
		To:      to,
		From:    from,
		Amount:  amount,
	}
}

func (msg *MsgUpdateEthTx) Route() string {
	return RouterKey
}

func (msg *MsgUpdateEthTx) Type() string {
	return "UpdateEthTx"
}

func (msg *MsgUpdateEthTx) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateEthTx) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateEthTx) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteEthTx{}

func NewMsgDeleteEthTx(creator string, id uint64) *MsgDeleteEthTx {
	return &MsgDeleteEthTx{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteEthTx) Route() string {
	return RouterKey
}

func (msg *MsgDeleteEthTx) Type() string {
	return "DeleteEthTx"
}

func (msg *MsgDeleteEthTx) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteEthTx) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteEthTx) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
