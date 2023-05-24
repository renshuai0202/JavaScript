function Foo(name, age) {
  console.log('this01', this);
  this.name = name;
  this.age = age;
  console.log('this02', this);
}

console.log(new Foo('zhangsan', 18));

console.log('------');

function Foo2(name, age) {
  const obj = {};
  obj.name = name;
  obj.age = age;
  return obj;
}

console.log(new Foo2('lisi', 20));

// this默认为空对象{}
// 在构造函数中，默认return this 不必显式返回
