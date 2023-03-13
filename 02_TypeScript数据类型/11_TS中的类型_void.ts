/* 
    1、在TS中如果一个函数没有任何的返回值，那么返回值的类型就是void类型
    2、如果返回值是void类型，那么我们也可以返回undefined(TS编译器允许这么做而已)
*/
function sum(num1: number, num2: number): void {
    console.log(num1 + num2)
    // return undefined // 允许
}

// 应用场景：用来指定函数类型的返回值是void
type lyricInfoType = { time: number, text: string }
// parseLyric的数据类型：(lyric: string) => lyricInfoType[]
function parseLyric(lyric: string): lyricInfoType[] {
    const lyricInfos: lyricInfoType[] = []
    // 解析
    return lyricInfos
}
// parseLyric 函数/标识符/对象

// 使用别名的方式指定类型
type FooType = () => void // 函数类型：用箭头
const Foo: FooType = () => {

}

// 举个例子（后续还会讲解类型）
// 1、定义要求传入的函数的类型
type ExecFnType = (...args: any[]) => void
// 2、定义一个函数，并且接收的参数也是一个函数，并且这个函数的类型必须是ExecFnType
function delayExecFn(fn: ExecFnType) {
    setTimeout(() => {
        fn()
    }, 1000);
}

// 3、执行上面函数，并且传入一个匿名函数
delayExecFn((name, age) => {
    console.log(name, age)
})


export {  } 