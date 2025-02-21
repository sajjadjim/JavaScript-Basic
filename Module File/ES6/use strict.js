"use strict"
let name = 20;
//console.log(name);

let func = function( a , b){
    return a + b;
}
console.log(func( 11, 33));

let func2 = ( a ,b ) => a + b
console.log("The sum of " +"and" + " number :" + func2(5,6));