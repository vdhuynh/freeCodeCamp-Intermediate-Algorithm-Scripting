function binaryAgent(str) {
  // Split the binary string into an array of binary numbers
  const binaryArray = str.split(" ");

  // Convert each binary number to decimal and then to its ASCII character
  const translatedArray = binaryArray.map(binary => String.fromCharCode(parseInt(binary, 2)));

  // Join the translated characters to form the English sentence
  const translatedSentence = translatedArray.join("");

  return translatedSentence;
}
