const os = require("os");

console.log(os.arch());  // output : arm64
console.log(os.hostname());
console.log(os.platform());
console.log(o)


const freeMemory = os.freemem() ; 
console.log(freeMemory);  // output :  51593216
console.log(`${freeMemory / 1024 / 1024 / 1024}`);

const totalMemmory = os.totalmem() ; 
console.log(totalMemmory);  // output  : 8589934592
console.log(`${totalMemmory / 1024 / 1024 / 1024}`);