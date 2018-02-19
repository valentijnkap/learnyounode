// Store the file system module
var fs = require('fs')

// Store the buffer of the file in a variable
var file = fs.readFileSync(process.argv[2])

// Split the file string in an array en count the length -1
var countLines = file.toString().split('\n').length -1

console.log(countLines)