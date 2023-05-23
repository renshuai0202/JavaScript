const arr = [1, 3, 5, 7, 9];
const reducer = (total, currentValue, currentIndex, array) => {
  total+= currentValue * currentIndex + arr[0];
  return total;
}
const res = arr.reduce(reducer, 0);

console.log(res); // 75
