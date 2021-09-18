package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

func TestExtTransactionMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateExtTransaction(ctx, &types.MsgCreateExtTransaction{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestExtTransactionMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateExtTransaction
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateExtTransaction{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateExtTransaction{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateExtTransaction{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateExtTransaction(ctx, &types.MsgCreateExtTransaction{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateExtTransaction(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestExtTransactionMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteExtTransaction
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteExtTransaction{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteExtTransaction{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteExtTransaction{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateExtTransaction(ctx, &types.MsgCreateExtTransaction{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteExtTransaction(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
