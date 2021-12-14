const {
    readFile,
    writeFile
} = require('fs').promises
// const util = require('util')

// first way
// readFile('./content/first.txt', 'utf-8', (err, data) => {
//     if (err) return
//     const first = data
//     console.log(first)
//     readFile('./content/second.txt', 'utf-8', (err, data) => {
//         if (err) return
//         const second = data
//         console.log(second)

//         writeFile('./content/test.txt', `${first} : ${second}`, () => {
//             console.log('written')
//         })
//     })
// })

// second way
// this is clearer syntax 
// we can return promise from here
// we can place our async read and write functions inside this promise
// and we can pass error in reject and data in resolve and access them using catch and then

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) reject(err)
//             resolve(data)
//         })
//     })
// }

// getText('./content/first.txt')
//     .then((data) => console.log(data))
//     .catch((err) => {
//         console.log(err)
//     })

// third way
// since we are returning promise we can set up async await
// and clear our code even further
// we will set up this function as async because we want our await to work
// now we can comment our promise resolution cose written just above (where we use then and catch)
// each time we have async approach we should wrap it in try and catch

// const start = async () => {
//     try {
//         const first = await getText('./content/first.txt')
//         console.log(first)
//         const second = await getText('./content/second.txt')
//         console.log(second)
//     } catch (error) {
//         console.log(error)
//     }
// }

// start()

//fourth way
// we can even bypass wrapper function(getText) by using module named util
// util can take a function and returns a promise
// task which our wrapper function is doing i.e. returnig promise from readFile
// we can comment our wrapper function
// and change our async await
// we should keep in mind that they are completely new functions and have predefined parameters

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async () => {
//     try {
//         const first = await readFilePromise('./content/first.txt', 'utf-8')
//         console.log(first)
//         const second = await readFilePromise('./content/second.txt', 'utf-8')
//         console.log(second)
//         await writeFilePromise('./content/result-mind-grenade.txt', `Hello : ${first} : ${second}`)
//     } catch (error) {
//         console.log(error)
//     }
// }

// start()

// now we can skip util part also
// and directly get promises while importing from fs module by using .promises

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf-8')
        console.log(first)
        const second = await readFile('./content/second.txt', 'utf-8')
        console.log(second)
        await writeFile('./content/result-mind-grenade.txt', `Hello : ${first} : ${second}`)
    } catch (error) {
        console.log(error)
    }
}

start()