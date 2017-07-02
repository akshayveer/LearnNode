const http = require('http');
const url = require('url');
const _ = require('lodash');

const PORT = process.argv[2];

function getUnixTime(iso_time) {
  const obj = {"unixtime" : new Date(iso_time) - new Date(0)};
  return JSON.stringify(obj);
}

function getISOTime(iso_time) {
  const d = new Date(iso_time);
  const obj = {
    "hour": d.getHours(),
    "minute": d.getMinutes(),
    "second": d.getSeconds()
  }
  return JSON.stringify(obj);
}

function handleRequest(req, res) {
  const req_time = getUnixTime();
  if (req.method !== 'GET'){
    res.end('send me a get request\n');
    return;
  }
  res.writeHead(200, { 'Content-Type': 'application/json' })
  const data = url.parse(req.url, true);

  if (data.pathname === '/api/unixtime'){
    const iso_time = data.query['iso'];
    if (iso_time){
      res.end(getUnixTime(iso_time));
    } else {
      res.end('insufficient parameters\n');
    }
  } else if (data.pathname === '/api/parsetime'){
    const iso_time = data.query['iso'];
    if (iso_time){
      res.end(getISOTime(iso_time));
    } else {
      res.end('insufficient parameters\n');
    }
  } else {
    res.end('unknown request\n');
  }
}

const server = http.createServer(handleRequest);
server.listen(PORT);
