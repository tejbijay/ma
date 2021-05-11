// const http = require('http');


// const server = http.createServer((req,res)=>{
    
//     res.end("hello, my name is Tej Singh Chaudhary");
// });

// server.listen(8080,'127.0.0.1',()=>{
//     console.log("server created");
// });






const http = require('http');
const chalk = require('chalk');

const server = http.createServer((req,res)=>{
    res.end("hello");
});

server.listen(8080,'127.0.0.1',()=>{
    console.log(chalk.green("server has been created"));
});
















