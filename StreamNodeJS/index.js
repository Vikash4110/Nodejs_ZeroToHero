const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    // // Check if the request URL is correct (optional)
    // if (req.url === "/") {
    //     // Create a readable stream for the input file
        // const rstream = fs.createReadStream("input.txt");

    //     // Handle data event to write chunks of data to the response
    //     rstream.on('data', (chunk) => {
    //         res.write(chunk);
    //     });

    //     // Handle end event to end the response
    //     rstream.on('end', () => {
    //         res.end();
    //     });

    //     // Handle error event to catch any errors while reading the file
    //     rstream.on('error', (err) => {
    //         console.error(err);
    //         res.statusCode = 500;
    //         res.end("Internal Server Error");
    //     });
    // } else {
    //     res.statusCode = 404;
    //     res.end("Not Found");
    // }


    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);
});

// Start the server and listen on port 8000
server.listen(8000, "127.0.0.1", () => {
    console.log("Server is listening on http://127.0.0.1:8000");
});
