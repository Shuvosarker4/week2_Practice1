function monthlySavings(arr, num) {
  if (!Array.isArray(arr)) {
    return "Invalid input";
  }

  const taxedArray = arr.map((element) => {
    if (element >= 3000) {
      return element * 0.8;
    }
    return element;
  });

  const totalSavings = taxedArray.reduce((acc, curr) => acc + curr, 0);

  if (totalSavings - num < num) {
    return "earn more";
  } else {
    return totalSavings - num;
  }
}

const costs = [1000, 2700, 3500];
const salary = 10000;
const result = monthlySavings(costs, salary);

console.log(result);
