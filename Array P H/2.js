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