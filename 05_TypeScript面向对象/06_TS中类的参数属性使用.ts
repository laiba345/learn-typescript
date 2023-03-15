class Person {
  // 语法糖（不用像之前那种定义操作，必须显式指定）
  constructor(public name: string, private _age: number, readonly height: number) {
  }

  running() {
    console.log(this._age, "eating") // 内部才能访问私有属性
  }
}

const p = new Person("why", 18, 1.88)
console.log(p.name, p.height)

// p.height = 1.98

export {  }
