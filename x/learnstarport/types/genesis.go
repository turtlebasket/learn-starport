package types

import (
	"fmt"
	// this line is used by starport scaffolding # ibc/genesistype/import
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # ibc/genesistype/default
		// this line is used by starport scaffolding # genesis/types/default
		BchTxList:  []*BchTx{},
		XmrTxList:  []*XmrTx{},
		DogeTxList: []*DogeTx{},
		EthTxList:  []*EthTx{},
		BtcTxList:  []*BtcTx{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # ibc/genesistype/validate

	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated ID in bchTx
	bchTxIdMap := make(map[uint64]bool)

	for _, elem := range gs.BchTxList {
		if _, ok := bchTxIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for bchTx")
		}
		bchTxIdMap[elem.Id] = true
	}
	// Check for duplicated ID in xmrTx
	xmrTxIdMap := make(map[uint64]bool)

	for _, elem := range gs.XmrTxList {
		if _, ok := xmrTxIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for xmrTx")
		}
		xmrTxIdMap[elem.Id] = true
	}
	// Check for duplicated ID in dogeTx
	dogeTxIdMap := make(map[uint64]bool)

	for _, elem := range gs.DogeTxList {
		if _, ok := dogeTxIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for dogeTx")
		}
		dogeTxIdMap[elem.Id] = true
	}
	// Check for duplicated ID in ethTx
	ethTxIdMap := make(map[uint64]bool)

	for _, elem := range gs.EthTxList {
		if _, ok := ethTxIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for ethTx")
		}
		ethTxIdMap[elem.Id] = true
	}
	// Check for duplicated ID in btcTx
	btcTxIdMap := make(map[uint64]bool)

	for _, elem := range gs.BtcTxList {
		if _, ok := btcTxIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for btcTx")
		}
		btcTxIdMap[elem.Id] = true
	}

	return nil
}
