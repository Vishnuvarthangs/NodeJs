/*
The fs.appendFile() method is used to read files on your computer.
Assume we have the following HTML file (located in the same folder as Node.js):

The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
*/

//var http = require('http');
var fs = require('fs');

//http.createServer(function(req, res){
    fs.appendFile('AppendFile.txt', 'Hello append the content!', function(err){
       if(err) throw err;
       console.log('The file has been appended!');
        });
//}).listen(8080);
