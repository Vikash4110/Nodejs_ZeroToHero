const fs = require('fs');

// fs.writeFile('example.txt', "Hello, World", 
// (err) => {
//     console.log("File is Creted");
// });

// we pass them a function as an argument - a callback -
// that gets called when that task completes.
// The callback has an argument that tells you whether
// the operation completed successfully.
// Now we need to say what to do when fs.writeFile
// has completed (even if it's nothing), and start
// checking for errors. 

// fs.appendFile('example.txt',"New Content is appended. ", () => { 
//     console.log("Task Completed")
// });

// fs.readFile('example.txt',"utf8", (err,Data) => {
//     console.log(Data)
//     console.log("Task Readed Succesfully!")
// }); 