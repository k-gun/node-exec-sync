##execSync##

Execute sync'd shell commands in Node.js modules if not using Node.js >= 0.12 or IO.js >= 1.10 (like me).

Warning: Be sure what you do while using it!

##Install##
```sh
$~ npm install qeremy-exec-sync
```

##Usage##
```js
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

##License##
(The MIT License)

Copyright (c) 2011-2012 Kerem Güneş &lt;qeremy@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
