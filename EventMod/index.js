// const EventEmitter = require('events');
// const event = new EventEmitter();
// event.on("my name is",()=>{
//     console.log("Tej");
// });
// event.emit("my name is");

const EventEmitter = require('events');
// const { emit } = require('process');


const event = new EventEmitter();


// event.on("my name is",()=>{
//     console.log("Tej");
// });


event.on("checkPage",(code,msg)=>{
    console.log(`status code is ${code} and the page is ${msg}`);
});


event.emit("checkPage",200,"ok");












