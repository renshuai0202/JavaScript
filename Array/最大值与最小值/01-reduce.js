const arr = [1, 3, 5, 7, 9];
const reducer = (total, currentValue, currentIndex, array) => {
  total+= currentValue * currentIndex + arr[0];
  return total;
}
const res = arr.reduce(reducer, 0);

console.log(res); // 75

// 数组中每个元素出现的次数
const arr2 = [1, 3, 5, 7, 9, 1];
const showTimes = (total, currentValue, currentIndex, array) => {
  if (total[currentValue] === undefined) {
    total[currentValue] = 1;
  } else {
    total[currentValue]+=1;
  }
  return total;
}
const res2 = arr2.reduce(showTimes, {});

console.log(res2);

// 多维度数据统计
const initialValue = { USD: 0, EURO: 0 };
const USD = 0.1478;
const EURO = 0.1265;
const arr3 = [{ price: 10 }, { price: 50 }, { price: 100 }];

const transform = (total, currentValue, currentIndex, array) => {
  total.EURO += currentValue.price * EURO;
  total.USD += currentValue.price * USD;
  return total;
}

const res3 = arr3.reduce(transform, initialValue);
console.log(res3);

// 如果不写初试数值
const arr4 = [2, 5, 10];
const res4 = arr4.reduce((total, currentValue, currentIndex, array) => {
  console.log('value', total, currentValue);
  return total += currentValue;
});
console.log('res4', res4);


// 求数组的最大值和最小值
const arr5 = [2, 4, 10, 7, 5, 8, 6];
const initialValue2 = { min: arr5[0], max: arr5[0] };

const res5 = arr5.reduce((total, currentValue, currentIndex, array) => {
  if (currentValue < total.min) {
    total.min = currentValue;
  } else if (currentValue > total.max) {
    total.max = currentValue;
  }
  return total;
}, initialValue2);

console.log(res5);

// 牢记，initialValue不只能是0，可以是对象，可以是任何类型
