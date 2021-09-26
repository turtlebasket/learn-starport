package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

func TestBtcTxMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateBtcTx(ctx, &types.MsgCreateBtcTx{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestBtcTxMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateBtcTx
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateBtcTx{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateBtcTx{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateBtcTx{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateBtcTx(ctx, &types.MsgCreateBtcTx{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateBtcTx(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestBtcTxMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteBtcTx
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteBtcTx{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteBtcTx{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteBtcTx{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateBtcTx(ctx, &types.MsgCreateBtcTx{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteBtcTx(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
