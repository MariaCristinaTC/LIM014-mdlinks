const path = require('path');
const fs = require('fs')
    // const marked = require('marked')
    // const jsdom = require("jsdom");
const examplePath = 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\readme.md';
// is it absolute?
const validateAbsolutePath = (examplePath) => {
    path.isAbsolute(examplePath) === true ? examplePath : path.resolve(examplePath)

}
const absolutePath = validateAbsolutePath(examplePath)
    // console.log(absolutePath)

// Exist?
const validateIfPathExists = (examplePath) => {
    fs.existsSync(examplePath)
    console.log(fs.existsSync(examplePath))

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


// Identificar si la  ruta es File o Directorio
const isDir = (examplePath) => {
    const stats = fs.statSync(examplePath);
    const isDirectory = stats.isDirectory(examplePath);
    return isDirectory;
};
console.log(isDir);

// Identificar la extensión del archivo
const extMD = (examplePath) => path.extname(examplePath);
console.log(extMD(examplePath));

const readDir = (examplePath) => {
    let allMD = [];
    const directoryObjects = fs.readdirSync(examplePath);
    console.log(directoryObjects);
    directoryObjects.forEach((files) => {
        const filePath = path.join(examplePath, files);
        if (extMD(filePath) === '.md') {
            allMD.push(filePath);
        } else if (isDir(filePath) === true) {
            allMD = allMD.concat(readDir(filePath));
        }
    });
    return allMD;
};

console.log(readDir('C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test'));


// Leyendo el archivo

const readArchive = (examplePath) => fs.readFileSync(examplePath, 'utf-8');
const joining = (examplePath) => {
    const saveValue = readDir(examplePath)
    const someArrays = [];
    saveValue.forEach((element) => {
        const read = readArchive(element);
        someArrays.push(read);
    })
    return someArrays;
};
console.log(joining('C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test'));
// console.log(readArchive(examplePath));
//contiene links?

const existsLink = fs.existsSync(examplePath);
console.log('existLink ' + existsLink);

//trying to read links + verified them

const matchs = /\[(.+)\]\((https?:\/\/[^\s]+)(?: "(.+)")?\)|(https?:\/\/[^\s]+)/ig.exec(text);

console.log(matchs);