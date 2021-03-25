const path = require('path');
const fs = require('fs')
const examplePath = 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\readme.md';

function validateAbsolutePath(examplePath) {
    return path.isAbsolute(examplePath) === true ? examplePath : path.resolve(examplePath)

}
const absolutePath = validateAbsolutePath(examplePath)
console.log(absolutePath)

function validateIfPathExists(examplePath) {
    console.log(fs.existsSync(examplePath))
    return fs.existsSync(examplePath)
}
validateIfPathExists(absolutePath)
console.log(validateIfPathExists(absolutePath))