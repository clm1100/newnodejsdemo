var arr = [1,2,3,4,5,5,5,5,1,1,2,2,3,4,5,6,7,5,3];

// function filterreduce(arr){
//    return arr.reduce((pre,cur)=>{
//         if(pre.indexOf(cur)==-1){
//          return   [...pre,cur]
//         }else{
//             return  pre
//         }
//     },[]);
// }
// var newarr = filterreduce(arr);
// console.log(newarr)


// function filterarr(arr){
//     let newarr = [];
//     for(var i = 0;i<arr.length;i++){
//         if(newarr.indexOf(arr[i])===-1){
//             newarr.push(arr[i])
//         }
//     }
//     return newarr
// }
// var newarr = filterarr(arr);
// console.log(newarr)

// function fileterhash(arr){
//     var obj = {};
//     var newarr = [];
//     for(var i=0;i<arr.length;i++){
//         console.log(obj[arr[i]])
//         if(obj[arr[i]]==undefined){
//             obj[arr[i]]={};
//             obj[arr[i]].value = arr[i];
//             obj[arr[i]].count = 0;
//             newarr.push(arr[i])
//         }else{
//             obj[arr[i]].count =obj[arr[i]].count+1;
//         }
//     }
//     return newarr
// }

// var newarr = fileterhash(arr);
// console.log(newarr)

// function forarr(arr){
//     let newarr = [...arr]
//     for(var i=0;i<newarr.length;i++){
//         for(var j=i+1;j<newarr.length;j++){
//             if(newarr[i]===newarr[j]){
//                 newarr.splice(j,1);
//                 j--
//             }
//         }
//     }
//     return newarr;
// }
// console.log(forarr(arr))

// function unique(arr){
//     return Array.from(new Set(arr));
// }
// function unique(arr){
//     return [...new Set(arr)];
// }

// console.log(unique(arr))

// function unique(arr){
//     var obj = {};
//     return arr.filter(e=>{return !obj[e]&&(obj[e]=1)})
// }

// console.log(unique(arr))

let ar = arr.map((e)=>{
    if(e<4){
        return e
    }
})

console.log(ar)