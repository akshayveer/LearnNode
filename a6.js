const ls = require('./list_directory');
const path = process.argv[2];
const ext = process.argv[3];

ls(path, ext, (err, files) => {
  if (err){
    console.log(err);
  } else {
    files.forEach((file) => console.log(file));
  }
});
