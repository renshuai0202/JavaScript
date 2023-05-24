const array = [2, 5, 8, 11, 1, 9];

function minMax(array = []) {
  const sortedArray = array.sort((a, b) => a - b);
  return { min: sortedArray[0], max: sortedArray[sortedArray.length - 1] }
}

console.log(minMax(array));
