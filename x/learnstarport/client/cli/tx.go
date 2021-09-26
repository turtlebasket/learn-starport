package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	// this line is used by starport scaffolding # 1

	cmd.AddCommand(CmdCreateBchTx())
	cmd.AddCommand(CmdUpdateBchTx())
	cmd.AddCommand(CmdDeleteBchTx())

	cmd.AddCommand(CmdCreateXmrTx())
	cmd.AddCommand(CmdUpdateXmrTx())
	cmd.AddCommand(CmdDeleteXmrTx())

	cmd.AddCommand(CmdCreateDogeTx())
	cmd.AddCommand(CmdUpdateDogeTx())
	cmd.AddCommand(CmdDeleteDogeTx())

	cmd.AddCommand(CmdCreateEthTx())
	cmd.AddCommand(CmdUpdateEthTx())
	cmd.AddCommand(CmdDeleteEthTx())

	cmd.AddCommand(CmdCreateBtcTx())
	cmd.AddCommand(CmdUpdateBtcTx())
	cmd.AddCommand(CmdDeleteBtcTx())

	return cmd
}
