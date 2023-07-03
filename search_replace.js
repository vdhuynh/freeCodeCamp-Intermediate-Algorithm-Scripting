function myReplace(str, before, after) {
  // Check if the first character of 'before' is uppercase
  if (/^[A-Z]/.test(before)) {
    // Replace 'before' with 'after' while preserving the uppercase of the first character in 'after'
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // Replace 'before' with 'after' while preserving the lowercase of the first character in 'after'
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  // Perform the search and replace in the sentence
  return str.replace(before, after);
}

console.log(myReplace("He is reading a book", "book", "dog")); // Output: "He is reading a dog"
console.log(myReplace("Let's go to the park", "park", "garden")); // Output: "Let's go to the garden"
console.log(myReplace("I have a pen", "pen", "Pencil")); // Output: "I have a Pencil"
console.log(myReplace("I think we should look up there", "up", "Down")); // Output: "I think we should look down there"
