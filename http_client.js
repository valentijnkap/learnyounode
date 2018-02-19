// Requiere http module
var http = require('http')

// Get the http request and use the callback for the data
http.get(process.argv[2], callback)

// Format data into utf8 and log errors and eventually the data
function callback(req) {
	req.setEncoding('utf8')
	req.on('data', console.log)
	req.on('error', console.error)
}