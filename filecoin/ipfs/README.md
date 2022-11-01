## Links

* https://proto.school/regular-files-api/08
* https://github.com/ipfs/js-ipfs/blob/master/docs/core-api/FILES.md
* https://youtu.be/Z5zNPwMDYGg
* https://youtu.be/fLUq0RkiTBA
* 

### Inspect Results

Of https://github.com/pynchmeister/celestia-data-storage/blob/main/filecoin/ipfs/example.js

Below is the result of calling the get method on the top-level directory. (Normally the results would be much more dense because of the buffered file contents included, but we intentionally created tiny text files to limit this effect.)

Notice that because we created these files using { wrapWithDirectory: true }, each item's path is defined here by the top-level directory's CID plus the item's relative path, and each file or subdirectory has a human-readable name. Only the top-level directory itself has a path value that matches its cid and name, all of which are identical CIDs.

```
[
  {
    "cid": "CID('QmcmnUvVV31txDfAddgAaNcNKbrtC2rC9FvkJphNWyM7gy')",
    "path": "QmcmnUvVV31txDfAddgAaNcNKbrtC2rC9FvkJphNWyM7gy",
    "name": "QmcmnUvVV31txDfAddgAaNcNKbrtC2rC9FvkJphNWyM7gy",
    "depth": 1,
    "size": 0,
    "type": "dir",
    "mode": 493
  },
  {
    "cid": "CID('QmPT14mWCteuybfrfvqas2L2oin1Y2NCbwzTh9cc33GM1r')",
    "path": "QmcmnUvVV31txDfAddgAaNcNKbrtC2rC9FvkJphNWyM7gy/fun",
    "name": "fun",
    "depth": 2,
    "size": 0,
    "type": "dir",
    "mode": 493
  },
  {
    "cid": "CID('QmWCscor6qWPdx53zEQmZvQvuWQYxx1ARRCXwYVE4s9wzJ')",
    "path": "QmcmnUvVV31txDfAddgAaNcNKbrtC2rC9FvkJphNWyM7gy/fun/success.txt",
    "name": "success.txt",
    "depth": 3,
    "size": 11,
    "type": "file",
    "content": {},
    "mode": 420
  },
  {
    "cid": "CID('QmQDHitBegfht9eKo7ZJ7S3haq1QVAysjUZg8tmYdPJmSx')",
    "path": "QmcmnUvVV31txDfAddgAaNcNKbrtC2rC9FvkJphNWyM7gy/shrug.txt",
    "name": "shrug.txt",
    "depth": 2,
    "size": 13,
    "type": "file",
    "content": {},
    "mode": 420
  },
  {
    "cid": "CID('Qmbfrc4cF2X4KXbHuqD593SLnR2xj6hULYTnrj65wKWaKm')",
    "path": "QmcmnUvVV31txDfAddgAaNcNKbrtC2rC9FvkJphNWyM7gy/smile.txt",
    "name": "smile.txt",
    "depth": 2,
    "size": 2,
    "type": "file",
    "content": {},
    "mode": 420
  }
]
```
