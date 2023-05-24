const array = [10, 16, 20, 50, 100, 7, 3];

const callback = (currentValue, currentIndex, array) => {
  return currentValue >= 50;
}

const result = array.find(callback);

console.log(result);

// 实现polyfill腻子脚本
Array.prototype.myFind = function(callback, context) {
  const length = this.length;
  if (typeof callback === 'function') {
    for(let k = 0; k < length; k++) {
      if (Object.prototype.hasOwnProperty.call(this, k) && callback.apply(context, [this[k], k, this])) {
        return this[k];
      }
    }
  }
}

const result2 = array.myFind(callback);

console.log(result2);
