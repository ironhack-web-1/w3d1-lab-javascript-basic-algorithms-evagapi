// Iteration 2: Conditionals

function isLarger(driver, navigator) {
  if (driver.length > navigator.length) {
    console.log(
      `The driver has the longest name, it has ${driver.length} characters.`
    );
  } else if (navigator.length > driver.length) {
    console.log(
      `It seems that the navigator has the longest name, it has ${navigator.length} characters.`
    );
  } else if (driver.length === navigator.length) {
    console.log(
      `Wow, you both have equally long names, ${driver.length} characters!`
    );
  }
}
