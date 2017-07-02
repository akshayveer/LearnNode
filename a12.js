const http = require('http');
const map = require('through2-map');

const PORT = process.argv[2];

function handleConnection(req, res){
  if (req.method !== 'POST'){
    res.end('send me a POST\n');
  }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  req.pipe(map((chunk) => {
    return chunk.toString().toUpperCase();
  })).pipe(res);
}

const server = http.createServer(handleConnection);
server.listen(PORT);
