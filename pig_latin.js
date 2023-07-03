function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.includes(str[0])) {
    // Word starts with a vowel, add 'way' at the end
    return str + 'way';
  } else if (!str.match(/[aeiou]/)) {
    // Word has no vowels, add 'ay' at the end
    return str + 'ay';
  } else {
    // Word starts with a consonant or consonant cluster
    let consonantCluster = '';
    let i = 0;

    // Find the consonant cluster at the beginning of the word
    while (!vowels.includes(str[i])) {
      consonantCluster += str[i];
      i++;
    }

    // Move the consonant cluster to the end and add 'ay'
    return str.slice(i) + consonantCluster + 'ay';
  }
}

console.log(translatePigLatin('hello')); // Output: "ellohay"
console.log(translatePigLatin('banana')); // Output: "ananabay"
console.log(translatePigLatin('apple')); // Output: "appleway"
console.log(translatePigLatin('rhythm')); // Output: "rhythmay"
