const fs = require('fs');
const http = require('http');

const PORT = process.argv[2];
const FILE = process.argv[3];

function handleConnection(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  fs.createReadStream(FILE).pipe(res);
}

const server = http.createServer(handleConnection);
server.listen(PORT);
