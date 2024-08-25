 const fs = require("fs");
 
 const biodata = {
    name : "Vikash",
    age : "20",
    rollno : "2224615",
 };

//  console.log(biodata.name);

//  const jsonData = JSON.stringify(biodata); // stringify --> To convert object into json 
//  {"name":"Vikash","age":"20","rollno":"2224615"}
 
//  console.log(jsonData);
//  console.log(jsonData.rollno); // not exist (undefined)

// const objData = JSON.parse(jsonData);  // json to Object 
// console.log(objData);
// console.log(objData.name);

// 1. Convert to json 
// 2. Add to another file 
// 3. Readfile
// 4. again convert back to js object ori
// 5. console.log

const jsonData = JSON.stringify(biodata);

// fs.writeFile("json1.json", jsonData , (err) => {
//     console.log("Done");
// });

fs.readFile("json1.json","utf-8",(err,data) => {
  
    const orgData = JSON.parse(data);
    // {"name":"Vikash","age":"20","rollno":"2224615"}
    console.log(orgData);
    // { name: 'Vikash', age: '20', rollno: '2224615' }
})
