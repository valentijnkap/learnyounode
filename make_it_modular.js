// Require the modules
var path = require('path')
var filter = require('./my_modules/filter.js')

ft(process.argv[2], process.argv[3], callback)

function callback(err, list) {
    if (err) throw err
    	
    list.forEach(function (file) {
        console.log(file)
    })
}