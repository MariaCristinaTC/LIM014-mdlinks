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
            const linksArrayValidated = api.validatedLinkArray(linksArray);
            resolve(Promise.all(linksArrayValidated));

            //TO SEE IN CONSOLE
            // Promise.all(linksArrayValidated).then((values) => {
            //     console.log(values);
            // });


        } else {
            resolve(linksArray);
        }
    }
});

console.log(mdLinks(exampleAbsolutePath, { validate: true }));

module.exports = mdLinks;