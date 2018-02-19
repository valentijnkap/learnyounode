// Dependencies
var http = require('http')
var bl = require('bl')

var output = []
var inputCount = 0

// For every input fire the get function till it reaches the third input
for (var i = 0; i < 3; i++) {
	getInput(i)
}

function getInput(index) {
	http.get(process.argv[2 + index], callback)

	function callback(req) {
		req.pipe(bl(function (err, data) {
			if (err) return console.error(err)

			/* Puts de data in the ouput var and assigns an index number for the array 
				to maintain the same order as it has been given. */
			output[index] = data.toString()

			// Keeps track of the times the input has been loaded.
			inputCount++

			// When all the data is loaded show the results with showOutput().
			if (inputCount == 3) {
				showOutput()
			}
		}))
	}
}

// Console log all the data in the array based on the index number.
function showOutput () {
	for (var i = 0; i < 3; i++) {
		console.log(output[i])
	}
}