function dropElements(arr, func) {
  let index = arr.findIndex(func);

  if (index !== -1) {
    return arr.slice(index);
  } else {
    return [];
  }
}
