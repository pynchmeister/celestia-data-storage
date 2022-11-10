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
* https://filecoin.io/blog/offline-data-transfer-for-large-scale-data/
* https://filecoin.io/blog/posts/what-sets-us-apart-filecoin-s-proof-system/
* https://filecoin.io/blog/posts/filecoin-features-verifiable-storage/
* https://github.com/celestiaorg/celestia-core/blob/v0.34.x-celestia/docs/celestia-architecture/adr-001-block-propagation.md
* https://github.com/celestiaorg/celestia-core/blob/v0.34.x-celestia/docs/celestia-architecture/adr-002-ipld-da-sampling.md
* 


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

* One type of graph produced is a DRG (Depth-Robust-Graph) and they get connected with these expander graphs, and there’s a whole complicated lattice structure. At the end of which we now have encoded the original data into what we call the replica, which is committed as a value. You can take the same source data and encode it multiple times if you wanted to, and you’d end up with multiple different replicas that are uniquely encoded.

* Now that we’ve done that, in order to prove that we’ve done this encoding correctly, we can either do the entire encoding inside of a SNARK, which would be extremely expensive, or we could just sample a few of the challenges to prove that we have stored this. Say we sample a thousand random challenges over this whole proof, and we do that computation inside of the SNARK. We take the source encoded data, then decode it, and then show that that goes all the way back to root that we committed to. It’s that proof that we want to make succinct. Because otherwise it’d be a 32 byte leaf and then the whole Merkle chain all the way back up to the root would be a pretty large amount of data, then times that by a thousand. 100s of KB or MB to produce one proof. With a SNARK we can compress it down, I think it’s like to 200B or something like that.

*  Because a lot of these constructions, these slow encodings, you want slow enough to be useful for the proof but fast enough so that it’s not very expensive. 

* Filecoin’s offline data transfer feature allows users with very large datasets to complete the data transfer step offline (e.g. by shipping hard drives from the client to the storage miner), and have the deal work as intended on-chain. It is implemented via a flag that tells the client not to transfer the data over the network. Instead, the client passes a piece CID (a unique identifier describing the data), which a miner must then match for the deal to go through. This gives the client node flexibility in how it can set up the deal – for example, passing miners a specific location on a hard drive for the data they can use to generate the piece CID.

* With Filecoin, miners’ storage is publicly audited. In other words, our storage proofs give every user of the Filecoin network assurance that all miners are storing data exactly as promised. Storage verification is the glue that holds the Filecoin marketplace together; it ensures the integrity of all data stored on the network.

* A proof system is a cryptographic protocol that participants – generally miners – use to validate the storage services. Filecoin’s proof system solves a previously intractable problem for decentralized storage: How can miners prove that they are really storing the data they say they are through time and that they are dedicating unique physical space? To understand this, we need to take a look at how Filecoin implements decentralized storage and what makes its proof system unique.

* But while other blockchains rely on consensus algorithms that require miners to perform wasteful work (e.g. Proof-of-Work blockchains), Filecoin’s consensus mechanisms enlist miners in the useful work of providing and verifying the integrity of the stored data (various proofs of storage, i.e. Proof-of-Replication and Proof-of-Spacetime).

* That means the Filecoin blockchain itself verifies the acts of storage performed by miners. This is how Filecoin builds trust into the protocol layer of its decentralized network. At its core, Filecoin’s consensus algorithm is powered by two proof mechanisms that together make data storage publicly verifiable on the Filecoin blockchain: Proof-of-Replication and Proof-of-Spacetime.

* To verify storage on Filecoin’s decentralized network, you need to prove two things. First, you need to prove that the right set of data is stored in a given storage space. Second, you need to prove that the same set of data has been stored continuously over a given period of time.

* Filecoin’s proving algorithms perform these verification tasks. Proof-of-Replication proves that a given miner is storing a physically unique copy of a client’s original data, while Proof-of-Spacetime proves that the client’s data is stored continuously over time. Here’s how both proofs work.

* Proof-of-Replication (PoRep) begins with a process called “sealing.” A miner dedicates a portion of available storage space, called a “sector,” to store a client’s data. Once this sector is filled, it is sealed. Sealing is a set of operations that gradually transforms the sector into a unique replica of the original data. This replica is associated with the Filecoin miner’s public key. To perform the final PoRep, the miner then submits a cryptographic hash of the replica (its CommR) to the public Filecoin blockchain.

* Through PoRep, miners provide public proof that they are storing a unique encoding of a client’s data at the time the proof was performed. Only a miner possessing the original data in its entirety could submit the correct CommR (the on-chain commitment to the replica) to the Filecoin blockchain. But one PoRep alone doesn’t verify that storage is continuous over time.

* That’s where Proofs-of-Spacetime (PoSt) comes in. With PoSt, randomly selected miners are asked to provide PoReps for randomly selected storage sectors that they maintain. This is accomplished via a procedure in which miners are issued a cryptographic challenge that can only be correctly answered by consulting a sealed sector directly. The miner must respond to this challenge within strict time limits. Every miner must prove all of their storage daily, and miners are also randomly selected to prove storage in order to win blocks. And the computational difficulty of sealing ensures that miners must maintain ready access to and integrity of the sealed sector.

* Taken together, PoRep and PoSt make up Filecoin’s unique proof system, a combination of Proof of Storage and Proof of Space.

* In addition to its proof system, the Filecoin network also relies on game-theoretic incentives to discourage malicious or negligent activity. All miners that agree to store data on the Filecoin network must provide collateral in the form of Filecoin at the time of agreement. Any storage miner that fails a PoSt check is penalized, and portions of this collateral are lost whenever a penalty is applied. After too many penalties, all the collateral is lost, and a miner is prevented from offering storage again to clients. You can read more about some of these cryptoeconomic mechanisms [here](https://filecoin.io/blog/filecoin-cryptoeconomic-constructions/).
