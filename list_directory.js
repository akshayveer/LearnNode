const fs = require('fs');

module.exports =  function listDirectory(path, ext, callback) {
  fs.readdir(path,
    (err, files) => {
      if (err){
        callback(err, null);
      } else {
        let filtered_output = files.filter((file) => {
          return file.endsWith('.' + ext)
        });
        callback(null, filtered_output);
      }
    }
);
}
