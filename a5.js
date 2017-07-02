const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2],
  (err, data) => {
    const req_items = data
    .filter((file) => {
      return file.endsWith('.' + process.argv[3]);
    })
    .forEach((item) => console.log(item));
  }
)
