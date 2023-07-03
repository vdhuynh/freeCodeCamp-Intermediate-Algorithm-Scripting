function steamrollArray(arr) {
  const flattenedArray = [];

  // Helper function to flatten nested arrays
  function flattenArray(element) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        flattenArray(element[i]);
      }
    } else {
      flattenedArray.push(element);
    }
  }

  arr.forEach(flattenArray);

  return flattenedArray;
}
