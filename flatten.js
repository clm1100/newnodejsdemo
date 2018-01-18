var arr = [1,2,3,[3,3,3,[5,4,5,6,6,7,8]]];
var newarr = [];
function flatten (arr){
    for(var i=0;i<arr.length;i++){
        if(!Array.isArray(arr[i])){
        console.log(arr[i])  
            newarr.push(arr[i])
        }else{
            flatten(arr[i])
        }
    }
    return newarr;
}
console.log(flatten(arr));