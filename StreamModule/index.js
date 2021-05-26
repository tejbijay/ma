
const fs = require('fs');
const http = require('http');


const server = http.createServer();


server.on("request",(req,res)=>{

    // var fs = require('fs');
    fs.readFile('input.txt',  (err,data)=>{
        if (err) return console.error(err);
        res.end(data.toString());
    });
});

// this simply shows the data, not the actual streaming

//now below is streaming method

// - create a readable stream
// -    handle stream events ----> data, end, and errors

const rsm = fs.createReadStream("input.txt");

rsm.on('data',(chunkdata)=>{
    res.write(chunkdata);
});

rsm.on("end",()=>{
    res.end();
});

rsm.on('error',(err)=>{
    console.log(err);
    res.end("file not found");
});

server.listen(8080,"127.0.0.1",()=>{
    console.log("server is created at port 8080");
});