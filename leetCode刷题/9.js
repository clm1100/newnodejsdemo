var a = '12345678987654321';

// function ispalindrome(str){
//     return str.split('').reverse().join('') == str;
// }
function ispalindrome(a){
    let {length:l} = a;
    let halfen=l%2 === 0 ?l/2:(l-1)/2;
    for(var i = 0;i<halfen;i++){
         if(a.charAt(i) !== a.charAt(l-1-i)) return false
    }
    return true
}


console.log(ispalindrome(a));