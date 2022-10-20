<script src="https://cdn.jsdelivr.net/npm/ipfs/dist/index.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', async () => {
  const node = await Ipfs.create()
  const results = await node.add('=^.^= meow meow')
  const cid = results[0].hash
  console.log('CID created via ipfs.add:', cid)
  const data = await node.cat(cid)
  console.log('Data read back via ipfs.cat:', new TextDecoder().decode(data))
})
</script>

// https://github.com/ipfs/js-ipfs/blob/master/docs/BROWSERS.md
