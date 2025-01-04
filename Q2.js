const number = prompt("Please enter a number:");
if (number !== null) {
  const parsedNumber = parseInt(number);
  if (isNaN(parsedNumber)) {
    console.log("That is not a valid number.");
  } else {
    if (parsedNumber % 2 === 0) {
      console.log(`${parsedNumber} is even.`);
    } else {
      console.log(`${parsedNumber} is odd.`);
    }
  }
}
