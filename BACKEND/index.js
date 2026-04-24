// const http = require('http');

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.end("Home Page");
//     }else if(req.url === '/about'){
//         res.end("About Page");
//     }else{
//         res.end("404 Page Not Found");
//     }
//     // res.write("Hello World");
//     // res.end();
// });

// server.listen(8000, () => {
//     console.log("Server running at http://localhost:8000");
// });
// // server.listen(8000);



const http = require('http');

const server = http.createServer((req, res) => {

    //Home route
    if(req.url === '/' && req.method === 'GET'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>Home Page</h1>");
    }

    //About route
    else if(req.url === '/about' && req.method === 'GET'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>About Page</h1>");
    }

    //Contact route
    else if(req.url === '/contact' && req.method === 'GET'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>Contact page</h1>");
    }

    else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h1>404 Page Not Found</h1>");
    }
});

server.listen(8000, () => {
    console.log("Server running at http://localhost:8000");
});