const { validateAbsolutePath, validateIfPathExists, isDir, readDir, readFile } = require('../src/api.js');

describe('mdLinks', () => {
    it('should validate if the path is absolute...', () => {
        const examplePath = 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\readme.md';
        expect(validateAbsolutePath(examplePath)).toBe(true)
    });
    it('should validate when path is false...', () => {
        const examplePath = 'C:\Users\Documents\\LIM014-mdlinks\\readme.md';
        expect(validateAbsolutePath(examplePath)).toBe(false)
    });
});
describe('Validateifpathexists is a function?', () => {
    it('should be a function', () => {
        expect(typeof validateIfPathExists).toBe('function');
    });
});

describe('isDir is a function', () => {
    it('should be a function', () => {
        expect(typeof isDir).toBe('function');
    });
    it('return one value', () => {
        expect(isDir('C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\read-me')).toEqual(true);
    });
});

describe('readDir is a function', () => {
    it('Should be a function', () => {
        expect(typeof readDir).toBe('function');
    });
    it('return one value', () => {
        expect(readDir('C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\readme.md')).toEqual(['C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\read-me\\read-me.md']);
    });
});
describe('readFile is a function?', () => {
    it('should be a function', () => {
        expect(typeof readFile).toBe('function');
    });
});
it('return a value', () => {
    expect(readArchive('C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\holaMundo\\filetext.md')).toEqual('hola mundo');
});