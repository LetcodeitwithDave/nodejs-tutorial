
const http = require('http');

// createserver takse 2 argument ( request and response)

const server = http.createServer((req,res) => {

    // understanding request
    // console.log(req.url, req.method, req.headers )
    // process.exit()

    console.log(res)
});


server.listen(3000)