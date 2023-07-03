function diffArray(arr1, arr2) {
  const mergedArray = arr1.concat(arr2);
  
  const symmetricDiff = mergedArray.filter(item => !arr1.includes(item) || !arr2.includes(item));
  
  return symmetricDiff;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
