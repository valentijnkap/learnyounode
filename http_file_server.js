// Depencies
var http = require('http')
var fs = require('fs')

// Gets the given data from learnyounode
var port = process.argv[2]
var file = process.argv[3]

// Creates the server
var server = http.createServer(function (req, res) {
	// Writes the http head and sends the oke status code.
	res.writeHead(200, {'content-type': 'text/plain'})

	// Reads the given file and streams it to response.
	fs.createReadStream(file).pipe(res)
})
server.listen(port)