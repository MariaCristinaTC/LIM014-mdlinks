const path = require('path');
const fs = require('fs');
const axios = require('axios');
const examplePath = 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test';
const regexFull = /\[([\w\d.()]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg;
const regexLink = /\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg;
const regexText = /\[([\w\d.()]+)\]/g;

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


// Identify if its a directory or a file
const isDir = (examplePath) => {
    const stats = fs.statSync(examplePath);
    const isDirectory = stats.isDirectory(examplePath);
    return isDirectory;
};
//console.log(isDir);

// Identify file extension
const extensionMD = (examplePath) => path.extname(examplePath);
//console.log(extMD(examplePath));

const readDir = (x) => {
    let allMD = [];
    const directoryObjects = fs.readdirSync(x);
    //console.log(directoryObjects);
    directoryObjects.forEach((files) => {
        const filePath = path.join(x, files);
        if (extensionMD(filePath) === '.md') {
            allMD.push(filePath);
        } else if (isDir(filePath) === true) {
            allMD = allMD.concat(readDir(filePath));
        }
    });
    return allMD;
};
//console.log(readDir(examplePath));
// read each file
const readFile = (x) => fs.readFileSync(x, 'utf-8');
// read every file in a directory
const joining = (x) => {
    const saveValue = readDir(x)
    const someArrays = [];
    saveValue.forEach((element) => {
        const read = readFile(element);
        someArrays.push(read);
    })
    return someArrays;
};



const getMdLinks = (x) => {
    const linksArr = [];
    const directoryObjects = readDir(x);

    directoryObjects.forEach((myfile) => {
        const fileRead = fs.readFileSync(myfile, 'utf-8');
        const links = fileRead.match(regexFull);
        if (links) {
            links.forEach((link) => {
                const myhref = link.match(regexLink).join().slice(1, -1);
                const mytext = link.match(regexText).join().slice(1, -1);

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
//console.log(getMdLinks(examplePath));




//Return an extended (validated) link object
const validatedLink = (object) => axios.get(object.href)
    .then((response) => {
        if (response.status == 200) {

            return {
                href: object.href,
                text: object.text,
                file: object.file,
                Status: response.status,
                StatusMessage: response.statusText,
            };
        }
    })
    .catch((error) => {
        if (error.response) {

            return {
                href: object.href,
                text: object.text,
                file: object.file,
                Status: error.response.status,
                StatusMessage: 'FAIL',
            };

        } else {
            return {
                href: object.href,
                text: object.text,
                file: object.file,
                Status: 'ERROR LINK',
                StatusMessage: 'FAIL',
            };
        }
    });

//Return an array of validated link objects

const validatedLinkArray = (linksArray) => {
    const listLinks = [];
    linksArray.forEach((x) => {
        const newObject = validatedLink(x);

        listLinks.push(newObject);
    });

    return (listLinks);
};
const testObject = {
    href: 'https://www.google.com',
    text: 'Google',
    file: 'myfile',
};
//console.log(validatedLink(testObject).then((res) => console.log(res)));
module.exports = {
    absolutePath,
    validateIfPathExists,
    isDir,
    readDir,
    readFile,
    getMdLinks,
    validatedLink,
    validatedLinkArray
}