// https://proto.school/regular-files-api/08

/* global ipfs, all */

const run = async () => {
  let result = await all(ipfs.get('QmcmnUvVV31txDfAddgAaNcNKbrtC2rC9FvkJphNWyM7gy'))

  return result
}
return run
