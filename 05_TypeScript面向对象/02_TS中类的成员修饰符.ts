// public
// private
// protected 受保护的

class Person {
  protected name: string
  private age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  // 方法变成私有方法: 只有在类内部才能访问
  private eating() {
    console.log("吃东西", this.age, this.name)
  }
}

const p = new Person("why", 18)
// console.log(p.name, p.age)
// p.name = "kobe"
// p.eating()

// 子类中是否可以访问
class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age) // 继承的写法
  }

  studying() {
    console.log("在学习", this.name) // 子类可以访问
  }
}

const stu = new Student("why", 18)

export {  }
