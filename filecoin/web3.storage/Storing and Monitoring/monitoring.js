// get files from form object
const fileInput = document.querySelector('input[type="file"]');

// store files, obtain CID
const rootCid = await client.put(fileInput.files, {
  name: 'my files',
  maxRetries: 3,
});

// query status based on CID
const info = await client.status(rootCid);

// display results of query
console.log(`${info.cid} ${info.dagSize} ${info.created}`);
for (const deal of info.deals) {
  console.log(`${deal.id} -- ${deal.status}`);
}
