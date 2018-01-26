var removeElements = function(head, val) {
    for(var i =0;i<arr.length;i++){
        if(arr[i]==val){
            arr.splice(i,1);
            i--
        }
    }
    return head;
};
var arr = [1,2,3,4,6,7,8,9,6]
console.log(removeElements(arr,6))