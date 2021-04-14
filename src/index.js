const api = require('./api');


const path = require('path');
const fs = require('fs');

const exampleAbsolutePath = 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test';
const exampleRelativePath = 'md_test\\holaMundo';


const mdLinks = (path, option = { validate: false }) => new Promise((resolve, reject) => {
    const absolutePath = api.absolutePath(path);
    const validatePath = api.validateIfPathExists(path);
    const errorAlert = 'The path is not valid. Try with another one.'

    if (validatePath === false) {
        reject(new Error(errorAlert));
    } else {
        const linksArray = api.getMdLinks(absolutePath);

        if (option.validate === true) {
            const linksArrayValidated = api.validatedLinkArray(linksArray);
            resolve(Promise.all(linksArrayValidated));

            //TO SEE IN CONSOLE
            Promise.all(linksArrayValidated).then((values) => {
                // console.log(values);
            });
        } else {
            resolve(linksArray);
        }
    }
});
mdLinks(exampleAbsolutePath, { validate: true })
    .then((values) => {
        console.log(values);
    }).catch((err) => console.log(err))


module.exports = { mdLinks }