// const fs = require('fs');
// let readable = fs.createReadStream('./zip.zip');
// readable.on('data',(chunk)=>{
//     console.log(chunk.length/1024)
// })

const http = require('http');
const path = require('path');
const fs = require('fs');

let options = {
    hostname : 'www.baidu.com',
    port : 80
}

let req = http.request(options,(res)=>{

    res.on('data',(chunk)=>{
        console.log(chunk.length);
    });
    res.on('end',()=>{
        console.log(" 结束了")
    });
});

req.end((data)=>{
    console.log("over",data)
});