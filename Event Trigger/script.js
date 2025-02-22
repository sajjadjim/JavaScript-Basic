
function makeRed(){
    document.body.style.backgroundColor = 'red'
}

function makeBlue(){
    document.body.style.backgroundColor = 'lightblue'
}

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