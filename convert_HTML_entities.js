function convertHTML(str) {
  // Create an object to map special characters to their HTML entities
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };

  // Use regex and string replacement to convert the characters
  return str.replace(/[&<>"']/g, char => htmlEntities[char]);
}
