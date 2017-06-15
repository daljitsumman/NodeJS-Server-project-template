const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
	res.end('You are ready to go');
});

server.listen(8000);

