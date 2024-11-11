
const http = require('http');

// createserver takse 2 argument ( request and response)

const server = http.createServer((req,res) => {
    const url = req.url;
    
    if( url === '/'){
    res.setHeader('Content-Type', 'text-html');
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body> <form action="/output" method="POST">  <input type="text" name="output><button type="submit">Send</button></input> </form>  </body>');
    res.write('</html>');
    return res.end();
    }

    res.setHeader('Content-Type', 'text-html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body> Hello from my nodejs server</body>');
    res.write('</html>');
    res.end();
    

    // console.log(res)
});


server.listen(3000) 