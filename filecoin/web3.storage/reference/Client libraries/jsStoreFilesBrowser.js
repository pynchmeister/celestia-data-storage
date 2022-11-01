// In the browser, using a file chooser to prompt the user for files to store:

const fileInput = document.querySelector('input[type="file"]');

// Pack files into a CAR and send to web3.storage
const rootCid = await client.put(fileInput.files, {
  name: 'cat pics',
  maxRetries: 3,
});
