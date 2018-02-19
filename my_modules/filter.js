// Depencies
var fs = require('fs')
var path = require('path')

// Export
module.exports = ft

// The module export
ft = function(dir, ext, callback) {

	// Read the directory en makes a list
	fs.readdir(dir, function(err, list) {
		if (err) return callback(err)

	    else {

	    	// Checks if the files match the extension
	        list = list.filter(function (file) {
	            if (path.extname(file) === '.' + ext) return true
	        })

	        return callback(null, list)
	    }
    })
}