let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5
};

let chimpTwo = {
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6
};

let beagle = {
  name: "Leroy",
  species: "Beagle",
  mass: 14,
  age: 5
};

let tardigrade = {
  name:  "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  age: 1
};


// After you have created the other object literals, add the astronautID property to each one.
let animals = [];
animals.push(superChimpOne, chimpTwo, beagle, salamander, tardigrade);

for (let i = 0; i < animals.length; i++) {
  animals[i].astronautID = Math.floor(Math.random() * animals.length);

  for (let j = 0; j < i; j++) {
  while (animals[i].astronautID === animals[j].astronautID) {
    animals[i].astronautID = Math.floor(Math.random() * animals.length);
  }
  }

  console.log(animals[i].astronautID);
};

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!