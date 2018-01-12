"use strict";
var path = require('path');
var fs = require('fs');

fs.readdir(path.join(__dirname), function (err, files) {
    let arrs = files.filter(e => {
        return e.indexOf('avi') != '-1'
    })

    let arr3 = []
    let count = 0;
    function check() {
        if (count == arrs.length) {
            console.log(arr3)
        }
    }
    function read(name) {
        fs.stat(path.join(__dirname, name), (err, data) => {
            let size = (data.size / (1024 * 1024)).toFixed(1);
            let str = name.substring(0, name.indexOf(".avi")) + '=====' + size + 'Mb' + '\r\n';
            arr3.push(str)
            count++
            check()
        })
    }
    for(var i =0;i<arrs.length;i++){
        read(arrs[i])
    }
})