setInterval(() => {
    console.log('hello world')
}, 2000)

console.log('i will be first')

//we don't exit from this automatically
//why? because setInterval is async
//every 2 sec event loop will push this to main thread