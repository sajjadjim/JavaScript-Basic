let userInput = true;
//let userInput = false;
let promise = new Promise((solve,rejected)=>{
    if(userInput){
        solve([{username:"sajjad_jim" ,email:"sajjadjim15@gmail.com"},
            {username:"Labonno", email:"salma@gmail.com"}
        ])
    }
    else{
        rejected("User access is deny !!!");
    }
})


promise.then((solve_)=>{
    console.log(solve_)
})


promise.catch((error)=>{
console.log(error)
})