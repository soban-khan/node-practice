const {
    readFileSync,
    writeFileSync,
    fstat
} = require('fs')
// const fs = require('fs')
// fs.readFileSync

console.log('start')

const first = readFileSync('./content/first.txt', 'utf-8')
console.log(first)

const second = readFileSync('./content/second.txt', 'utf-8')
console.log(second)

//writing without append
// writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`)

//to append in a file
// we need third argument

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {
    flag: 'a'
})

console.log('done with this task')
console.log('starting with next one')