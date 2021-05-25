const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url =='/'){
        res.end('this is home page');
    }
    else if(req.url == '/tej'){
        res.writeHead(200, { "content-type":"text/html"});
        res.end('this is tej page');
    }
    else if (req.url == '/singh'){
        res.end('this is singh page');
    }
    else
    {
        res.writeHead(404, { "content-type":"text/html"});
        res.end('page not found');
    }
});


server.listen(8080,'127.0.0.1',()=>{
    console.log("server has been created");
});















