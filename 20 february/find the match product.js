
const phones =[
    {name:"iphone phone" , price :56000, color: "Black"},
    {name:"Samsung phone" , price :46000, color: "White"},
    {name:"Samsung Laptop" , price :36000, color: "Blue"},
    {name:"vivo Laptop" , price :126000, color: "Red"},
    {name:"Vivo phone" , price :16000, color: "Green"},
    {name:"Realme tab" , price :36000, color: "Yellow"},
    {name:"OnePlus phone" , price :56000, color: "Black"},
]

function products(phones , search){
 const match = [];
 for(let phone of phones){
    if(phone.name.includes(search))
    {
        match.push(phone);
    }
    else
    {
        console.log("No Match Found");
    }
 }
 return match;
}

console.log(products(phones, "phone"));