const  exec = require('child_process').exec;

function start() {
    console.log(`Request handler 'start' was called...`);

    let body = `
    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        </head>
        <body>
            <form action="/upload" method="post">
                <textarea name="text" rows="20" cols="60"></textarea>
                <input type="submit" value="Submit text" />
            </form>
        </body>
    </html>`;

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(stdout);
    response.end();
}

function upload(response) {
    console.log(`Request handler 'upload' was called...`)
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello Upload');
    response.end();
}

exports.start = start;
exports.upload = upload;