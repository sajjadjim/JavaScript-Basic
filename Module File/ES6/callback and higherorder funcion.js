// Callback and Higher Order function 
let display  =(somethings) =>{
    console.log(somethings)
}

let higherOrderfunction = ( name , age , callBackfunction) => {
    const details = `My name is ${name}, I am ${age}  old and`
    callBackfunction(details)
}

higherOrderfunction("JIM" , 25 , display)

