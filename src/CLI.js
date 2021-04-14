#!/usr/bin/env node
 // Grab provided args.
const mdLinks = require('./index');
const arguments = process.argv;
// console.log(`Hello World ${args}`);
// console.log(args);
// console.log(args[2]);
// const argv = process.argv;
// console.log(argv);
const newAbsolutePath = process.argv[2];
// console.log(newPath);
if (newAbsolutePath && !arguments[3]) {
    mdLinks(newAbsolutePath).then(response => response.forEach(element => {
        console.log(newAbsolutePath, element.href, element.text)
    }))
} else if (newAbsolutePath && arguments.includes('--validate') && !arguments[4]) {
    mdLinks(newAbsolutePath, { validate: true }).then(response => response.forEach(element => {
        console.log(newAbsolutePath, element.href, element.text, element.Status, element.StatusMessage)
    }))
} else if (newAbsolutePath && arguments.includes('--stats') && !arguments[4]) {
    mdLinks(newAbsolutePath, { validate: true }).then(response => {
        const gettingLinks = response.map(element => (element.href));
        // console.log(gettingLinks, gettingLinks.length); 
        const preUnique = new Set(gettingLinks) //returns object
        const unique = [...preUnique] //parametro rest
        console.log(`total: ${gettingLinks.length}\nunique: ${unique.length}`)
    })
} else if (newAbsolutePath && arguments.includes('--validate') && arguments.includes('--stats') && !arguments[5]) {
    mdLinks(newAbsolutePath, { validate: true }).then(response => {
        const gettingLinks = response.map(element => (element.href));
        const preBroken = response.map(element => (element.Status));
        const arrayBroken = preBroken.map(element => {
            if (element === 200) {
                return 0;
            } else {
                return 1;
            }
        })
        const reduceBroken = (accumulator, currentValue) => accumulator + currentValue;
        const broken = arrayBroken.reduce(reduceBroken);
        console.log(broken);
        // console.log(gettingLinks, gettingLinks.length);
        const preUnique = new Set(gettingLinks) //returns object
        const unique = [...preUnique] //parametro rest
        console.log(`total: ${gettingLinks.length}\nunique: ${unique.length}\nbroken: ${broken}`)
    })
}