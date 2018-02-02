// const direction = [
//     [-1, 0],
//     [1, 0],
//     [0, -1],
//     [0, 1],
// ]

// direction.map(([x,y])=>{
//     console.log(x,y)
// })

let arrfill = row => new Array(row.length).fill(false);

let arr = [0,0,0,0,0,0,1,1,1,1];

let arr2 = arrfill(arr)
console.log(arr2)