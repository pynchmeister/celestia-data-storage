# celestia-data-storage
Integrating Celestia with a Long-term Data Storage Provider (IPFS, Filecoin, etc.)

I will be applying this to ARweave as well but figured it may easier to prototype with IPFS/Filecoin first...this does not account for non-permanence though...

Can prototype with Rollmint but should be merged with core ultimately.

## Instructions

(*change these links to the org*)

Will need to clone either [Rollmint](https://github.com/celestiaorg/rollmint) or [celestia core](https://github.com/celestiaorg/celestia-core/tree/v0.34.x-celestia/docs)

Where exactly does this fit in with the rest of the stack? 

[CIDs](https://github.com/pynchmeister/cid) could be part of the block metadata? 

Use [this](https://github.com/DED-EDU/ephemeral-cluster) to test MVP smart contract suite with Ethereum (EVM) as execution layer (Solidity smart contracts)...

Everything below this line of this section is tangential but a bit out of scope...

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
* https://github.com/pynchmeister/celestia-knowledge-transfer
* https://filecoin.io/blog/posts/what-sets-us-apart-filecoin-s-proof-system/



### Open Questions

* How do CIDs map to Filecoin's Piece-Inclusion proof?

* How does the CID relate to the smart contract (solidity atm) infrastructure ?

* Q: Do you know how to prove that some data was posted?
  A: “Filecoin pushes the frontier of blockchains in a number of different ways. Proof of Replication is ultimately a proving system to verify that a storage miner actually has the content they are storing and are not cheating. Within these systems it’s a very hard problem: how do you prove to the network that you’re indeed storing something and not just lying about that?

### Notes

* Filecoin’s Proof of Replication is both a Proof of Storage and Proof of Space, and these are subtly different [explained later]. In Filecoin units of data are stored in what are called sectors. You seal specific data in a sector on disk in a slow encoding process and commit a proof of that to the blockchain. Sealing is an intense amount of work spent on that particular proof. In order to fake a proof like that, you would have to do that particular work using the original data that a client stores on Filecoin, unlike numeric hashes in Bitcoin’s Proof of Work.

* The interesting part is combining a Proof of Space with a normal Proof of data possession, where I would like X to be useful, not just a random string. The hard part of this was to create a Proof of Space that was also being used to store useful data. So that’s what Proofs of Replication are as foundational primitives in the Filecoin network’s cryptographic protocol.

* We also use SNARKs to prove some of the actual Proofs of Replication which produce large outputs. We’d like to do a lot of challenges on these Proofs of Replication but aggregate them so they can go on chain in a very small, compact way. There are different ways to do this but SNARKs are a great way to do this, they give you a way to prove that you’ve done the proofs correctly, then you can just put the SNARK proof on the chain. Then parties can now verify a few of the inputs themselves and the actual SNARK proof, and know that the proof has been generated correctly. (ask evan about this^^^)

* In Proof of Replication we take the source data, a large amount like 32GB, and apply a very slow encoding that produces these lattice-like graphs in layers where a node might be a 32 byte segment. There’s a sequential process going on producing a graph and for each node hashing sequentially. It has to be done one after the other, because of the hash function.

* 

### TODO

* update google docs with condensed repo(s), updated spec, diagrams, etc.
* condense repos here
* organize by protocol, concept, user story, etc. 


