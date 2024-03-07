"use strict";
const a = "9" - "5";
const b = "19" - "13" + "17";
const c = "19" - "13" + 17;
const d = "123" > 57;
const e = 5 + 6 + "4" + 9 - 4 - 2;
console.log(a, typeof a); // -> ?
console.log(b, typeof b); // -> ?
console.log(c, typeof c); // -> ?
console.log(d, typeof d); // -> ?
console.log(e, typeof e); // -> ?

const population = 13;
const country = "Nigeria";
population > 33
  ? console.log(`${country} population is above average`)
  : console.log(`${country} population is below average`);

// ARRAY
const populations = [44, 33, 45, 67];
console.log(populations.length === 4);

const neighbours = ["ghana", "Nigeria", "gambia", "senegal"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("probably not a central european country :D");
}

neighbours[neighbours.indexOf("ghana")] = "Sweden";
console.log(neighbours);

// OBJECT AND METHOD
const myCountry = {
  country: "Nigeria",
  capital: "Abuja",
  language: "English",
  population: 33,
  neighbours: neighbours,
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.island = this.neighbours.length === 0 ? true : false;
  },
};
myCountry.describe();
myCountry.checkIsland();

console.log(myCountry);

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);
myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

//FOR LOOPS
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

// LOOPS IN LOOPS
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
  }
}
