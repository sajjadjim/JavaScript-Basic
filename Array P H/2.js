function numberCheck(numbers) {
  if (numbers.length !== 11) {
    return "Input number is not 11 digits";
  }
  return "Valid length";
}

function operatorCheck(numbers) {
  if (numbers.startsWith("016")) {
    return "Yes, it is an Airtel number";
  }
  if (numbers.startsWith("017")) {
    return "Yes, it is a Grameenphone number";
  }
  if (numbers.startsWith("018")) {
    return "Yes, it is a Robi number";
  }
  if (numbers.startsWith("019")) {
    return "Yes, it is a Banglalink number";
  }
  if (numbers.startsWith("015")) {
    return "Yes, it is a Teletalk number";
  }
  return "Invalid operator";
}

const numbers = "01600101810";
console.log(operatorCheck(numbers), numberCheck(numbers)); // Yes, it is an Airtel number Valid length
const numbers1 = "01700101810";
console.log(operatorCheck(numbers1), numberCheck(numbers1)); // Yes, it is a Grameenphone number Valid length
const numbers2 = "01800101810";
console.log(operatorCheck(numbers2), numberCheck(numbers2)); // Yes, it is a Robi number Valid length
const numbers3 = "01900101810";
console.log(operatorCheck(numbers3), numberCheck(numbers3)); // Yes, it is a Banglalink number Valid length
const numbers4 = "01500101810";
console.log(operatorCheck(numbers4), numberCheck(numbers4)); // Yes, it is a Teletalk number Valid length
const numbers5 = "01400101810";
console.log(operatorCheck(numbers5), numberCheck(numbers5)); // Invalid operator Input number is not 11 digits
const numbers6 = "016001018";
console.log(operatorCheck(numbers6), numberCheck(numbers6)); // Invalid operator Input number is not 11 digits
const numbers7 = "016001018101";

console.log(operatorCheck(numbers7), numberCheck(numbers7)); // Invalid operator Input number is not 11 digits
const numbers8 = "016001018101";
console.log(operatorCheck(numbers8), numberCheck(numbers8)); // Invalid operator Input number is not 11 digits
const numbers9 = "0160010181011";
console.log(operatorCheck(numbers9), numberCheck(numbers9)); // Invalid operator Input number is not 11 digits
const numbers10 = "01600101810112";


console.log(operatorCheck(numbers10), numberCheck(numbers10)); // Invalid operator Input number is not 11 digits
const numbers11 = "016001018101123";
console.log(operatorCheck(numbers11), numberCheck(numbers11)); // Invalid operator Input number is not 11 digits
const numbers12 = "0160010181011234";

console.log(operatorCheck(numbers12), numberCheck(numbers12)); // Invalid operator Input number is not 11 digits
const numbers13 = "01600101810112345";
console.log(operatorCheck(numbers13), numberCheck(numbers13)); // Invalid operator Input number is not 11 digits