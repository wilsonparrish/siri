var http = require('http');

var messages = ["Die in a fire.", "You are too ugly to respond to.", "Please go away.", "Hello Beautiful.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that."];

var onRequest = function(req, res) {
	var randomNum = Math.floor(Math.random() * messages.length);
	if(req.method === "GET"){
		res.writeHead(200, {
			'Connection': 'close',
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		});
		res.end(JSON.stringify({message: messages[randomNum]}));
	}
	else if (req.method === "OPTIONS"){
		res.writeHead(200, {
			'Connection': 'close',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		});
		res.end();
	}
};

http.createServer(onRequest).listen(8887);

