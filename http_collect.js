// Dependencies
var http = require('http')
var bl = require('bl')

// Get input and refer to callback
http.get(process.argv[2], callback)

function callback(req) {

	// Read the data and puts it together and streams it when available
	req.pipe(bl(function (err, data) {
		if (err) return console.error(err)

		// Makes a string from the data
		data = data.toString()

		console.log(data.length)
		console.log(data)
	}))
}

