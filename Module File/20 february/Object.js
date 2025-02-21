
const cat = {
name :"TOM",
age : 5,
color : "Gray",
play : "Ball",
friends : ["Jerry","Micky","Mini"],
food : {
    name : "Fish",
    quantity : 2,
    favouriteFood :{
        name : "Milk",
        quantity : 1,
    }
},
playwithBall :function(){
console.log("Cat is playing with Ball");
}
}
// console.log(cat);
console.log(cat.name);
cat.playwithBall();
console.log(cat.friends[0]);
console.log(cat.food.favouriteFood.name);


