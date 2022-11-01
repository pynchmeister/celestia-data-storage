# Link(s)

* https://web3.storage/docs/
* https://web3.storage/account/
* https://web3.storage/docs/reference/js-client-library/#retrieve-files

## Store files 

Store files using the ```put()``` method.

### Usage 

```<clientObject>.put(file[], { options })```

### Examples

* https://github.com/pynchmeister/celestia-data-storage/tree/main/filecoin/web3.storage/reference/Client%20libraries


#### Return value

The method returns a string containing the CID of the uploaded CAR.

#### Parameters

Method parameters are supplied in positional order.

<img width="1031" alt="Screen Shot 2022-11-01 at 5 09 44 PM" src="https://user-images.githubusercontent.com/33232379/199342087-d0a04072-da80-4240-9fca-56034d50fb6f.png">

[This](https://developer.mozilla.org/en-US/docs/Web/API/File) is the Files link from above^^^

An ```{options}``` object has the following properties that can be used as parameters when calling ```put()```:

<details>
<summary>name</summary>
<br>
String. The name parameter lets you attach an arbitrary name to the uploaded content archive, which you can use to identify and organize your uploads. The name is not stored alongside the data on IPFS, but it is viewable within the file listing on the web3.storage site.

<br>

```const cid = await client.put(files, { name: 'cat pics' });```
</details>

<details>
<summary>maxRetries</summary>
<br>
Number. You can specify how many times ```put``` should attempt to retry in case of failure by passing in a maxRetries option:
</details>

<details>
<summary>wrapWithDirectory</summary>
<br>
Boolean. The wrapWithDirectory parameter controls whether the files will be wrapped in an IPFS directory when added to web3.storage. With the default value of true, all files provided to the put method will be wrapped in an IPFS directory listing.

For example, when adding a file called hello.txt using the default behavior, the root CID returned by the put method identifies a directory containing a file named hello.txt, rather than the hello.txt file itself, which is accessible at 

<img width="181" alt="Screen Shot 2022-11-01 at 5 40 52 PM" src="https://user-images.githubusercontent.com/33232379/199347047-270d9be3-b693-4710-a54c-866912a55bbb.png">

If you are adding a directory full of files using the put method (currently out of scope of MVP*), you may want to override the default behavior to avoid an extra level of nesting in your IPFS path. For example, if you have a files directory like this:

<img width="545" alt="Screen Shot 2022-11-01 at 5 41 49 PM" src="https://user-images.githubusercontent.com/33232379/199347174-35335d55-f6b8-4fbe-bd66-d897b8cd60f3.png">

Using the default behavior, the put method would return a CID for a directory containing a files subdirectory, like this:

<img width="686" alt="Screen Shot 2022-11-01 at 5 42 50 PM" src="https://user-images.githubusercontent.com/33232379/199347295-5bae42c6-5edb-4799-b0c8-b7dc0d38bb5c.png">

However, if you do this instead:

<img width="655" alt="Screen Shot 2022-11-01 at 5 43 48 PM" src="https://user-images.githubusercontent.com/33232379/199347477-b1357ea0-499b-4717-8b54-ef2b24d0894b.png">

The contents of the files directory will be at the top level, instead of the files directory itself:

<img width="759" alt="Screen Shot 2022-11-01 at 5 44 20 PM" src="https://user-images.githubusercontent.com/33232379/199347567-799be64b-e6ef-468f-8559-d1a73ff34a47.png">

</details>

<details>
<summary>onRootCidReady</summary>
<br>
This is how you dropdown.
</details>

<details>
<summary>onStoredChunk</summary>
<br>
This is how you dropdown.
</details>



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


