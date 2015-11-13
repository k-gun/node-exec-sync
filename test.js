var execSync = require("./index.js");

// var r = execSync("ls -la");
// console.log(r)

// with callback
// execSync("ls -la", {}, console.log)
execSync("ls -la", {}, function(output){
    console.log(output)
});
