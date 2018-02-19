// Dependencies
var fs = require('fs')

// Store the buffer of the file in a variable
var file = fs.readFileSync(process.argv[2])

/* Makes a string from the chunks of the file and divides it into
two lines. Then remove the last line to match the expected. */
var countLines = file.toString().split('\n').length -1

console.log(countLines)