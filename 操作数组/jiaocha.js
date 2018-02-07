var arr =[
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,1,0,0],
    [0,0,0,0,1,0,0,0,1,0,0],
    [0,0,0,0,1,0,0,0,1,0,0],
    [0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
] ;


function doit([x,y]){
    // 定义四个方向：
    var queue = [[x,y]];
    var direction = [
        [-1,0],
        [1,0],
        [0,-1],
        [0,1]
    ]
    // 定义一个存储对象
    var arrobj = arr.map(a=>a.map(e=>false))
    
    while(queue.length>0){
        // 循环一次去除一项，这便是核心了
        var [x,y ] =  queue.pop();
        console.log(x,y)
        console.log(arr[x][y])
        // 循环四个方向上下左右，将与其值相等的坐标存入数组，并标记,
        // 此处变动一下就是扫了的核心算法了扫雷是周围所有斜着相连的也计算在内
        for(var i = 0;i<direction.length;i++){
            var newx= x+direction[i][0];
            var newy = y+ direction[i][1];
            if(arr[newx][newy]==1&&arrobj[newx][newy]==false){
                queue.push([newx,newy]);
                arrobj[newx][newy] = true
            }
        }
    }
    // 定义结果数组
    var result = [];
    // 循环遍历从存储对象中将结果取出来
    for(var i=0;i<arrobj.length;i++){
        for(var j=0;j<arrobj[i].length;j++){
            if(arrobj[i][j]==true){
                result.push([i,j])
            }
        }
    }
    return result
    
}
var t =doit([3,4]);
console.log(t)