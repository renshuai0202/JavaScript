const array = [10, 2, 8, 9, 12, 50];

const callback = (currentValue, currentIndex, array) => currentValue > 10;

console.log(array.filter(callback));

Array.prototype.myFilter = function(callback, context) {
  const length = this.length, newArray = [];
  if (typeof callback === 'function') {
    for(let k = 0; k < length; k++) {
      if (Object.prototype.hasOwnProperty.call(this, k)) {
        callback.apply(context, [this[k], k, this]) && newArray.push(this[k]);
      }
    }
  }
  return newArray;
}

console.log('---------------------');

console.log(array.myFilter(callback));

// 备忘录： Object.prototype.hasOwnProperty.call(context, property)
// Object构造函数的实例方法hasOwnProperty
// call 呼叫转移，在Array中，调用Object的实例方法。
// Array的实例调用，所以this是实例：array