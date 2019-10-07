const http = require('http');
const url = require('url');

function start(route, handle) {
    function onRequest(req, res) {
        const pathname = url.parse(req.url).pathname;
        console.log(`Request for ${pathname} received...`);
// left off on page 40
        route(handle, pathname, response);
    }
    
    http.createServer(onRequest).listen(8888);
    console.log('Server has started on port 8888');
}

exports.start = start;