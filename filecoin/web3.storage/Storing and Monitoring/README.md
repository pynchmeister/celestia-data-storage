### Storing and monitoring with web3.storage
  
How can you see these principles in action with your files uploaded to web3.storage? It's easy using the web3.storage JavaScript client library.

When you upload a file to web3.storage using the put() method, you get the CID of that file in return. The file is then put into a queue for geographically distributed Filecoin network storage providers who have been chosen for performance and availability. These providers bid on the right to store the files in the queue — including your file — and agree to a storage deal.

You can monitor this activity for files you upload to web3.storage by calling status() and providing a file's CID. This will return a list of deals that have been made at the time of query. Here's how you might include this call in your JavaScript project...

