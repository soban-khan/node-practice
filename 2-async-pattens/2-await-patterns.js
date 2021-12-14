const {
    readFile,
    writeFile
} = require('fs').promises

const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 // console.log(err)
//                 reject(err)
//                 // return
//             } else {
//                 // console.log(data)
//                 resolve(data)
//             }

//         })
//     })
// }

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf-8')
        const second = await readFile('./content/second.txt', 'utf-8')
        await writeFile('./content/result-mind-grenade.txt', `This is awesome ${first}:  ${second}`, {
            flag: 'a'
        })
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()
// getText('./content/first.txt').then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })