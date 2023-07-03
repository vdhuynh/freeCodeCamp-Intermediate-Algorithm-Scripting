var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(first) {
    fullName = first + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(last) {
    fullName = fullName.split(" ")[0] + " " + last;
  };

  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
  };
};

// Example usage
var person = new Person("John Doe");
console.log(person.getFirstName());  // Output: "John"
console.log(person.getLastName());  // Output: "Doe"
console.log(person.getFullName());  // Output: "John Doe"

person.setFirstName("Jane");
person.setLastName("Smith");
console.log(person.getFullName());  // Output: "Jane Smith"

person.setFullName("Mark Johnson");
console.log(person.getFirstName());  // Output: "Mark"
console.log(person.getLastName());  // Output: "Johnson"
