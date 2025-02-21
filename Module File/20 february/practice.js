const animal = {
  cow: {
    name: "redBull",
    age: 10,
    color: "white",
    legs: 4,
    eating: "grass",
    habit: function () {
      console.log("Cow function show");
      return {
        gives: "Milk",
        movement: "Yes",
        sleep: "yes",
      };
    },
    typesOfCow: ["indian", "Bangladeshi", "Australian", "USA"],
  },
  Goat: {
    color: "white",
    legs: 4,
    eating: "Grass",
    habit: function () {
      return {
        gives: "Milk",
        movement: "Yes",
        play: "yes",
      };
    },
    typesOfGoat: ["Bangladeshi", "Indian", "UAE", "Canada"],
  },
};

// console.log(animal.Goat);
// console.log(animal.cow.habit());
console.log("Goat Function here -->" +animal.Goat.habit())
