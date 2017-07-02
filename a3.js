const fs = require('fs');
let count = 0;

let buf = fs.readFileSync(process.argv[2],{encoding : 'utf-8'});
console.log(buf.split('\n').length - 1);
