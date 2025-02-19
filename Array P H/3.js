
// for(let i =0 ; i<5; i++){
// for(let j =0 ; j<5; j++){
//     for(let k =0 ; k<5; k++){
//         console.log(i,j,k);
//     }
// }
// }

function newArray(array){
    if(Array.isArray(array)){
        return "Yes it is Array";
    }
}

array = [1,2,3,4,5,6,7,8,9,10];
console.log(newArray(array));
