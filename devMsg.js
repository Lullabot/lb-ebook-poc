const printMessage = require('print-message');
const fs = require('fs');

// the app defaults to a redirect to Lullabot.com
// this prints a message with links directly to each ebook
// for use when developing
fs.readdir(`${__dirname}/src/ebooks`, (err, files) => {
  files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item)); // ignore hidden files
  files = files.map((file) => `http://localhost:8080/ebooks/${file}/cover`);
  files.unshift('Select any ebook below when contributing:');
  if (err)
    console.log(err);
  else {
    printMessage(files);
  }
});
