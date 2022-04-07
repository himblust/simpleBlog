// server.js

// load http integrated node module
const http = require('http')

// load self-developed module serverlogic from modules/logic.js
const serverlogic = require('./modules/logic');

// create the server
const server = http.createServer(serverlogic);

// 5. server listen for any incoming requests
server.listen(3444);

console.log('My node.js web server is alive and running at port 3444')
