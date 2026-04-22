const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("Home Page");
    }else if(req.url === '/about'){
        res.end("About Page");
    }else{
        res.end("404 Page Not Found");
    }
    // res.write("Hello World");
    // res.end();
});

server.listen(8000, () => {
    console.log("Server running at http://localhost:8000");
});
// server.listen(8000);