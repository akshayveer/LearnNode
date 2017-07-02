const bl = require('bl')
const http = require('http');

let count = 0
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

const content = {[url1] : null, [url2] : null, [url3] : null};

function printOutput() {
  console.log(content[url1]);
  console.log(content[url2]);
  console.log(content[url3]);
}

function handleDataLoad(err, data, url) {
  if (err){
    console.log(err);
  } else {
    content[url] = data.toString();
    count++;
    if (count == 3){
      printOutput();
    }
  }
}

http.get(url1,(response) => {
  response.pipe(bl((err, data) => handleDataLoad(err, data, url1)));
}).on('error', (err) => console.log(err));

http.get(url2,(response) => {
  response.pipe(bl((err, data) => handleDataLoad(err, data, url2)));
}).on('error', (err) => console.log(err));

http.get(url3,(response) => {
  response.pipe(bl((err, data) => handleDataLoad(err, data, url3)));
}).on('error', (err) => console.log(err));
