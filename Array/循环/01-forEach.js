const array = [2, 20, 19, 40, 1, 3];

const callback = (currentValue, currentIndex, array) => {
  console.log(array, currentIndex, currentValue);
}

array.forEach(callback);

// forEach 属于ES5
// 实现一个polyfill腻子脚本，帮助老版本浏览器，支持此项功能
Array.prototype.myForEach = Array.prototype.forEach || function(callback, context) {
  const length = this.length;
  for(let k = 0; k < length; k++) {
    if (typeof callback === 'function' && Object.prototype.hasOwnProperty.call(this, k)) {
      callback.apply(context, [this[k], k, this]);
    } else {
      console.log('Error:', typeof k === 'function', Object.prototype.hasOwnProperty.call(this, k));
    }
  }
}

console.log('------------------------');

array.myForEach(callback);
