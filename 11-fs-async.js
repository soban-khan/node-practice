const {
    readFile,
    writeFile
} = require('fs')
// const fs = require('fs')
// fs.readFileSync
// console.log('start')

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            // console.log('done with this')
            console.log(result)
        })
    })

})

// console.log('starting new task')