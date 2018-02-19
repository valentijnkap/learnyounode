// Dependencies
var fs = require('fs')
var path = require('path')

// Gets the directory and flters it with the callback
fs.readdir(process.argv[2], filter)

function filter(err, list) {
	if (err) throw err

	// For each file in de directory start the following function
	list.forEach(function(file) {

		// checks if the the file has the same extension as the given one in process.argv 
		if (path.extname(file) === '.' + process.argv[3] ) {
	      console.log(file)
	    }
	})

}