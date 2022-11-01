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
