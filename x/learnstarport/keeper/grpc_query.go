package keeper

import (
	"github.com/turtlebasket/learn-starport/x/learnstarport/types"
)

var _ types.QueryServer = Keeper{}
