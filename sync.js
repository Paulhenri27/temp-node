const {readFileSync,writeFileSync} = require('fs');


console.log('start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf-8');

writeFileSync('./content/results.txt',`${first} ${second}`,{flag:'a'});

console.log('done');
console.log('Starting the new task');