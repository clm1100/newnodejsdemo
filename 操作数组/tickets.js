var arr =[ 
    { start: '肃宁', end: '长沙' },
    { start: '沧州', end: '任丘' },
    { start: '任丘', end: '肃宁' },
    { start: '长沙', end: '武汉' },
    { start: '武汉', end: '上海' },
    { start: '北京', end: '沧州' }
    
 ]
// let a = arr.filter((e,i,arr)=>arr.map(v=>v.end).indexOf(e.start) == -1);

// let b = arr.reduce((pre,cur,index,arr)=>{
//    return pre.concat(arr.filter((e,i)=>{
//        return e.start == pre[pre.length-1].end;
//     }));

// },a)

// console.log(b);
// 计算出每趟车的起始站
var startarr= arr.map((e,l)=>{
    return e.start;
});
// 计算出每趟车的终点站
var endarr =arr.map((e,l)=>{
    return e.end
});
// 定义一个新数组
var arr2 = [];
// 利用旅行目的的起始站绝对不会出现在终点站里面,将其筛选出来,填充进数组;
for(var i=0;i<startarr.length;i++){
    if(endarr.indexOf(startarr[i])==-1){
       let a= arr.filter((e)=>{
            return e.start == startarr[i]
        })
        arr2.push(a[0])
    }
}

for(var i=0;i<arr.length;i++){
    let ticket = arr2[arr2.length-1];
    var tt = arr.filter((e)=>{
        return e.start ==ticket.end
    });
    if(tt.length==1){
        arr2.push(tt[0])
    }
}

console.log(arr2)