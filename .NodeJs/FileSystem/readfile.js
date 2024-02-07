/*
The fs.readFile() method is used to read files on your computer.
Assume we have the following HTML file (located in the same folder as Node.js):

The selected code is a function that is being used to read a file named "DemoFile.html" and serve its contents to the user. The function takes two arguments, "req" and "res", which represent the request and response objects, respectively.
Within the function, the fs.readFile method is being used to read the file "DemoFile.html" and pass its contents to the "data" variable. If an error occurs, the "err" variable will be populated with the error message.
The response object is then used to write the contents of the "data" variable to the response, set the status code to 200 (OK), set the content type to "text/html", and end the response.
*/
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('DemoFile.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);
