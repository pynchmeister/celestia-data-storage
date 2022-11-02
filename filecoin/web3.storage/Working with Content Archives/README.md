When you upload files to web3.storage using the client library, your data is converted into a graph of data structures, which are then packed into a format called a Content Archive (CAR) before being sent to the web3.storage service.

For most use cases, you never need to know about this process, as the conversion happens behind the scenes when using the client library. However, if you're using the HTTP API, or if you want more control over the structure of the IPFS data graph, you may want to work with Content Archives directly.

