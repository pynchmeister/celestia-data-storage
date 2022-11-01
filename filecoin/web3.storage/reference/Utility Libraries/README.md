# Javascript utility libraries

The web3.storage [JavaScript client library](https://web3.storage/docs/reference/js-client-library) provides a simple interface for interacting with web3.storage. This page highlights some additional libraries that may be helpful when working with the client library, or when using the [HTTP API](https://web3.storage/docs/reference/http-api/) directly.

## files-from-path

The [files-from-path package](https://github.com/web3-storage/files-from-path) provides a simple way for Node.js users to load files from the filesystem into the ```File``` objects that the web3.storage client library likes to use.

Here's a quick example: 

```
import { getFilesFromPath } from 'web3.storage';

async function storeFiles(path = 'path/to/somewhere') {
  const files = await getFilesFromPath(path);
  for (const f of files) {
    console.log(f);
    // { name: '/path/to/me', stream: [Function: stream] }
  }

  const web3Storage = getStorageClient();
  const cid = await web3storage.put(files);
  console.log(`stored ${files.length} files. cid: ${cid}`);
}
```
Note that if you're using the client library you dont need to install the ```files-from-path``` package seperately. Instead, just import the ```getFilesFromPath``` or ```filesFromPath``` functions from the ```web3.storage``` package.

