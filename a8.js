const bl = require('bl');
const http = require('http');

const url = process.argv[2];

function handleDataLoad(err, data) {
  if (err){
    console.log('error in response : ', err);
  } else {
    const data_string = data.toString();
    console.log(data_string.length);
    console.log(data_string);
  }
}

http.get(url, (response) => {
    response.pipe(bl(handleDataLoad));
})
.on('error', (err) => console.log('Error making request : ' + err.message));
