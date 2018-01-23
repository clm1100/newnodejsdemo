"use strict";
var path = require('path');
var fs = require('fs');
let strarr = [];

function sleep(name) {
    return new Promise(function (resolve, reject) {
        fs.stat(path.join(__dirname, name), (err, data) => {
            let size = (data.size / (1024 * 1024)).toFixed(1);
            let str = name.substring(0, name.indexOf(".avi")) + '=====' + size + 'Mb' + '\r\n';
            resolve(str);
        })
    })
}

fs.readdir(path.join(__dirname), function (err, files) {
    let arrs = files.filter(e => {
        return e.indexOf('avi')!= '-1'
    })
   let arrs2 =  arrs.map((e,i)=>{
       return sleep(e);
   });
   Promise.all(arrs2).then((results)=>{
       console.log(results)
   })
})

