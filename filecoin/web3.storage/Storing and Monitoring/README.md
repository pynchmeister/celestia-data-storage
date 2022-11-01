# Storing and monitoring with web3.storage
  
How can you see these principles in action with your files uploaded to web3.storage? It's easy using the web3.storage JavaScript client library.

When you upload a file to web3.storage using the put() method, you get the CID of that file in return. The file is then put into a queue for geographically distributed Filecoin network storage providers who have been chosen for performance and availability. These providers bid on the right to store the files in the queue — including your file — and agree to a storage deal.

You can monitor this activity for files you upload to web3.storage by calling status() and providing a file's CID. This will return a list of deals that have been made at the time of query. Here's how you might include this call in your JavaScript project...

```web3.storage combines the content addressing capabilities of IPFS and the proving algorithms and storage deal marketplace of Filecoin in order to achieve this complete solution, wrapping the power of these two systems into an easy-to-use service with simple, familiar methods such as put(), get(), and status(). Even better, web3.storage is free to use and integrate into your apps and services.```

## Javascript client library

To use the JavaScript client library for web3.storage, you must first [obtain a free API token](https://web3.storage/docs/how-tos/generate-api-token)

The client library automatically packs your uploads into a content addressible archive (CAR) for uploading to the web3.storage service, which stores data as blocks prefixed with the content identifier (CID) derived from a cryptographic hash of the data. You can then use a file's CID to retrieve it.

### Glossary

* Content addressable archive (CAR) - lorem ipsom (TODO)

