let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    move: function() {
      return (Math.round(Math.random() * 10));
    }
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    move: function() {
      return (Math.round(Math.random() * 10));
    }
};

let chimpTwo = {
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6,
    move: function() {
      return (Math.round(Math.random() * 10));
    }
};

let beagle = {
  name: "Leroy",
  species: "Beagle",
  mass: 14,
  age: 5,
    move: function() {
      return (Math.round(Math.random() * 10));
    }
};

let tardigrade = {
  name:  "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  age: 1,
    move: function() {
      return (Math.round(Math.random() * 10));
    }
};


// After you have created the other object literals, add the astronautID property to each one.
let animals = [];
animals.push(superChimpOne, chimpTwo, beagle, salamander, tardigrade);

let astronautIDs = [];

function getNewId() {
  return (Math.ceil(Math.random() * 10));
}

for (let i = 0; i < animals.length; i++) {
  let newId = getNewId();

  while (astronautIDs.includes(newId)) {
    newId = getNewId();
  }

  astronautIDs.push(newId);

  animals[i].astronautID = newId;

  console.log(animals[i].astronautID);
};



// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!