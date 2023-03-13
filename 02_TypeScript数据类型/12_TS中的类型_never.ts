// 一、实际开发中只有进行类型推导时，可能会自动推导出never类型，但是很少使用
// 1、一个函数是死循环
function foo(): never {
    throw new Error('123')
}

foo() 

// 2、解析歌词的工具: 自动推导
function parseLyric() {
    return []
}

// 二、封装框架/工具库的时候可以使用一下never
function handleMessage(message: string | number) {
    switch(typeof message) {
        case 'string':
            console.log(message.length)
            break
        case 'number':
            console.log(message)
            break
        default:
            const check: never = message
    }
}

handleMessage('aaaa')
handleMessage(1234)

// 另外一个同事调用这个函数
// handleMessage(true) 不写never会报错
export {}
