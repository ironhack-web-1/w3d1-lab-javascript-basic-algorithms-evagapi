// Iteration 1: Names and Input

let hacker1 = "John";
let hacker2 = "Julia";

console.log(`The driver's name is ${hacker1}`);
console.log(`The driver's name is ${hacker2}`);


// Iteration 2: Conditionals

function isLarger(driver, navigator) {
  if (driver.length > navigator.length) {
    console.log(`The driver has the longest name, it has ${driver.length} characters.`);
  } else if (navigator.length > driver.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters.`);
  } else if (driver.length === navigator.length) {
    console.log(`Wow, you both have equally long names, ${driver.length} characters!`)
  }
};

// Iteration 3: Loops

let capitalized = "";
for (let i = 0; i < hacker1.length; i++) {
  capitalized += hacker1[i] + " ";
};
console.log(capitalized.toUpperCase().trim());


let reversed = "";
for (let i = hacker1.length -1; i >= 0; i--) {
  reversed += hacker1[i];
};

console.log(reversed);


if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
} else if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?")};