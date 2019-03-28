function Animal() {
  this.sleep = ()=>{
    return `${this.name} sleep`
  }
}

function Cat(name) {
  Animal.call(this);
  this.name = name || 'Tom';
}

Cat.prototype = (function () {
  // 创建一个没有实例方法的类
  var Super = function () {
  };
  Super.prototype = Animal.prototype;
  //将实例作为子类的原型
  return new Super();
})();

Cat.prototype.constructor = Cat; // 需要修复下构造函数

// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); //true

