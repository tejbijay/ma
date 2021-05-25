

// const http = require('http');
// const chalk = require('chalk');

// const server = http.createServer((req,res)=>{
//     if(req.url == "/"){
//         res.end("this is home page");
//     }
//     else if 
//     (req.url == "/about"){
//         res.end("this is about page");
//     }
//    else{
//        res.statusCode(404);
//     //    res.end("page doesnt exist");
//    }
// });

// server.listen(8080,'127.0.0.1',()=>{
//     console.log(chalk.green("server has been created"));
// });








// const http = require('http');
// const chalk = require('chalk');
// const { url } = require('inspector');

// const server = http.createServer((req,res)=>{
//     console.log(req.url);
//     if(req.url == '/'){
//         res.end("hello, my name is tej singh chuahdary");
//     }
//      else if (req.url == '/student'){

//                 res.end('this is student page');
//     }
//     else
//   {
//       res.writeHead(404) ,{ "content-type":"text/html"};
//       res.end("404 error, page not found")
//   }
// });

// server.listen(8080,'127.0.0.1',()=>{
//     console.log(chalk.red.bgGreen("server has been created"));
// });



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















