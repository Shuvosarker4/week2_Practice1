const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter a year: ", (answer) => {
  const year = parseInt(answer);

  if (isNaN(year)) {
    console.log("That is not a valid year.");
  } else {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log(`${year} is a leap year.`);
    } else {
      console.log(`${year} is not a leap year.`);
    }
  }

  rl.close();
});
