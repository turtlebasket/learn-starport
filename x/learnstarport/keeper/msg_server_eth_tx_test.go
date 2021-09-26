package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

func TestEthTxMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateEthTx(ctx, &types.MsgCreateEthTx{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestEthTxMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateEthTx
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateEthTx{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateEthTx{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateEthTx{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateEthTx(ctx, &types.MsgCreateEthTx{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateEthTx(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestEthTxMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteEthTx
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteEthTx{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteEthTx{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteEthTx{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateEthTx(ctx, &types.MsgCreateEthTx{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteEthTx(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
