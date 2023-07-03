function destroyer(arr) {
  const args = Array.from(arguments).slice(1);
  
  return arr.filter(item => !args.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
