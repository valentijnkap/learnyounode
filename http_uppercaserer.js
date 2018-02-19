// Dependencies
var http = require('http')
var map = require('through2-map')

var port = process.argv[2]

var server = http.createServer(function(req, res) {
	// Checks if the request is a POST method.
	if (req.method == "POST") {

		// Transform the pieces of chuck so it can be modified in the function.
		req.pipe(map(function(chunk){
			
			// Makes a string of the chunk and transform it in uppercase text.
			return chunk.toString().toUpperCase()

			// Pipes the input fromn the reqeust to the response.
		})).pipe(res)
	}
})
server.listen(port)
