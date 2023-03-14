// 获取DOM元素 <img class="img"/>
// const imgEl = document.querySelector(".img")
// if (imgEl !== null) { // 类型缩小
//   imgEl.src = "xxx"
//   imgEl.alt = "yyy"
// }

// 使用类型断言（确定某个类是某一个类型的时候）
const imgEl = document.querySelector(".img") as HTMLImageElement
imgEl.src = "xxx"
imgEl.alt = "yyy"


// 类型断言的规则: 断言只能断言成更加具体的类型, 或者 不太具体(any/unknown) 类型
const age: number = 18
// 错误的做法
// const age2 = age as string

// TS类型检测来说是正确的, 但是这个代码本身不太正确
// const age3 = age as any  // 断言成不太具体的类型
// const age4 = age3 as string // 断言成具体的类型
// console.log(age4.split(" "))

export {}
