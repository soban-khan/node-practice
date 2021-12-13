const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req)
    if (req.url === '/') {
        res.end('welcome to home page')
    } else if (req.url === '/about') {
        res.end('here is our story')
    }
    // res.write('welcome to home page')
    else {
        res.end(
            `<h1>Oops!</h1>
        <p>we cant find your page</p>`
        )
    }
})

server.listen(5000)