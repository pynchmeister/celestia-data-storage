// in Node.js using the ```getFilesFromPath``` helper to lad ```File``` objects from a local path: 

import { getFilesFromPath } from 'web3.storage';

const files = await getFilesFromPath('./files');
const rootCid = await client.put(files);
