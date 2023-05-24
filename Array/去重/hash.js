const array = [10, 15, 10, 19, 21, 50, 21, '10'];

function distinct(array) {
  const length = array.length, set = new Set(), result = [];

  for(let k = 0; k < length; k++) {
    if (!set.has(array[k])) {
      set.add(array[k]);
      result.push(array[k]);
    }
  }

  return result;
}

console.log(distinct(array));


const set = new Set(array);

const result2 = [...set];

console.log(result2);
