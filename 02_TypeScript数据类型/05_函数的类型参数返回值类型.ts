// 在定义一个TypeScript中的函数时，都要明确的指定参数的类型
// 返回值类型可以明确的指定，也可以自动进行类型推导
function sum(num1: number, num2: number): number {
    return num1 + num2
}

const res = sum(123, 321) // 返回值的类型可以被推导出来
// sum('hang', 'kang') 报错

export {} 
