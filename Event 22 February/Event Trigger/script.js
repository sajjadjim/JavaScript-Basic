// type 1
function makeRed(){
    document.body.style.backgroundColor = 'red'
}
// create function and Call function on the HTML file 
function makeBlue(){
    document.body.style.backgroundColor = 'lightblue'
}

// Type 2
// create function here and also call the html By using ID Tag call 
// yellow Button function 
const yellowBTN = document.getElementById('yellow-btn');
// style  given the button 
yellowBTN.style.border ='2px solid black'
yellowBTN.style.borderRadius = '5px'
yellowBTN.style.padding = '5px'
yellowBTN.style.cursor = 'pointer'
// create a function for Onclick 
yellowBTN.onclick = function makeYellow(){
document.body.style.backgroundColor = 'yellow'
}

// reset Button 
const resetColor = document.getElementById('reset-color');
resetColor.style.border ='2px solid black'
resetColor.style.borderRadius = '5px'
resetColor.style.padding = '5px'
resetColor.style.cursor = 'pointer'
resetColor.onclick= function resetCOLOR(){
document.body.style.backgroundColor = 'white'
}

// Leatest Color Button here Implement 
const pinkColor = document.getElementById('pink-color');
pinkColor.addEventListener('click' , function(){
    document.body.style.backgroundColor = 'deepPink'
})


const grayBTN = document.getElementById('dark-gray-btn')
grayBTN.addEventListener('click' , function(){
    document.body.style.backgroundColor = 'darkGray'
})












// // type 1
// function makeRed(){
//     document.body.style.backgroundColor = 'red'
// }
// // create function and Call function on the HTML file 
// function makeBlue(){
//     document.body.style.backgroundColor = 'lightblue'
// }

// // Type 2
// // create function here and also call the html By using ID Tag call 
// // yellow Button function 
// const yellowBTN = document.getElementById('yellow-btn');
// // style  given the button 
// yellowBTN.style.border ='2px solid black'
// yellowBTN.style.borderRadius = '5px'
// yellowBTN.style.padding = '5px'
// yellowBTN.style.cursor = 'pointer'
// // create a function for Onclick 
// yellowBTN.onclick = function makeYellow(){
// document.body.style.backgroundColor = 'yellow'
// }

// // reset Button 
// const resetColor = document.getElementById('reset-color');
// resetColor.style.border ='2px solid black'
// resetColor.style.borderRadius = '5px'
// resetColor.style.padding = '5px'
// resetColor.style.cursor = 'pointer'
// resetColor.onclick= function resetCOLOR(){
// document.body.style.backgroundColor = 'white'
// }

// // Leatest Color Button here Implement 
// const pinkColor = document.getElementById('pink-color');
// pinkColor.addEventListener('click' , function(){
//     document.body.style.backgroundColor = 'deepPink'
// })


// const grayBTN = document.getElementById('dark-gray-btn')
// grayBTN.addEventListener('click' , function(){
//     document.body.style.backgroundColor = 'darkGray'
// })