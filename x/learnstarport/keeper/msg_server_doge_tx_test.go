package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

func TestDogeTxMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateDogeTx(ctx, &types.MsgCreateDogeTx{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestDogeTxMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateDogeTx
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateDogeTx{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateDogeTx{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateDogeTx{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateDogeTx(ctx, &types.MsgCreateDogeTx{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateDogeTx(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestDogeTxMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteDogeTx
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteDogeTx{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteDogeTx{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteDogeTx{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateDogeTx(ctx, &types.MsgCreateDogeTx{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteDogeTx(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
