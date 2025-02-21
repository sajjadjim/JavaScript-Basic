let phones = [
  { name: "samsung", price: 25000, color: "Black" },
  { name: "Blackberry", price: 35000, color: "Black" },
  { name: "Iphone", price: 125000, color: "Black" },
  { name: "xiaomi", price: 45000, color: "Black" },
  { name: "pixel", price: 55000, color: "Black" },
];

function SetAllPhones(phones) {
  let min = phones[0];
  for (let phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}

let GetPhone = SetAllPhones(phones);
console.log("the cheapest phone ->" + GetPhone);
