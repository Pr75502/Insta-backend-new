MongoServerError: E11000 duplicate key error collection: isnta-backened.users index: username_1 dup key: { username: null }
    at C:\Z_software\New_react\amazonClone_fullStack\main\instagramClone\backened\Insta-backend-new\node_modules\mongodb\lib\operations\insert.js:50:33
    at C:\Z_software\New_react\amazonClone_fullStack\main\instagramClone\backened\Insta-backend-new\node_modules\mongodb\lib\cmap\connection_pool.js:331:21
    at C:\Z_software\New_react\amazonClone_fullStack\main\instagramClone\backened\Insta-backend-new\node_modules\mongodb\lib\sdam\server.js:207:17
odules\mongodb\lib\sdam\server.js:323:20)
    at Connection.onMessage (C:\Z_software\New_react\amazonClone_fullStack\main\instagramClone\backened\Insta-backend-new\node_modules\mongodb\lib\cmap\connection.js:206:9)
    at MessageStream.<anonymous> (C:\Z_software\New_react\amazonClone_fullStack\main\instagramClone\backened\Insta-backend-new\node_modules\mongodb\lib\cmap\connection.js:61:60)
    at MessageStream.emit (node:events:518:28)
    at processIncomingData (C:\Z_software\New_react\amazonClone_fullStack\main\instagramClone\backened\Insta-backend-new\node_modules\mongodb\lib\cmap\message_stream.js:124:16)
    at MessageStream._write (C:\Z_software\New_react\amazonClone_fullStack\main\instagramClone\backened\Insta-backend-new\node_modules\mongodb\lib\cmap\message_stream.js:33:9)
    at writeOrBuffer (node:internal/streams/writable:572:12) {
  index: 0,
  code: 11000,
  keyPattern: { username: 1 },
  keyValue: { username: null },
  [Symbol(errorLabels)]: Set(0) {}
}