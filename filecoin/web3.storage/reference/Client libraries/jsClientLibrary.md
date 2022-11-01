## Store files 

Store files using the ```put()``` method.

### Usage 

```<clientObject>.put(file[], { options })```

### Examples

https://github.com/pynchmeister/celestia-data-storage/tree/main/filecoin/web3.storage/reference/Client%20libraries


#### Return value

The method returns a string containing the CID of the uploaded CAR.

#### Parameters

Method parameters are supplied in positional order.

<img width="1031" alt="Screen Shot 2022-11-01 at 5 09 44 PM" src="https://user-images.githubusercontent.com/33232379/199342087-d0a04072-da80-4240-9fca-56034d50fb6f.png">

[This](https://developer.mozilla.org/en-US/docs/Web/API/File) is the Files link from above^^^

An ```{options}``` object has the following properties that can be used as parameters when calling ```put()```:



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


