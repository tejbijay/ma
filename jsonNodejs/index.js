const fs = require('fs');

const bioData = {
    name:"tej singh",
    age : 25,
    email : "tej.bijay@gmail.com",
};

const first = JSON.stringify(bioData);

//  const sec = JSON.parse(first);

fs.writeFile("just1.json",first,(err)=>{

    // console.log("done");

});

fs.readFile("just1.json","utf-8",(err,data)=>{
    
    const orgData = JSON.parse(data);

    console.log(orgData);
    console.log(data);
});



// console.log(sec);

