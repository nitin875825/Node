var http = require('http');
var port = process.argv[2];

http.createServer(function(req, resp) {
    resp.end('Server is running on port No. : ' + port);
}).listen(port)
