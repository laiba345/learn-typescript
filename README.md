# learn-typescript
learn typescript（codewhy)

## TypeScript的编译环境
```
# 安装命令
npm install typescript -g
# 查看安装的版本
tsc --version
```

## TS学习的等级划分（个人划分codeWhy）
1. 知道TS，但是没有用过
2. AnyScript，万物皆可any
3. 大多数使用any，但是普通的很多类型方法也是可以把握
4. 大多数类型都是使用正确的，极少数使用any（大部分了解此处即可**）
5. 可以使用TS封装一些高级类型，包括框架当中某些特殊的类型（pinia/vuex）
6. 学会使用TS提供的各种内置工具（ThisType/ReturnType/）
7. 真正TS融会贯通，看TS源码（TS开发者）


## 映射类型（开发中极少使用 187-189）

## 非模块
1. JS规范声明任何没有export的JS文件都应该被认为是一个脚本，而非一个模块
2. 如果你有一个文件，现在没有任何import或者export，但是你希望它被作为模块处理，添加这行代码
```
export { }
```
3. 上述代码改成一个没有导出任何内容的模块，这个语法可以生效，无论你模块的目的是什么

# typescript中的重要知识点
```
/**
 * 首先就是长久以来对于JavaScript是一个弱类型语言的诟病，
 * 所以针对这点，TypeScript则是引入了静态类型检查，允许开发者在编写代码时指定类型，并在编译时捕获类型错误，从而提高了代码的质量和可靠性。
 * 其次TypeScript这样的静态类型也使得编辑器和IDE能够提供更强大的功能，比如自动补全、快速导航等等。
 * 当然TypeScript还提供了诸如面向对象编程的支持，文档和类型的定义等其他的功能
 * 对于企业而言，需要前端开发掌握TypeScript这样的技能大体都是因为可以提高生产效率，使得负责代码结构管理起来更加容易，从而节省开发资源~
 */
// 1.类型推断(并不直观)
let str = 'hello'
str = 18

// 2.类型注解
let str1: string = 'hello'

// 3.类型断言
let strArray = ['a','b','c']
// 通过as告诉TS，我们断言result一定是一个字符串类型
const result = strArray.find(i => i === 'b') as string
result.concat('d')

// 4.基础类型和联合类型
let t1: string = 'abc'
let t2: number = 10
let t3: boolean = true
let t4: null = null
let t5: undefined = undefined
// null和undefined使用频率极低，为什么ts还是有这种类型呢
// 其实ts还支持另一种操作，就是联合类型
// 下述定义的变量，可能被分配成字符串也可能为空
let t6: string | null = null
// 希望一个 mode 变量可能是固定的几个值中的一个
let mode: 'scaleToFill' | 'aspectFit' | 'aspectFill' = 'aspectFill'
// 其实我们 input 标签的 type 属性不就可以使用联合类型来约束

// 5. 数组、元组、枚举
// 5.1 数组写法
let arr: number[] = [1, 2, 3]
let arr1: Array<number> = [1,2,3]
// 5.2 元祖写法
let arr2: [number, string, number] = [1,'2',3]
// 5.3 枚举类型
enum SexStatusEnum {
    /** 女性 */
    female,
    /** 男性 */
    male,
  }
// 枚举属性的访问
console.log(SexStatusEnum.female)
console.log(SexStatusEnum[0])

// 当枚举类型声明好之后，TS会自动做值分配，默认从0开始
/*
  5.4 void类型；代表空，在严格模式下，void只能被分配给undefined
  通常在函数中使用，比如一个函数没有返回值的时候
  ！！ 下列函数如果返回void就会报错；
  还需注意，可选参数在必选参数后面
*/
// 6. 函数
function MyFunction (a: number, b?: number): number {
    return 100
}
// 当我们还有其他参数传递时，使用rest解构
function MyFunction2 (a: number = 10, b?: number, ...rest: number[]): number {
    return 100
}
MyFunction2(1,2,3,4,5,6,7,8,9)

// 7. 接口；通常用来对一个对象进行定义
interface MyObject {
    name: string
    age: number
    height: number
}
const obj: MyObject = {
    name: '刘亦菲',
    age: 28,
    height: 170
}

// 8. 类型别名；某个变量可能有两种类型；
type MyType = string | number
let a: string | number = 10
let a1: MyType = 10

// 9. 泛型
function myFun (a: number, b: number): number[] {
    return [a, b]
}
/**
 * 理解：我们现在定义了一个方法，接受两个number参数，
 * 最后返回了一个number数组，但是可能后面我希望通过这个函数处理一串字符串，一串布尔值等等，
 * 这个时候我们的类型约束就不能满足需求了
 * 
 * 我们需要的是一个比较通用的函数，采用泛型的概念
 */
function myFun2<T> (a: T, b: T): T[] {
    return [a, b]
}
// 泛型变量T，在使用中可以使用任意的变量名
myFun2<number>(1,2)
myFun2<string>('1','2')
// 当使用上述泛型来约束，myFun 就变成了一个通用的函数，可以接受一串任意类型的数据了。
/**
 * 注意;
 * - TS 还支持类型推断，当我们给 myFun 传递一个 string 类型的数据的时候，
 * - TS 就会推断你这个 T 不就是 string 类型嘛，他会按照你第一次推断的那个值来进行 T 的应用。
 */

// TS中还有 交叉类型、Pick、Omit、Exclude
// 补充1；交叉类型，使用&操作符来声明交叉类型
type Overlapping = string & number;
// 应用场景1；合并接口类型：将多个接口类型合并成为一个类型
type Person = {
	name: string;
  age: number;
} & {
	height: number;
  weight: number;
} & {
	id: number;
}

const person: Person = {
	name: "zhangsan",
  age: 18,
  height: 180,
  weight: 60,
  id: 123456
}
// 上述我们通过交叉类型使Person同时拥有了三个接口类型中的5个属性
// 如果两个接口中的同一个属性定义了不同的类型会发生了什么情况呢？
// 合并后，age的类型变为string&number，是一个never类型；
type Person = {
	name: string;
  age: number;
} & {
  age: string;
	height: number;
  weight: number;
}

const person: Person = {
	name: "zhangsan",
  age: 18,   // Type 'number' is not assignable to type 'never'.ts(2322)
  height: 180,
  weight: 60,
}

// 应用场景2；合并联合类型
type A = "blue" | "red" | 996;
type B = 996 | 666;
type C = A & B;
const c: C = 996;
// 如果多个联合类型中没有相同的类型成员，那么交叉出来的类型就是never类型；
// type A = "blue" | "red";
// type B = 996 | 666;
// type C = A & B;
// const c: C = 996; // Type 'number' is not assignable to type 'never'.ts(2322)

// 补充2：never类型；当函数返回一个错误或者不可能有返回值的时候，返回值类型为never；
```
