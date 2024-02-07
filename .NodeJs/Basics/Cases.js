// file that will convert the output "Hello World!" into upper-case & lower-case letters:

var http = require('http');
var uc = require('upper-case');
var lc = require('lower-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World Upper Case!"));
  res.write(lc.lowerCase("Hello World Lower Case!"));
  res.end();
}).listen(8080);