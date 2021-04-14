jest.mock('axios');
const { validatedLink } = require('../src/api.js');
const axios = require('axios');
describe('validatedLink', () => {
    test('should show an output of 5 items(href,text, file, status and statusMessage)', () => {
        const path = {
            href: 'https://es.wikipedia.org/wiki/Markdown',
            text: 'Markdown',
            file: 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\readme.md'
        }
        const finalOutput = {
            href: 'https://es.wikipedia.org/wiki/Markdown',
            text: 'Markdown',
            file: 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\readme.md',
            Status: 200,
            StatusMessage: 'ok'
        }
        const axiosResponse = {
            status: 200,
            statusText: 'ok'
        }
        axios.get.mockResolvedValue(axiosResponse)
        return validatedLink(path).then((data) => {
            expect(data).toEqual(finalOutput)
        });
    })
    test('should show ERROR output', () => {
        const errorPath = {
            href: 'https://bad.exampl',
            text: 'xzxz',
            file: 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\holaMundo\\new\\file.md'
        }
        const errorOutput = {
            href: 'https://bad.exampl',
            text: 'xzxz',
            file: 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\holaMundo\\new\\file.md',
            Status: 'ERROR LINK',
            StatusMessage: 'FAIL'
        }
        const axiosErrorResponse = {}
        axios.get.mockRejectedValue(axiosErrorResponse)
        return validatedLink(errorPath).then((data) => {
            expect(data).toEqual(errorOutput)
        });
    })
    test('should show FAIL 404 output', () => {
        const failPath = {
            href: 'https://httpstat.us/404',
            text: 'xzxz',
            file: 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\holaMundo\\new\\file.md'
        }
        const failOutput = {
            href: 'https://httpstat.us/404',
            text: 'xzxz',
            file: 'C:\\Users\\maria\\Documents\\LIM014-mdlinks\\md_test\\holaMundo\\new\\file.md',
            Status: 404,
            StatusMessage: 'FAIL'
        }
        const axiosFailResponse = {
            response: {
                status: 404,
                statusText: 'FAIL',
            }
        }
        axios.get.mockRejectedValue(axiosFailResponse)
        return validatedLink(failPath).then((data) => {
            expect(data).toEqual(failOutput)
        });
    })
});