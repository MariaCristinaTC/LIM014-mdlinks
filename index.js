const path = require('path');
const fs = require('fs');


const examplePath = 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test';

// is it absolute?
const absolutePath = (x) => {
        return path.isAbsolute(x) === true ? x : path.resolve(x)
    }
    //console.log(absolutePath(examplePath));

// Exist?
const validateIfPathExists = (x) => {
        return fs.existsSync(x)
    }
    //console.log(validateIfPathExists(examplePath))


// Identificar si la  ruta es File o Directorio
const isDir = (examplePath) => {
    const stats = fs.statSync(examplePath);
    const isDirectory = stats.isDirectory(examplePath);
    return isDirectory;
};
//console.log(isDir);

// Identificar la extensión del archivo
const extMD = (examplePath) => path.extname(examplePath);
//console.log(extMD(examplePath));

const readDir = (x) => {
    let allMD = [];
    const directoryObjects = fs.readdirSync(x);
    //console.log(directoryObjects);
    directoryObjects.forEach((files) => {
        const filePath = path.join(x, files);
        if (extMD(filePath) === '.md') {
            allMD.push(filePath);
        } else if (isDir(filePath) === true) {
            allMD = allMD.concat(readDir(filePath));
        }
    });
    return allMD;
};
//console.log(readDir(examplePath));


// Leyendo el archivo

const readFile = (x) => fs.readFileSync(x, 'utf-8');
// console.log(readArchive(examplePath));

const joining = (x) => {
    const saveValue = readDir(x)
    const someArrays = [];
    saveValue.forEach((element) => {
        const read = readFile(element);
        someArrays.push(read);
    })
    return someArrays;
};
//console.log(joining(x))


// const existsLink = fs.existsSync(examplePath);

const regx = /\[([\w\s\d.()]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg;
const regxLink = /\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg;
const regxText = /\[([\w\s\d.()]+)\]/g;

const getMdLinks = (x) => {
    const linksArr = [];
    const directoryObjects = readDir(x);

    directoryObjects.forEach((myfile) => {
        //console.log(myfile)
        const fileRead = fs.readFileSync(myfile, 'utf-8');
        const links = fileRead.match(regx);
        //console.log(links)
        if (links) { // si se llega a encontrar un match
            links.forEach((link) => {
                const myhref = link.match(regxLink).join().slice(1, -1); // con join vuelvo string mi array
                const mytext = link.match(regxText).join().slice(1, -1); // con el slice corto () []
                const linksObj = {
                    href: myhref,
                    text: mytext,
                    file: myfile,
                };

                linksArr.push(linksObj);
            });
        }
    });
    return linksArr;

};

console.log(getMdLinks(examplePath));