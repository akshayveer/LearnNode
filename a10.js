const net = require('net');
const strftime = require('strftime');

const PORT = Number(process.argv[2]);

function getCurrentTime() {
  const DATE_FORMAT = "%F %H:%M";
  return strftime(DATE_FORMAT, new Date());
}

function handleConnection(socket) {
  socket.end(getCurrentTime() + '\n');
}

const server = net.createServer(handleConnection);
server.listen(PORT);

// it is a tcp server not http server so will not work on browser
