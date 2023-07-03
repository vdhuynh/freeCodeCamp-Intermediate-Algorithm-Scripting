function smallestCommons(arr) {
  // Sort the range in ascending order
  const [min, max] = arr.sort((a, b) => a - b);

  // Generate the range of numbers between min and max
  const range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }

  // Helper function to calculate the LCM of two numbers
  function calculateLCM(a, b) {
    return (a * b) / calculateGCD(a, b);
  }

  // Helper function to calculate the Greatest Common Divisor (GCD) of two numbers using the Euclidean algorithm
  function calculateGCD(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // Initialize the smallest common multiple as the first number in the range
  let lcm = range[0];

  // Calculate the LCM for each number in the range
  for (let i = 1; i < range.length; i++) {
    lcm = calculateLCM(lcm, range[i]);
  }

  return lcm;
}
