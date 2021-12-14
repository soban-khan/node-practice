const htttp = require('http')

const server = htttp.createServer((req, res) => {
    console.log('request end')
    res.end('hello world')
})

server.listen(5000, () => {
    console.log('server listening on port:5000')
})