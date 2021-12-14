const {
    readFile
} = require('fs')

console.log('starting first task')

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) console.log(err)
    console.log(result)
    console.log('done with first task')
})

console.log('starting next task')