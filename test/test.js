var execSync = require("../index.js");

// direct
var output = execSync("ls -la");
console.log(output);

// with callback
// execSync("ls -la", {}, console.log)
// execSync("ls -la", {}, function(output){
//     console.log(output)
// });
