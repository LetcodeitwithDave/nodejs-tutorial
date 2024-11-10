
const http = require('http');

// createserver takse 2 argument ( request and response)

const server = http.createServer((req,res) => {
    const url = req.url;
    
    if( url === '/'){
    res.setHeader('Content-Type', 'text-html');
    res.write('<html>');
    res.write('<head><title> Home page</title></head>');
    res.write('<body> Hello from my node.js server! on home</body>');
    res.write('</html>');
    return res.end();
    }

    res.setHeader('Content-Type', 'text-html');
    res.write('<html>');
    res.write('<head><title>Random path</title></head>');
    res.write('<body> unknown page</body>');
    res.write('</html>');
    res.end();
    

    // console.log(res)
});


server.listen(3000) 