
function identifyNew(allitems){

    let unique = []

    for(let items of  allitems){
        if(unique.includes(items) === false){
           unique.push(items)
        }
    }
    return unique;
}

array=['rahul' , 'abul' , 'kasem' , 'rohim' , 'karim' , 'rahul' , 'abul']

let sendFile = identifyNew(array)
console.log(sendFile)