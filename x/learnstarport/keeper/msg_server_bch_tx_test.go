package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

func TestBchTxMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateBchTx(ctx, &types.MsgCreateBchTx{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestBchTxMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateBchTx
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateBchTx{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateBchTx{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateBchTx{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateBchTx(ctx, &types.MsgCreateBchTx{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateBchTx(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestBchTxMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteBchTx
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteBchTx{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteBchTx{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteBchTx{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateBchTx(ctx, &types.MsgCreateBchTx{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteBchTx(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
