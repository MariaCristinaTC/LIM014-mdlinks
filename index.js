module.exports = () => {
    // ...
};
const fs = require("fs");
const path = require('path');
const http = require('http');
const examplePath = './mdtest/readme.md'; //saving a path as a example
function validatingAnsolutePath(examplePath) {
    console.log(path.isAbsolute(examplePath))
    return path.isAbsolute(examplePath) === true ? examplePath : path.resolve(examplePath) // the conditional ternary operator
}



console.log(path.isAbsolute('/test/demo_path.js')); //true
console.log(path.isAbsolute('test/demo_path.js')); //false
console.log(path.isAbsolute('C:\\test\\demo_path.js')); //true