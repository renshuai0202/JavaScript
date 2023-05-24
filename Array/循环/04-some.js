const array = [10, 18, 20, 2, 26, 40, 8];

const callback = (currentValue, currentIndex, array) => {
  return currentValue === 20;
}

const isHas = array.some(callback);

console.log(isHas);

Array.prototype.mySome = function(callback, context) {
  const length = this.length;
  let result = false;

  if (typeof callback === 'function') {
    for(let k = 0; k < length; k++) {
      if (Object.prototype.hasOwnProperty.call(this, k) && callback.call(context, this[k], k, this)) {
          result = true;
          break;
      }
    }
  }

  return result;
}

const isHas2 = array.mySome(callback);

console.log(isHas2);
