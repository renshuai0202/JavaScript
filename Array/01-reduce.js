const arr = [1, 3, 5, 7, 9];
const reducer = (total, currentValue, currentIndex, array) => {
  total+= currentValue * currentIndex + arr[0];
  return total;
}
const res = arr.reduce(reducer, 0);

console.log(res); // 75

// 数组中元素出现的次数
const arr2 = [1, 3, 5, 7, 9, 1];
const show1Times = (total, currentValue, currentIndex, array) => {
  if (currentValue === 1) {
    total+=1;
  }
  return total;
}
const res2 = arr2.reduce(show1Times, 0);

console.log(res2);
