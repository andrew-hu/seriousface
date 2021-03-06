#!/usr/bin/env nodejs
var http = require('http');
var fs = require('fs');

function onRequest(request, response){
	//Print request to console
	console.log("Request has been made: " + request.url);
	
	//If the request is for the favicon
	// if (request.url === '/favicon.ico'){
	// 	response.writeHead(200, {"Content-Type": "image/x-icon"})
	// 	fs.createReadStream("images/SF_wBackground_32x32.png").pipe(response);
	// 	return
	// }

	switch(request.url){
		case '/favicon.ico':
			response.writeHead(200, {"Content-Type": "image/x-icon"})
			fs.createReadStream("images/SF_wBackground_32x32.png").pipe(response);
			return

		case '/css/serious.css':
			console.log("CSS REQUEST HERE");
			response.writeHead(200, {"Content-Type": "text/css"})
			fs.createReadStream("css/serious.css").pipe(response);	
			return

		case '/':
			response.writeHead(200, {"Content-Type": "text/html"})
			fs.createReadStream("index.html").pipe(response);
			return


	};

	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World, Cloue really sucks\n");
	response.end();
}

http.createServer(onRequest).listen(8080, 'localhost');
console.log('Server running at http://localhost:8080/');
