// Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:

var fs = require('fs');
var path = require('path');

module.exports = function(req, res){
    var filePath = path.join(__dirname, req.params.file);
    fs.readFile(filePath, function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/plain'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(data);
    });
};