function addTogether() {
  const [first, second] = arguments;

  // Helper function to check if a value is a valid number
  function isValidNumber(value) {
    return Number.isInteger(value);
  }

  // If only one argument is provided
  if (arguments.length === 1) {
    if (!isValidNumber(first)) {
      return undefined;
    }

    // Return a new function that expects one argument and returns the sum
    return function(second) {
      if (!isValidNumber(second)) {
        return undefined;
      }
      return first + second;
    };
  }

  // If two arguments are provided
  if (!isValidNumber(first) || !isValidNumber(second)) {
    return undefined;
  }

  // Return the sum of the two arguments
  return first + second;
}
