// let { q } = require('./a');
// console.log(q);

// let q = require('./a');
// console.log(q.q);

// let {length:l} = "wwww"
// console.log(l)

// let {a:cc=100} = {b:3333,a:''}
// console.log(cc)


// let [a=100,b=300]= [];
// console.log(a,b)

function foo(a,b,c){
    console.log(a,b,c);
}
let arr = [3,4,5]
foo(...arr)


