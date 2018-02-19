// Dependencies
var net = require('net')
var strftime = require('strftime')

// Getting port
var port = Number(process.argv[2])

// Format the timezone
var time = strftime.timezone('+0100')

// Start server
var server = net.createServer(function(socket) {
	
	// Log the formated time and close the server
	socket.end(time('%Y-%m-%d %H:%M') + '\n')
})
server.listen(port)