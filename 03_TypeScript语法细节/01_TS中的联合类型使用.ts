let foo: number | string = 'abc'

foo = 'abc'

// 使用的时候需要特别小心
if (typeof foo === 'string') {
    console.log(foo.length)
}

// 打印id
function printId(id: number | string) {
    console.log('您的ID:', id)

    // 类型缩小
    if (typeof id === 'string') {
        console.log(id.length)
    } else {
        console.log(id)
    }
}
printId('abc')

export {  } 
