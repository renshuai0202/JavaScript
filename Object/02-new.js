function Foo(name, age) {
  this.name = name;
  this.age = age;
}

const foo = new Foo('zhangsan', 18);

console.log(foo);

// 声明一个变量，赋值为空对象
var foo2 = {};

// 将变量的原型，指向构造函数的原型
foo2.__proto__ = Foo.prototype;

// 呼叫转移，继承构造函数的非静态方法和构造函数。
// 也可以理解为调用Foo
// foo2.call(this, 'zhangsan', 18);
Foo.call(foo2, 'zhangsan', 18);

console.log(foo2);
