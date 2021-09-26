package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group learnstarport queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	// this line is used by starport scaffolding # 1

	cmd.AddCommand(CmdListBchTx())
	cmd.AddCommand(CmdShowBchTx())

	cmd.AddCommand(CmdListXmrTx())
	cmd.AddCommand(CmdShowXmrTx())

	cmd.AddCommand(CmdListDogeTx())
	cmd.AddCommand(CmdShowDogeTx())

	cmd.AddCommand(CmdListEthTx())
	cmd.AddCommand(CmdShowEthTx())

	cmd.AddCommand(CmdListBtcTx())
	cmd.AddCommand(CmdShowBtcTx())

	return cmd
}
