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

func CmdCreateExtTransaction() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-ext-transaction [chain] [to] [from] [amount] [txid]",
		Short: "Create a new ExtTransaction",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsChain, err := cast.ToStringE(args[0])
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
			argsTxid, err := cast.ToStringE(args[4])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateExtTransaction(clientCtx.GetFromAddress().String(), argsChain, argsTo, argsFrom, argsAmount, argsTxid)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateExtTransaction() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-ext-transaction [id] [chain] [to] [from] [amount] [txid]",
		Short: "Update a ExtTransaction",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsChain, err := cast.ToStringE(args[1])
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

			argsTxid, err := cast.ToStringE(args[5])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateExtTransaction(clientCtx.GetFromAddress().String(), id, argsChain, argsTo, argsFrom, argsAmount, argsTxid)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteExtTransaction() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-ext-transaction [id]",
		Short: "Delete a ExtTransaction by id",
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

			msg := types.NewMsgDeleteExtTransaction(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
