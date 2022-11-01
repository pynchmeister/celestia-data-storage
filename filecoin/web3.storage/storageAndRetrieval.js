// get uploaded files from a form
const fileInput = document.querySelector('input[type="file"]');

// store files and obtain a CID
const rootCid = await client.put(fileInput.files);

// retrieve files using the CID
const res = await client.get(rootCid);
const files = await res.files();
for (const file of files) {
  console.log(`${file.cid} ${file.name} ${file.size}`);
}
