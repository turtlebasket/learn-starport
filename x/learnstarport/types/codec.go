package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreateBchTx{}, "learnstarport/CreateBchTx", nil)
	cdc.RegisterConcrete(&MsgUpdateBchTx{}, "learnstarport/UpdateBchTx", nil)
	cdc.RegisterConcrete(&MsgDeleteBchTx{}, "learnstarport/DeleteBchTx", nil)

	cdc.RegisterConcrete(&MsgCreateXmrTx{}, "learnstarport/CreateXmrTx", nil)
	cdc.RegisterConcrete(&MsgUpdateXmrTx{}, "learnstarport/UpdateXmrTx", nil)
	cdc.RegisterConcrete(&MsgDeleteXmrTx{}, "learnstarport/DeleteXmrTx", nil)

	cdc.RegisterConcrete(&MsgCreateDogeTx{}, "learnstarport/CreateDogeTx", nil)
	cdc.RegisterConcrete(&MsgUpdateDogeTx{}, "learnstarport/UpdateDogeTx", nil)
	cdc.RegisterConcrete(&MsgDeleteDogeTx{}, "learnstarport/DeleteDogeTx", nil)

	cdc.RegisterConcrete(&MsgCreateEthTx{}, "learnstarport/CreateEthTx", nil)
	cdc.RegisterConcrete(&MsgUpdateEthTx{}, "learnstarport/UpdateEthTx", nil)
	cdc.RegisterConcrete(&MsgDeleteEthTx{}, "learnstarport/DeleteEthTx", nil)

	cdc.RegisterConcrete(&MsgCreateBtcTx{}, "learnstarport/CreateBtcTx", nil)
	cdc.RegisterConcrete(&MsgUpdateBtcTx{}, "learnstarport/UpdateBtcTx", nil)
	cdc.RegisterConcrete(&MsgDeleteBtcTx{}, "learnstarport/DeleteBtcTx", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateBchTx{},
		&MsgUpdateBchTx{},
		&MsgDeleteBchTx{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateXmrTx{},
		&MsgUpdateXmrTx{},
		&MsgDeleteXmrTx{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateDogeTx{},
		&MsgUpdateDogeTx{},
		&MsgDeleteDogeTx{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateEthTx{},
		&MsgUpdateEthTx{},
		&MsgDeleteEthTx{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateBtcTx{},
		&MsgUpdateBtcTx{},
		&MsgDeleteBtcTx{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
