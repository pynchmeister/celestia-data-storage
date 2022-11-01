## Store files 

Store files using the ```put()``` method.

### Usage 

```<clientObject>.put(file[], { options })```

### Examples

https://github.com/pynchmeister/celestia-data-storage/tree/main/filecoin/web3.storage/reference/Client%20libraries


#### Return value

The method returns a string containing the CID of the uploaded CAR.


## Retrieve Files

Retrieve files using the ```get()``` method. You will need the CID you obtained at upload time that references the CAR for your uploaded files.

### Usage 

```<clientObject>.get(<CID>)```

### Example

```
const res = await client.get(rootCid); // Web3Response
const files = await res.files(); // Web3File[]
for (const file of files) {
  console.log(`${file.cid} ${file.name} ${file.size}`);
}
```


