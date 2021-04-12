const api = require('./api');


const path = require('path');
const fs = require('fs');

const exampleAbsolutePath = 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test';
const exampleRelativePath = 'md_test\\holaMundo';


const mdLinks = (path, option = { validate: false }) => new Promise((resolve, reject) => {
    const absolutePath = api.absolutePath(path);
    const validatePath = api.validateIfPathExists(path);

    if (validatePath === false) {
        reject('The path is not valid. Try with another one.');
    } else {
        const linksArray = api.getMdLinks(absolutePath);

        if (option.validate === true) {
            const linksArrayValidated = api.validatedLinksArray(linksArray);
            resolve(Promise.all(linksArrayValidated).then(console.log(linksArrayValidated)))


        } else {
            resolve(linksArray);
        }
    }
});

console.log(mdLinks(exampleRelativePath, { validate: true }));

module.exports = mdLinks;