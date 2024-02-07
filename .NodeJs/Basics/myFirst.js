/*
//************************************************************************************************
//the server object listens on port 8080
// Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

//To include the HTTP module, use the require() method:

//The code tells the computer to write "Hello World!" if anyone (e.g. a web browser) tries to access your computer on port 8080.

//If anyone tries to access your computer on port 8080, they will get a "Hello World!" message in return!
//Start your internet browser, and type in the address: http://localhost:8080

//Node.js as a Web Server
//The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

//Use the createServer() method to create an HTTP server:
// The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080.
//************************************************************************************************
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.end('Hello World!'); 
}).listen(8080);

*/

//************************************************************************************************

/*
//************************************************************************************************
// Now you can include and use the module in any of your Node.js files.
// Notice that we use ./ to locate the module, that means that the module is located in the same folder as the Node.js file.
//************************************************************************************************
var http = require('http');
var dt = require('./myModules.js');

http.createServer(function(req, res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("The date and Time are currently: " + dt.mydateTime());
    //write a response to the client
    res.end(); //end the response
}).listen(8080);

*/

//************************************************************************************************
//Read the Query String
//The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).

//This object has a property called "url" which holds the part of the url that comes after the domain name:
//************************************************************************************************
/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);
//http://localhost:8080/summer
*/

//Split the Query String
//There are built-in modules to easily split the query string into readable parts, such as the URL module.

var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var x = url.parse(req.url, true).query;
    var txt = x.year + " " + x.month;
    res.end(txt);
}).listen(8080);

// http://localhost:8080/?year=2023&month=December