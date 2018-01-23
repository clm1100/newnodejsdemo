"use strict";
var path = require('path');
var fs  = require('fs');

// fs.readdir(path.join(__dirname), function(err,files){
//     console.log(err);
//     console.log(files);
//     var t = files.map(function(e,i){
//     	if(e.endsWith('avi')){
//     		return e.substring(0,e.indexOf(".avi"))+'\r\n';
//     	}
//     });
//     console.log("111",t);
    // fs.writeFile('./1.txt',t.join(" "),function(err){
    // 	if(!err){
    // 		console.log("ok");
    // 	}
    // })
// })

let strarr = [];
function sleep(name){
    return new Promise(function(resolve,reject){
        // setTimeout(function(){resolve("11")})
        fs.stat(path.join(__dirname,name),(err,data)=>{
            let size = (data.size/(1024*1024)).toFixed(1);
            // let size = ((data.size/(1024*1024)).toFixed(2)/(33.5/(60*8+30))/60).toFixed(2);
            let str =  name.substring(0,name.indexOf(".avi"))+'====='+size+'Mb'+'\r\n';
            // strarr.push(str);
            // let str = e.substring(0,e.indexOf(".avi"))++'\r\n'
            // console.log((data.size/(1024*1024)).toFixed(2));
            resolve(str);
        })
    })
}

async function main(arr){
    let arrmain = [];
    for(let i of arr){
       let a=  await sleep(i);
        // console.log(i)
        arrmain.push(a)
    }
    return arrmain
}

fs.readdir(path.join(__dirname), function(err,files){
    // console.log(files);
    let arrs = files.filter(e=>{
        return e.indexOf('avi')
    })
    main(arrs).then(function(data){
        console.log(data);
            fs.writeFile('./1.txt',data.join(" "),function(err){
        if(!err){
            console.log("ok");
        }
    })
    })

})