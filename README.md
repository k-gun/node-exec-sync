## execSync

Execute sync'ed shell commands in Node.js modules if not using Node.js >= 0.12 or IO.js >= 1.10 (like me).

Warning: Be sure what you do while using it!

## Install

```sh
$~ npm install k-gun-execSync
```

## Usage

```js
var execSync = require("k-gun-execSync");

// direct
var output = execSync("ls -la");
console.log(output);

// with callback
execSync("ls -la", {}, console.log);
// or
execSync("ls -la", {}, function(output){
   console.log(output);
});
```

## License

The MIT License
