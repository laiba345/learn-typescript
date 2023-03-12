// 1、类型推导
/* let info = {
    name:'kang', 
    age: 25, 
    height: 1.88
} */


type InfoType = {
    name: string
    age: number
}

let info: InfoType = {
    name: 'kang', 
    age: 18
}

export {} 