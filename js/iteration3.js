// Iteration 3: Loops

let hacker1 = "John";
let hacker2 = "Julia";

let capitalized = "";
for (let i = 0; i < hacker1.length; i++) {
  capitalized += hacker1[i] + " ";
}
console.log(capitalized.toUpperCase().trim());

let reversed = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reversed += hacker1[i];
}

console.log(reversed);

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
}
