const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/')
    {
        res.end('Welcome to our home')
    }
    else if(req.url==='/user')
    {
        res.end('welcome to the user')
    }
    else
    {
        res.end('Sorry this page doesn\'t exist');
    }
})

server.listen(5000)