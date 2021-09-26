package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

func CmdCreateDogeTx() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-doge-tx [txid] [to] [from] [amount]",
		Short: "Create a new DogeTx",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsTxid, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsTo, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsFrom, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}
			argsAmount, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateDogeTx(clientCtx.GetFromAddress().String(), argsTxid, argsTo, argsFrom, argsAmount)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateDogeTx() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-doge-tx [id] [txid] [to] [from] [amount]",
		Short: "Update a DogeTx",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsTxid, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			argsTo, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}

			argsFrom, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}

			argsAmount, err := cast.ToStringE(args[4])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateDogeTx(clientCtx.GetFromAddress().String(), id, argsTxid, argsTo, argsFrom, argsAmount)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteDogeTx() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-doge-tx [id]",
		Short: "Delete a DogeTx by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteDogeTx(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
