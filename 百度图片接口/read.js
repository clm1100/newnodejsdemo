
const fs  = require('fs');
const path = require('path');
let readStr = path.join('C:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\upload_62f1ef13ba94110050dc9a4836727dad');
console.log(readStr)

fs.stat(readStr,(err,data)=>{
    console.log(data)
})
