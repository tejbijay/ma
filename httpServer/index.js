const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{

   const data =  fs.readFileSync(`${__dirname}/userApi/userapi.json`,"utf-8");

    const objData = JSON.parse(data);

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
    else if (req.url == '/userapi'){
        res.end(objData[2].name);
        // res.end('hello from user api page');
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















