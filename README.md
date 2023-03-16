# learn-typescript
learn typescript（codewhy)

## TypeScript的编译环境
```
# 安装命令
npm install typescript -g
# 查看安装的版本
tsc --version
```

## TS学习的等级划分（个人划分codeWhy）
1. 知道TS，但是没有用过
2. AnyScript，万物皆可any
3. 大多数使用any，但是普通的很多类型方法也是可以把握
4. 大多数类型都是使用正确的，极少数使用any（大部分了解此处即可**）
5. 可以使用TS封装一些高级类型，包括框架当中某些特殊的类型（pinia/vuex）
6. 学会使用TS提供的各种内置工具（ThisType/ReturnType/）
7. 真正TS融会贯通，看TS源码（TS开发者）


## 映射类型（开发中极少使用 187-189）

## 非模块
1. JS规范声明任何没有export的JS文件都应该被认为是一个脚本，而非一个模块
2. 如果你有一个文件，现在没有任何import或者export，但是你希望它被作为模块处理，添加这行代码
```
export { }
```
3. 上述代码改成一个没有导出任何内容的模块，这个语法可以生效，无论你模块的目的是什么
