function whatIsInAName(collection, source) {
  return collection.filter(function(obj) {
    return Object.keys(source).every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

const collection = [
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }
];
const source = { last: "Capulet" };

console.log(whatIsInAName(collection, source));
