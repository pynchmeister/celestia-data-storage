# celestia-data-storage
Integrating Celestia with a Long-term Data Storage Provider (IPFS, Filecoin, etc.)

I will be applying this to ARweave as well but figured it may easier to prototype with IPFS/Filecoin first...this does not account for non-permanence though...

Can prototype with Rollmint but should be merged with core ultimately.

## Instructions

(*change these links to the org*)

Will need to clone either [Rollmint](https://github.com/celestiaorg/rollmint) or [celestia core](https://github.com/celestiaorg/celestia-core/tree/v0.34.x-celestia/docs)

Where exactly does this fit in with the rest of the stack? 

[CIDs](https://github.com/pynchmeister/cid) could be part of the block metadata? 

The [IPFS DAG API](https://github.com/ipfs/js-ipfs/blob/master/docs/core-api/DAG.md) may be of use for something beyond the scope of this...

The [IPFS Files API](https://github.com/ipfs/js-ipfs/blob/master/docs/core-api/FILES.md) is designed for videos, et al. which suits our use-case for "lesson" artifacts storage.

[This document](https://github.com/ipfs/js-ipfs/blob/master/docs/BROWSERS.md) is relevant in that it describes the usage of js ipfs in the browser...



### Resources

* https://proto.school/basics
* https://github.com/pynchmeister/smartweave-custom-hashing/tree/dev/smartweave-custom-hasing/warp/custom-hashing
* https://github.com/The-Arbiter/Hash-Storage-Example/blob/main/src/HashStore.sol

* https://developer.mozilla.org/en-US/docs/Web/API/File
* https://github.com/pynchmeister/celestia-bundlr
* https://github.com/pynchmeister/celestia-filecoin
* https://github.com/pynchmeister/web3.storage


### Notes / Open Questions

How do CIDs map to Filecoin's Piece-Inclusion proof?

### TODO

* update google docs with condensed repo(s), updated spec, diagrams, etc.
* condense repos here
* organize by protocol, concept, user story, etc. 


