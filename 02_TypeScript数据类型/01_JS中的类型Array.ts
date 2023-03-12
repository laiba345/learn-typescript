/* 
    明确的指定<数组>的类型注解
    - 1、string[]:数组类型，并且数组中存放的是字符串类型
    - 2、Array<string>: 数组类型，并且数组中存放的是字符串类型

*/
// 注意点：在真实开发中，数组一般存放相同的类型，不要存放不同的类型
let names: string[] = ['abc', 'nba', 'cba'] // 1

names.push('kang')
// names.push(123) // 报错

let nums: Array<number> = [123, 321, 111] // 2

export {}