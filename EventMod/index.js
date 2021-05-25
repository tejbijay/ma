const EventEmitter = require('events');

const event = new EventEmitter();


event.on("my name is",()=>{
    console.log("Tej");
});



event.emit("my name is");