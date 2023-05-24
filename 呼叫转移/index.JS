const array = [3, 5, 78, 12, 1, 9];

// 类：pubic修饰符 原型：原型链 允许通过实例访问
Array.prototype.max = function() {
  return Math.max.apply(this, this);
}

console.log(array.max());

// 类：static修饰符 只能通过构造函数访问
Array.max = function() {
  return Math.max.apply({}, arguments[0]);
}

console.log(Array.max(array));
