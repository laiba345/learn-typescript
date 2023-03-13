let foo: unknown = 'aaa'

// console.log(foo.length) // 报错！！！

// 需要进行校验（类型缩小） 之后才能使用
// 才能根据缩小之后的类型，进行对应的操作
if (typeof foo == 'string') {
    console.log(foo.length)
}

export {  } 