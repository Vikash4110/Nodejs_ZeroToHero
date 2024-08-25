const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("Hello from the home side.");
    } else if (req.url == "/contact") {
        res.end("Hello from the Contact Page");
    } else if (req.url == "/userapi") {
        res.end("Hello from the userapi Page");
        fs.readFile(`${__dirname}/UserApi/usesrapi.json`,"utf-8", (err,data) => {
            console.log(data);
            res.end(data);
        });
    } 
    else {
        res.end("404 Error Page : Page Doesn't Exist");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to the port number 8000");
});
