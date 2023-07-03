function spinalCase(str) {
  // Replace any occurrence of a lowercase character followed by an uppercase character
  // or any non-word character with a space, and convert it to lowercase
  str = str.replace(/([a-z])([A-Z])|([^a-zA-Z])/g, "$1 $2").toLowerCase();
  
  // Replace spaces and underscores with a hyphen
  str = str.replace(/\s+|_+/g, "-");
  
  return str;
}

console.log(spinalCase('This Is Spinal Tap')); // Output: "this-is-spinal-tap"
