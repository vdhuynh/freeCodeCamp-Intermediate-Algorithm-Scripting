function pairElement(str) {
  // Create an object to store the base pair mappings
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  // Split the string into an array of characters and map each character to its base pair
  return str.split("").map(char => [char, pairs[char]]);
}

console.log(pairElement("GCG")); // Output: [["G", "C"], ["C", "G"], ["G", "C"]]
console.log(pairElement("ATCGA")); // Output: [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]]
console.log(pairElement("TTGAG")); // Output: [["T", "A"], ["T", "A"], ["G", "C"], ["A", "T"], ["G", "C"]]
console.log(pairElement("CTCTA")); // Output: [["C", "G"], ["T", "A"], ["C", "G"], ["T", "A"], ["A", "T"]]
