// Depencies
var http = require('http')
var url = require('url')

// Gets the given data from learnyounode
var port = process.argv[2]

// create the server
var server = http.createServer(function(req, res) {
	// Writes the http head and sends the oke status code.
	res.writeHead(200, {'content-type': 'application/json'})

	if (req.method == 'GET') {

		// Get the query and parse into a time and path string.
		var query = url.parse(req.url).query.split('=')[1]
  		var pathname = url.parse(req.url).pathname

  		// Catch the path name and put it in variables.
  		var isParsetime = pathname === '/api/parsetime'
  		var isUnixtime = pathname === '/api/unixtime'

  		var jsonDate = {}

  		var date = new Date(query)                                                       
		
		// Set JSON format for parsetime path.
		if (isParsetime) {
			jsonDate.hour = date.getHours()
			jsonDate.minute = date.getMinutes()
			jsonDate.second = date.getSeconds()
		}

		// Set JSON format for the unixtime path.
		if (isUnixtime) {
			jsonDate.unixtime = date.getTime()
		}

		// Makes a string of the JSON format
		return res.end(JSON.stringify(jsonDate))
	}
	else {
		// Writes the http head when there is an 404 error.
		res.writeHead(404, {'content-type': 'text/plain'})
		res.end('Sorry did not found!')
	}
})
server.listen(port)
