const file = {
  path: '/tmp/myfile.txt',
  content: 'ABC'
}

const result = await ipfs.add(file)

console.info(result)

/*
Prints:
{
  "path": "tmp",
  "cid": CID("QmWXdjNC362aPDtwHPUE9o2VMqPeNeCQuTBTv1NsKtwypg"),
  "mode": 493,
  "mtime": { secs: Number, nsecs: Number },
  "size": 67
}
*/
