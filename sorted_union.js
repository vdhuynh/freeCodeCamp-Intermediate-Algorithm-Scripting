function uniteUnique(...arr) {
  // Concatenate all arrays into one array
  const flattenedArray = arr.reduce((acc, curr) => acc.concat(curr), []);

  // Filter out duplicates while preserving the original order
  const uniqueArray = flattenedArray.filter((value, index, self) => self.indexOf(value) === index);

  return uniqueArray;
}
