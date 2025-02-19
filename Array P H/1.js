
function newArray(array){
    if(Array.isArray(array)){
        return "Yes it is Array";
    }
    else
    {
        return "Not Array";
    }
}

const array = [11,2,33,44,55,66]
//console.log(array);
console.log(newArray(array)); 

array.push(99);
//console.log(array);

const array1 = 56;
console.log(newArray(array1)); 