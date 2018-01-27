var arr = [
    [3, 2, 'red', null], //蛇头
    [2, 2, 'blue', null],
    [1, 2, 'blue', null]
]

var length = arr.length - 1;
for (var i = length; i > 0; i--) {
    console.log(i)
    arr[i][0] = arr[i - 1][0];
    arr[i][1] = arr[i - 1][1];
}
console.log(arr)