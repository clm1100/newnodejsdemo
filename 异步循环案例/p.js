"use strict";
var path = require('path');
var fs  = require('fs');

let strarr = [];
let profn = [];
function sleep(name){
    return new Promise(function(resolve,reject){
        fs.stat(path.join(__dirname,name),(err,data)=>{
            let size = (data.size/(1024*1024)).toFixed(1);
            let str =  name.substring(0,name.indexOf(".avi"))+'====='+size+'Mb'+'\r\n';
            resolve(str);
        })
    })
}

var arr = fs.readdirSync(path.join(__dirname))
arr = arr.filter(e=>{
        return e.indexOf('avi')!==-1
    })
for (var i = 0; i < arr.length; i++) {
    profn.push(sleep(arr[i]));
}
Promise.all(profn).then((data)=>{
    console.log(data)
})