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
let fn = sum.bind(null,1,2)
fn()
// sum.bind(null,1)(2)


// 通常状况下Max.max的参数是逐个分开的,如 Math.max(1,2,3,4,5,6,7)
// 但是现在有一个数组需要用Math.max获取最大值该如何做呢？
//  Math.max([1,2,3,4,5,6,7])这样肯定是不行的。这就用到了apply
// let max = Math.max(1,2,3,4,5,6,7)
// let maxApply = Math.max.apply(null,[1,2,3,4,5,6,7])
// console.log(maxApply)
// let c;
// let arrayType = Object.prototype.toString.apply([])
// let objType = Object.prototype.toString.apply({})
// let stringType = Object.prototype.toString.apply("wwwww")
// let numberType = Object.prototype.toString.apply(1111)
// let nullType = Object.prototype.toString.apply(null)
// let undefinedType = Object.prototype.toString.apply(undefined)
// console.log(arrayType,objType,stringType,numberType,nullType,undefinedType)

// var arr = [2,3,6,1,2,8,9,2,9,2,7,84]

// let arr2 = arr.sort((a,b)=>{console.log(a,b);return a-b})
// console.log(arr2)