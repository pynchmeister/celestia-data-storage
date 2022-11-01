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
Function. Because the data is formatted for IPFS and Filecoin on the client, the root CID for the data is generated before the data is uploaded to web3.storage. If you want to display the CID to the user before the upload is complete, pass in an onRootCidReady function that accepts a CID string:

<img width="714" alt="Screen Shot 2022-11-01 at 5 46 10 PM" src="https://user-images.githubusercontent.com/33232379/199347775-3f1f4477-6c8e-4ebb-b7f1-9c132fc1c0b4.png">
</details>

<details>
<summary>onStoredChunk</summary>
<br>
Function. You can also display progress updates by passing in an onStoredChunk callback. This is called after each chunk of data is uploaded, with the size of the chunk in bytes passed in as a parameter:

<img width="970" alt="Screen Shot 2022-11-01 at 5 47 37 PM" src="https://user-images.githubusercontent.com/33232379/199347969-ab0c370e-94b2-4feb-bf36-1fd935c08921.png">
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

#### Return value

Returns ```undefined``` if there are no matches for the given CID.

If found, the method returns a Web3Response object, which extends the [Fetch API response object](https://developer.mozilla.org/en-US/docs/Web/API/Response) to add two iterator methods unique to the web3.storage client library:
```files()``` and ```unixFsIterator()```

<details>
<summary>Using File objects</summary>
<br>
Calling the files() method returns your requested files as an Array<Web3File> object, which is an iterable collection of Web3File objects. Each object represents a file that was uploaded in the CAR with the supplied CID.

The Web3File type extends [the generic JavaScript File type](https://developer.mozilla.org/en-US/docs/Web/API/File), adding a string property for the CID of the given file named cid, as shown in the example below. This is different from the CID of the CAR that contains the file, which you specified when calling get().

<img width="487" alt="Screen Shot 2022-11-01 at 5 56 48 PM" src="https://user-images.githubusercontent.com/33232379/199349586-8df21c3b-fbc0-48a5-bf39-3af2b6c21183.png">

</details>



<details>
<summary>Using UnixFS objects</summary>
<br>
In addition to the files() method, you can also use the unixFsIterator() method. This returns your requested files as a AsyncIterable<UnixFS> object, which is an iterable collection of [UnixFS](https://github.com/ipfs/js-ipfs-unixfs/blob/master/packages/ipfs-unixfs/README.md) objects. Each object represents a file that was uploaded in the CAR with the supplied CID.

Using unixFS is helpful in cases where you expect large responses or responses containing many files, since it does not buffer all files in memory before returning. Instead, the returned async iterator yields an object for each entry.

<img width="842" alt="Screen Shot 2022-11-01 at 6 00 08 PM" src="https://user-images.githubusercontent.com/33232379/199350039-cd70c9b7-d8e3-4226-b029-e624b9a1bc6c.png">

Note that not all UnixFS entries returned by the iterator represent files. If entry.type == 'directory', the entry represents a directory and contains no data itself; it just links to other entries.

For more details on UnixFS objects, see [the README file in the UnixFS GitHub repository](https://github.com/ipfs/js-ipfs-unixfs/blob/master/packages/ipfs-unixfs/README.md).

<img width="617" alt="Screen Shot 2022-11-01 at 6 01 04 PM" src="https://user-images.githubusercontent.com/33232379/199350182-68105921-7620-4ea7-8f6d-d15f655e2f6d.png">

</details>

### Check Status

Retrieve metadata about your file by using the status() method and supplying the CID of the file you are interested in. This metadata includes the creation date and file size, as well as details about how the network is storing your data. Using this information, you can identify peers on the IPFS (InterPlanetary File System) network that are pinning the data, and Filecoin storage providers that have accepted deals to store the data.

#### Usage

```<clientObject>.status(<CID>)```

#### Examples

<details>
<summary>Call</summary>
<br>
Here's an example of a call to the status() method:

<img width="676" alt="Screen Shot 2022-11-01 at 6 08 14 PM" src="https://user-images.githubusercontent.com/33232379/199351269-a866432f-4cfb-4f36-a7e4-b3e79e8f8ad1.png">
<br>
</details>

<details>
<summary>Response</summary>
<br>
Here's an example response from the status() method:

<img width="753" alt="Screen Shot 2022-11-01 at 6 09 14 PM" src="https://user-images.githubusercontent.com/33232379/199351430-58368129-9aac-469e-b954-0f6230d20eec.png">
<br>
</details>

#### Parameters

<img width="483" alt="Screen Shot 2022-11-01 at 6 11 43 PM" src="https://user-images.githubusercontent.com/33232379/199351755-fe12ace6-038d-4b34-b97a-a6c83143dbc3.png">

#### Return value

Returns ```undefined``` if there are no matches for the given CID.

If found, the ```status()``` method returns a ```{Status}``` object that contains the metadata for your object's storage deal on the web3.storage network, with the following properties:

<details>
<summary>cid</summary>
<br>
String. The cid property is the content identifier of the data for which you are retrieving status information.
<br>
</details>

<details>
<summary>dagSize</summary>
<br>
Number. The dagSize property is the total size, in bytes, of the [Merkle Directed Acyclic Graph (DAG)](https://docs.ipfs.io/concepts/merkle-dag/) containing the queried CID.
<br>
</details>

<details>
<summary>created</summary>
<br>
String. The created property gives the creation date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.


<img width="789" alt="Screen Shot 2022-11-01 at 6 17 54 PM" src="https://user-images.githubusercontent.com/33232379/199352553-9c715dfe-4f52-4645-a9a6-4ea32df59556.png">
<br>
</details>

<details>
<summary>pins</summary>
<br>
Array. The pins property is an array of Pin objects. Each Pin object represents a specific [peer in the IPFS network](https://docs.libp2p.io/concepts/peer-id/), with the following structure:

<img width="731" alt="Screen Shot 2022-11-01 at 6 19 37 PM" src="https://user-images.githubusercontent.com/33232379/199352761-e7291642-9d2b-4318-b508-7da905d5a2b9.png">
<br>
</details>

<details>
<summary>deals</summary>
<br>
Array. The deals property is an array of Deal objects. Each Deal object represents a specific [storage deal on the Filecoin network](https://docs.filecoin.io/about-filecoin/how-filecoin-works/#deals), for a specific [Piece](https://spec.filecoin.io/systems/filecoin_files/piece/) of data, with the following structure:

<img width="701" alt="Screen Shot 2022-11-01 at 6 21 01 PM" src="https://user-images.githubusercontent.com/33232379/199352929-f9c650f4-fe27-4b32-b308-93bee998d0f0.png">
<br>
</details>

### List uploads

List previous uploads with the ```list()``` method.

#### Usage 

```<clientObject>.list({before, maxResults})```

#### Example

The following example stores return values from a call to ```list()``` into a JavaScript array:

<img width="635" alt="Screen Shot 2022-11-01 at 6 23 32 PM" src="https://user-images.githubusercontent.com/33232379/199353261-c9d7fb4e-2b2a-4839-b04f-0ddb7448c8d4.png">

#### Parameters

The ```list()``` method accepts an ```{options}``` object with the following properties:

...








