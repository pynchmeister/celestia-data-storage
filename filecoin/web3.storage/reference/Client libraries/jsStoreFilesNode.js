import { getFilesFromPath } from 'web3.storage';

const files = await getFilesFromPath('./files');
const rootCid = await client.put(files);
