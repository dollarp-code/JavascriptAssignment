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
/*Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall. */

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

mark.bmi > john.bmi
  ? console.log(
      `${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s ${john.bmi}!`
    )
  : console.log(
      `${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s ${mark.bmi}!`
    );

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([23, 22, 34, 56]));
