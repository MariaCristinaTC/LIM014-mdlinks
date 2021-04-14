const { mdLinks } = require('../src/index.js');

describe('mdLinks', () => {
    test('should show an output of 3 items(href,text and file)', () => {
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
    test('should show an output of 5 items (href,text,file, status and statusMassage)', () => {
        const mdLinksTest = mdLinks('C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test', { validate: true });
        const outputTrue = [{
                href: 'https://www.facebook.com',
                text: 'Facebook',
                file: 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\holaMundo\\new\\file.md',
                Status: 200,
                StatusMessage: 'OK'
            },
            {
                href: 'https://bad.exampl',
                text: 'xzxz',
                file: 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\holaMundo\\new\\file.md',
                Status: 'ERROR LINK',
                StatusMessage: 'FAIL'
            },
            {
                href: 'http://www.facebook.com',
                text: 'cosasRaras',
                file: 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\holaMundo\\new\\file.md',
                Status: 200,
                StatusMessage: 'OK'
            },
            {
                href: 'https://www.youtube.com',
                text: 'Youtube',
                file: 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\read-me\\read-me.md',
                Status: 200,
                StatusMessage: 'OK'
            },
            {
                href: 'https://www.youtube.com',
                text: 'Youtube',
                file: 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\read-me\\read-me.md',
                Status: 200,
                StatusMessage: 'OK'
            },
            {
                href: 'https://es.wikipedia.org/wiki/Markdown',
                text: 'Markdown',
                file: 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\readme.md',
                Status: 200,
                StatusMessage: 'OK'
            }
        ]
        mdLinksTest.then(value => {
            expect(value).toEqual(outputTrue);
        })
    })
});