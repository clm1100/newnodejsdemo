exports.a= 100
console.log(this)
console.log(global)
// var foo = ()=>{
    // 指向本文件的module.exports,而且以后都不会变
//     console.log(this)
// }
// foo();

// var bar = function(){
    // this指向global,会变化
//     console.log(this)
// }
// bar()

// var obj = {
//     fn:foo,
//     fn2:bar
// }
// obj.fn()
// obj.fn2()