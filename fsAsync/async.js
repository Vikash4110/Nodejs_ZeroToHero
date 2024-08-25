const fs = require('fs');

// Synchronous
// const data = fs.readFileSync("example.txt","utf-8");
// console.log(data);
// console.log("How are you ?");

// ASynchronous -> Prefferd over synchronous
const data = fs.readFile("example.txt","utf-8" , (error,data) => {
    console.log(data)
})
console.log("How are you ?");