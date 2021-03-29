const mdLinks = require('../index.js');


describe('mdLinks', () => {

    it('should validate if the path is absolute...', () => {
        const examplePath = 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\readme.md';
        expect(validateAbsolutePath(examplePath)).toBe(true)
    });
    it('should validate when path is false...', () => {
        const examplePath = 'C:\Users\Documents\\LIM014-mdlinks\\readme.md';
        expect(validateAbsolutePath(examplePath)).toBe(false)
    });
    it('return something', () => {
        const data =
    })
});