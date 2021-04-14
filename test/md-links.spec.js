const { mdLinks } = require('../src/index.js');

describe('mdLinks', () => {
    test('should not pass', () => {
        const mdLinksTest = mdLinks('C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test', { validate: false });
        const outputFalse = [{
                href: 'https://www.facebook.com',
                text: 'Facebook',
                file: 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\holaMundo\\new\\file.md'
            },
            {
                href: 'https://bad.exampl',
                text: 'xzxz',
                file: 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\holaMundo\\new\\file.md'
            },
            {
                href: 'http://www.facebook.com',
                text: 'cosasRaras',
                file: 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\holaMundo\\new\\file.md'
            },
            {
                href: 'https://www.youtube.com',
                text: 'Youtube',
                file: 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\read-me\\read-me.md'
            },
            {
                href: 'https://www.youtube.com',
                text: 'Youtube',
                file: 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\read-me\\read-me.md'
            },
            {
                href: 'https://es.wikipedia.org/wiki/Markdown',
                text: 'Markdown',
                file: 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\readme.md'
            }
        ]
        mdLinksTest.then(value => {
            expect(value).toEqual(outputFalse);
        })
    })
});