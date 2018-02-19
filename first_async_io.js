// Dependencies
var fs = require('fs')

// Checks the file and uses the callback countLines
fs.readFile(process.argv[2], countLines)

// Declare the callback function
function countLines(err, file) {
	// Throws error if the didn't come trough
	if (err) throw err

	// Makes a string of the file and count the lines
	var lines = file.toString().split('\n').length -1
	
	console.log(lines)
}
