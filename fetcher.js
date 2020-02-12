const request = require("request");
const fs = require("fs");
const URL = process.argv[2];
const path = process.argv[3];

const fetcher = (URL, path) => {
  request(URL, body => {
    fs.writeFile(path, body, function(err) {
      if (err) throw err;
      console.log(`Saved to ${path}`);
    });
  });
};

fetcher(URL, path);
