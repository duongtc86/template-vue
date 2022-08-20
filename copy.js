const fs = require('fs-extra')
// copying file in sync process
fs.copySync('./client/dist/index.html', './views/index.ejs');

console.log("File copied in Sync")
// Copies directory from src to dest
fs.copySync('./client/dist', './public')

console.log("Directory copied in Sync")

fs.remove('./public/index.html', err => {
    if (err) return console.error(err)
    console.log('success del!')
  });