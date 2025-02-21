// function toInchesFinfeet (inches){
//     const feet = inches / 12;
//     return feet;
// }

function inchesToFeet2(inches){
    const feetFraction = inches /12;
    const feetNumber = parseInt(feetFraction);
    const inchesRemainning = inches % 12;
    const result = feetFraction + ' feet  ' + inchesRemainning + ' inches'
    return result;
}


//const showHeight = toInchesFinfeet(75);
//console.log(showHeight);

let showValue = inchesToFeet2(75);
console.log(showValue)
console.log("My name is JIM")