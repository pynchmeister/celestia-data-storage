## Glossary 

* [Piece](https://spec.filecoin.io/systems/filecoin_files/piece/) - The Filecoin Piece is the main unit of negotiation for data that users store on the Filecoin network. The Filecoin Piece is not a unit of storage, it is not of a specific size, but is upper-bounded by the size of the Sector. A Filecoin Piece can be of any size, but if a Piece is larger than the size of a Sector that the miner supports it has to be split into more Pieces so that each Piece fits into a Sector.

A ```Piece``` is an object that represents a whole or part of a ```File```, and is used by ```Storage Clients``` and ```Storage Miners in Deals```. ```Storage Clients``` hire ```Storage Miners``` to store ```Pieces```.

The Piece data structure is designed for proving storage of arbitrary IPLD graphs and client data. This diagram shows the detailed composition of a Piece and its proving tree, including both full and bandwidth-optimized Piece data structures.

<img width="1112" alt="Screen Shot 2022-11-01 at 6 43 47 PM" src="https://user-images.githubusercontent.com/33232379/199355996-1e8828da-76cc-4325-a6f5-7f66c1846fc6.png">

* [CAR - Content Addressable aRchive](https://github.com/pynchmeister/js-car) - lorem ipsum...
