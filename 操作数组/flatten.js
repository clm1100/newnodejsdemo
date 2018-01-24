var arr = [1, 2, 3, [3, 3, 3, [5, 4, 5, 6, 6, 7, 8]],
    [333, 4444]
];

// 第三种放到闭包中

function product() {
    // 1、创建一个空数组,
    var newarr = [];
    ///2、并且返回一个函数,函数参数为要拍平的数组
    return function flatten(arr) {
        // 3、循环数组，判断每一项,不为输的话将其塞入newarr
        // 若为数组,递归调用 faltten,并将结果与newarr合并
        for (var t of arr) {
            if (!Array.isArray(t)) {
                newarr.push(t);
            } else {
                newarr.concat(flatten(t))
            }
        }
        return newarr
    }
}

var flatten = product();
console.log(flatten(arr))


// // 第二种方式
function flatten(arr){
  return  arr.reduce(function(pre,cur){
        if(!Array.isArray(cur)){
            // pre.push(cur);
            return [...pre,cur];
        }else{
            // console.log(pre);
            // return pre.concat(flatten(cur))
            return [...pre,...flatten(cur)]
        }
    },[])
}

console.log(flatten(arr))


// var flatten = function(array){
//     return array.reduce(function(previous, val){
//          if(!Array.isArray(val)){
//              return (previous.push(val), previous);
//          }
//          return (previous.concat(flatten(val)), previous);
//     }, []);
//  }


//  console.log(flatten(arr))






















// var newarr = [];

// // function flatten(arr) {
// //     for (var i = 0; i < arr.length; i++) {
// //         if (!Array.isArray(arr[i])) {
// //             console.log(arr[i])
// //             newarr.push(arr[i])
// //         } else {
// //             flatten(arr[i])
// //         }
// //     }
// //     return newarr;
// // }
// // console.log(flatten(arr));