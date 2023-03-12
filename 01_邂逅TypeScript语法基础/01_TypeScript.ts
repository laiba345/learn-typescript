/* 
    直接在代码编写的时候，就能发现错误，不用等到浏览器运行
*/
function getLength(args: { length: number }) {
    return args.length
}

// getLength(123) // 传入的类型错误
getLength('1111')

export {}