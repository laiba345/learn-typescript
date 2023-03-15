/* 
  继承是多态使用的前提
  - 父类本身可能并不需要对某些方法进行具体的实现，
  - 所以父类中定义的方法，我们可以定义为抽象方法

  父类定义了类型，子类去实现即可
*/
abstract class Shape {
  // getArea方法只有声明没有实现体
  // 实现让子类自己实现
  // 可以将getArea方法定义为抽象方法: 在方法的前面加abstract
  // 抽象方法必须出现在抽象类中, 类前面也需要加abstract
  // 抽象类里面的抽象方法：子类必须实现
  // 抽象类不需要具体的实现体
  abstract getArea() // 不知道getArea具体是怎么实现的，实现体让子类自己实现
}


class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super()
  }

  getArea() {
    return this.width * this.height
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super()
  }

  getArea() {
    return this.radius ** 2 * Math.PI
  }
}

class Triangle extends Shape {
  getArea() {
    return 100
  }
}


// 通用的函数
function calcArea(shape: Shape) {
  return shape.getArea()
}

calcArea(new Rectangle(10, 20))
calcArea(new Circle(5))
calcArea(new Triangle())

// 在Java中会报错: 不允许
calcArea({ getArea: function() {} })

// 抽象类不能被实例化
// calcArea(new Shape())
// calcArea(100)
// calcArea("abc")
