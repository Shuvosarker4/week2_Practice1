const arr = [
  4, 1, 5, 6, 3, 8, 2, 7, 20, 19, 15, 12, 11, 13, 14, 16, 17, 18, 9, 10,
];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);
