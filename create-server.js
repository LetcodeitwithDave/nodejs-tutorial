

const http = require('http');

// createserver takse 2 argument ( request and response)

const server = http.createServer((req,res) => {
    console.log(req)
});


server.listen(3000)
