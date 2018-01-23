var arr =[ 
    { start: '肃宁', end: '长沙' },
    { start: '沧州', end: '任丘' },
    { start: '任丘', end: '肃宁' },
    { start: '长沙', end: '武汉' },
    { start: '武汉', end: '上海' },
    { start: '北京', end: '沧州' }
    
 ]
var startarr= arr.map((e,l)=>{
    return e.start;
});
var endarr =arr.map((e,l)=>{
    return e.end
});
var arr2 = [];
for(var i=0;i<startarr.length;i++){
    if(endarr.indexOf(startarr[i])==-1){
       let a= arr.filter((e,t)=>{
            return e.start == startarr[i]
        })
        arr2.push(a[0])
    }
}

for(var i=0;i<arr.length;i++){
    let t = arr2[arr2.length-1];
    p(t.end,arr)
}

function p(t,arr){
    var tt = arr.filter((e)=>{
        return e.start ==t
    });
    if(tt.length==1){
        arr2.push(tt[0])
    }
}
console.log(arr2)