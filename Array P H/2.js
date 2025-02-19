function numberCheck(number) {
  if (number.length !== 11) {
    return "Input number not 11 Digit";
  }
  if (number.length === 11) {
    return true;
  }
 else if (number.startswith("016")) {
    return "yes it is Airtel Number";
  }
  if (number.startswith("017")) {
    return "yes it is Grameenphone Number";
  }
  if (number.startswith("018")) {
    return "yes it is Robi Number";
  }
  if (number.startswith("019")) {
    return "yes it is Banglalink Number";
  }
  if(number.startswith("015")){
      return "yes it is Teletalk Number";
}
}

const number = "01600101810";
console.log(numberCheck(number));
