# celestia-data-storage
Integrating Celestia with a Long-term Data Storage Provider (IPFS, Filecoin, etc.)

## Instructions

Will need to clone either [Rollmint](https://github.com/celestiaorg/rollmint) or [celestia core](https://github.com/celestiaorg/celestia-core/tree/v0.34.x-celestia/docs)

Where exactly does this fit in with the rest of the stack? 

[CIDs](https://github.com/pynchmeister/cid) could be part of the block metadata? 

### Resources

* https://proto.school/basics

### Notes 

Can most likely add the CID here: https://github.com/celestiaorg/rollmint/blob/cb5c7440a8e879778e71097e254c3dd692c39d14/types/block.go#L58

or here: https://github.com/celestiaorg/rollmint/blob/main/docs/lazy-adr/adr-004-core-types.md within the header struct...

We have the CID on the Celestia side, do we need a smart contract call? How about other backend code?
