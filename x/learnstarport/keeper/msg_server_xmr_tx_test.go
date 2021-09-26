package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

func TestXmrTxMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateXmrTx(ctx, &types.MsgCreateXmrTx{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestXmrTxMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateXmrTx
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateXmrTx{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateXmrTx{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateXmrTx{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateXmrTx(ctx, &types.MsgCreateXmrTx{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateXmrTx(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestXmrTxMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteXmrTx
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteXmrTx{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteXmrTx{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteXmrTx{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateXmrTx(ctx, &types.MsgCreateXmrTx{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteXmrTx(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
