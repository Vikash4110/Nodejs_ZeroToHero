const fs = require('fs');

// fs.writeFile("bio.txt", "My name is vikash \n", (err) => {
//     if (err) {
//         console.error("Error writing to file:", err);
//     } else {
//         console.log("File Created");
//     }
// });

fs.appendFile("bio.txt","Please Like and subscribe",

(err) => {
  console.log("File Appended");
})

fs.readFile("bio.txt","utf-8", (err,data) => {
    console.log(data);
})

fs.rename('bio.txt', 'bio-new.txt', (err) => {
  console.log('Rename complete!');
});