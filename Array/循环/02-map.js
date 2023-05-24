const array = [10, 2, 5, 12, 66, 90, 55];

const callback = (currentValue, currentIndex, array, context) => {
  // console.log('currentValue', currentValue);
  // console.log('currentIndex', currentIndex);
  // console.log('array', array);
  // console.log('context', context);
  return currentValue * 2;
} 

const newArray = array.map(callback);

console.log('newArray', newArray);

// 定义一个polyfill腻子脚本
Array.prototype.myMap = function(callback, context) {
  const newArray = [], length = this.length;
  if (typeof callback === 'function') {
    for(let k = 0; k < length; k++) {
      if (Object.prototype.hasOwnProperty.call(this, k)) {
        const result = callback.apply(context, [this[k], k, this]);
        newArray.push(result);
      }
    }
  }
  return newArray;
}

const newArray2 = array.myMap(callback);

console.log('newArray2', newArray2);
