/* 
    保存我的个人信息
    why 18 1.88
*/
// 1、使用数组
// 不合适：数组中最好保存相同的数据,获取值之后不能明确的知道对应的数据类型
const info1: any[] = ['why', 18, 1.88]
const value = info1[2]

// 2、使用对象类型
// 增加key，增加代码量
const info2 = {
    name: 'why',
    age: 18,
    height: 1.88
}

// 3、使用元祖类型
// 元祖数据结构中可以存放不同的数据结构，取出来的item也是有明确的类型
const info3: [string, number, number] = ['why', 18, 1.88]
const value2 = info3[2]

// 使用场景，在函数中使用元祖类型是最多的（函数的返回值）
function useState(initialState: number): [number, (newValue: number) => void] {
    let stateValue = initialState
    function setValue(newValue: number) {
        stateValue = newValue
    }
    // 函数中返回多个值的时候用元祖
    return [stateValue, setValue]
}

const [count, setCount] = useState(100)

// count() 报错

