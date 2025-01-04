var result = 0;
if (result < 0) {
  console.log("Failed");
} else if (result >= 0 && result < 40) {
  console.log("Tumi C grade peyeche");
} else if (result >= 40 && result < 60) {
  console.log("Tumi B grade peyeche");
} else if (result >= 60 && result < 80) {
  console.log("Tumi A- grade peyeche");
} else if (result >= 80 && result <= 100) {
  console.log("Tumi A+ grade peyeche");
}
