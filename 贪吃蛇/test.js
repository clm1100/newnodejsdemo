// var arr = [
//     [3, 2, 'red', null], //蛇头
//     [2, 2, 'blue', null],
//     [1, 2, 'blue', null]
// ]

// var length = arr.length - 1;
// for (var i = length; i > 0; i--) {
//     console.log(i)
//     arr[i][0] = arr[i - 1][0];
//     arr[i][1] = arr[i - 1][1];
// }
// console.log(arr)

// var o = {};
// var prototype = Object.getPrototypeOf(o);
// console.log(prototype === Object.prototype); // return true

// // 部分浏览器有效
// var o2 = {};
// console.log(o2.__proto__ === Object.prototype); // return true

function sum(a,b){
    console.log(a,b)
}
sum.call(null,1,2);
sum.apply(null,[1,2])
sum.bind(null,1,2)()
sum.bind(null,1)(2)