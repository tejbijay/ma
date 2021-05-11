const fs = require("fs");



//creating a new file. if new.txt already exists, then the text adds to the file and if
//the file doesn't exist, then it will create a new file and add the text
// fs.writeFileSync("new.txt","this is testing");

//this is over write the text
// fs.writeFileSync("new.txt","this this this is testing");

// fs.appendFileSync("new.txt"," this is second line");

// const show = fs.readFileSync("new.txt");

// ori = show.toString();

// console.log(ori);


// fs.renameSync('old.txt', 'new.txt');

// fs.mkdirSync("Thapa");
// fs.writeFileSync("./Thapa/bio.txt","one","utf-8");

// const show = fs.readFileSync("./Thapa/bio.txt","utf-8");


// console.log(show);

// fs.unlinkSync("./Thapa/bio.txt");

// fs.rmdirSync("Thapa");


//synchronous ends here

// ********************

// asyc starts here

// fs.writeFile("bio.txt","this is first testing",(err)=>{
//     console.log("successful");
// })

// fs.appendFile("bio.txt","this is appending testing",(err)=>{
//     console.log("appending successful");
// });

// fs.readFile("bio.txt","utf8",(err,data)=>{
//     console.log(data);
// });


// fs.mkdir("tej",(er)=>{
//     console.log("done");
// });

// fs.writeFile("./tej/tej.txt","this is first testing",(err)=>{
//     console.log("successful");
// });


// fs.appendFile("./tej/tej.txt","this is second testing",(err)=>{
//     console.log("done");
// });

// fs.readFile("./tej/tej.txt","utf8",(err,data)=>{
//     console.log(data);
// });
// console.log("this is third testing");

// fs.unlink("./tej/tej.txt",(err)=>{
//     console.log("done");
// });


// fs.rmdir("./tej",(err)=>{
//     console.log();
// })



// fs.mkdir("tej",(err)=>{
//     console.log();
// });

// fs.writeFile("./tej/tej.txt","defrv",(err)=>{
//     console.log();
// });

// fs.rmdir("./tej",(err)=>{
//     console.log();
// })

// fs.unlink("./tej/tej.txt",(err)=>{
//     console.log();
// });


// fs.readFile("tej.txt","utf8",(err,data)=>{
//         console.log(data);
//         console.log(err);
// });


// fs.writeFile("try.js","",(err)=>{
//     console.log();
// });

// fs.writeFileSync("ope.js","");


// fs.mkdirSync("npmMod");


// fs.writeFileSync("./npmMod/index.js","");


// fs.unlinkSync("./npmMod/ndex.js");



// fs.mkdirSync("modwrapper");

fs.writeFileSync("./modwrapper/index.js","");