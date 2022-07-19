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

  
// Bonus 1

const paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a orci vel lacus aliquet tristique. Nunc malesuada purus risus, a viverra arcu iaculis non. Sed diam nibh, scelerisque sed neque sit amet, pretium tincidunt elit. Curabitur euismod enim metus, pellentesque viverra dui vulputate eu. Etiam vitae aliquam sapien. Praesent fermentum consequat elit. Vivamus elementum justo arcu, et tincidunt augue sollicitudin nec. Duis bibendum venenatis nisl, vitae egestas arcu efficitur sit amet. Cras gravida risus sed nunc rhoncus, nec rhoncus orci condimentum. Vestibulum vitae pretium purus. Aenean auctor magna neque.

Quisque condimentum purus arcu, quis tincidunt justo ornare non. Donec tempus magna diam, tincidunt faucibus eros luctus sit amet. Praesent a diam congue justo luctus gravida. Etiam eget nisl sed mauris luctus aliquet. Etiam ac ultricies massa, at lobortis ligula. Duis molestie mauris in erat blandit aliquet. Nunc vel feugiat metus. Aliquam non mi sed nunc porttitor eleifend. Cras a justo nunc. Ut rutrum laoreet massa sit amet accumsan. In turpis orci, posuere nec lacus sit amet, convallis finibus erat. Etiam at convallis urna. Nulla finibus ligula a scelerisque euismod. Nullam fermentum, risus sed ultrices elementum, sem nunc ullamcorper metus, vitae tristique justo tortor at augue. Mauris dapibus nunc dolor, id volutpat purus sollicitudin eu. Integer cursus tortor at augue malesuada mattis.

Donec rutrum lectus id mi varius, ac fermentum metus tristique. Sed ut metus nisl. Donec ut porttitor sem, ac iaculis orci. Nulla tincidunt sed arcu vel mollis. Fusce in feugiat risus. Sed scelerisque ipsum vel risus luctus, id malesuada nunc sodales. Suspendisse blandit erat at tincidunt dictum. Aenean mauris eros, malesuada eu varius sit amet, suscipit eu lectus. Nullam accumsan viverra est ac aliquam. Ut aliquet imperdiet purus at semper.`

function wordCounter (text) {
  return text.split(" ").length;
};

console.log(wordCounter(paragraphs));

function howManyOccurences (text, word) {
  let splitedText = text.split(" ");
  let collectedOccurences = [];

  for (let occurence of splitedText) {
    if (occurence === word) {
      collectedOccurences.push(word);
    }
  }
  return collectedOccurences.length;
};

console.log(howManyOccurences(paragraphs, "et"));
