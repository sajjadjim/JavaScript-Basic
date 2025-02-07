const pay = 40000;
// var year = 25;
var year = 55;

 // Year discount  List
 if (year >=50)
 {
    discount_price = pay * 35 /100;
    console.log("1.Before price :",pay);
    console.log("2.New discount Price :",discount_price);
 }
else if (year >=20)
{
    discount_price2= pay * 25/100;
    console.log("1.New discount price Age",year,"\n2.You payable ",discount_price2);
}
 else{
    console.log("You have to pay full amount :",pay);
 }
 