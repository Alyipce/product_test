var http = require('http');
var url = require('url');

function onRequest(req,res){
   res.writeHead(200,{'Content-Type':'text/plain'});
   res.send('hello');
   res.end();
}

http.createServer(onRequest).listen(8081);
