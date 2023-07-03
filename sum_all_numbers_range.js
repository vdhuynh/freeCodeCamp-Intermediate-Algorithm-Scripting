function sumAll(arr) {
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);
  
  const sum = Array.from({ length: max - min + 1 }, (_, index) => min + index)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  return sum;
}

console.log(sumAll([4, 1])); // Output: 10
