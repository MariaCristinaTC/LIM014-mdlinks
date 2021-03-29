const path = require('path');
const fs = require('fs')
const examplePath = 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\readme.md';
// is it absolute?
function validateAbsolutePath(examplePath) {
    return path.isAbsolute(examplePath) === true ? examplePath : path.resolve(examplePath)

}
const absolutePath = validateAbsolutePath(examplePath)
console.log(absolutePath)

// Exist?
function validateIfPathExists(examplePath) {
    console.log(fs.existsSync(examplePath))
    return fs.existsSync(examplePath)
}
validateIfPathExists(absolutePath)
console.log(validateIfPathExists(absolutePath))

// file?

const isItFile = fs.statSync(examplePath);
console.log('is file ? ' + isItFile.isFile());

const isItDirectory = fs.statSync(examplePath);
console.log('is directory ? ' + isItDirectory.isDirectory());

// is it md file?
const extensionIdentifier = (examplePath) => path.extname(examplePath);
console.log(extensionIdentifier(examplePath))


// identifying  md files
const isDir = (examplePath) => {
    const stats = fs.statsSync(examplePath);
    const isDirectory = stats.isDirectory(examplePath);
    return isDirectory;
}

// example with rocio
const readDir = (examplePath) => {
    let allMd = []
    const dataDir = fs.readdirSync(examplePath);
    dataDir.forEach((files) => {
        const filePath = path.join(examplePath, files);
        if (extensionIdentifier(filePath) === '.md') {
            allMd.push(filePath);

        } else if (isDir(filePath) === true) {
            allMd = allMd.concat(readDir(filePath));
        }
    });
    return allMd = []
}
console.log(readDir(examplePath));