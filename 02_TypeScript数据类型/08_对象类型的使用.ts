// 对象类型的简单回顾
// const info: {
//     name: string,
//     age: number
// } = {
//     name: 'kang',
//     age: 25
// }

// 2、对象类型和函数类型结合使用
// type就是一个别名
// 属性后面加上？ 表示当前属性是可选的
type PointType = { x: number, y: number, z?: number }
// 传入的内容，受到了相应的限制
function printCoordinate(point: PointType) {
    console.log("x坐标:", point.x)
    console.log("y坐标:", point.y)
}

// 调用
printCoordinate({ x: 20, y: 30 })

export {}

