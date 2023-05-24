const array = [10, 18, 20, 2, 26, 40, 8];

const callback = (currentValue, currentIndex, array) => {
  return currentValue === 10;
}

const isAll = array.every(callback);

console.log(isAll);

Array.prototype.myEvery = function(callback, context) {
  const length = this.length;
  let result = true;

  if (typeof callback === 'function') {
    for(let k = 0; k < length; k++) {
      if (Object.prototype.hasOwnProperty.call(this, k) && !callback.call(context, this[k], k, this)) {
          result = false;
          break;
      }
    }
  }

  return result;
}

const isAll2 = array.myEvery(callback);

console.log(isAll2);
