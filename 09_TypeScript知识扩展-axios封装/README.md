axios的封装
- 202
    - 有时候target目标代码版本太低了，引入某些东西会报错
    - 复制了某个东西的时候，很多地方报错的话，需要安装依赖npm install
    - 封装到service文件夹中，并配置index.ts作为统一的出口
        - config
        - modules
        - request
            - 在此文件夹下的index.ts 进行配置
            - 每创建一个HYRequest，其都是一个axios实例
            - 在类里面创建实例的话；一开始传入的类型是AxiosRequestConfig
            - index.ts
                - 在类class HYRequest中主要配置这几个东西
                    - 1、request实例 => axios的实例
                    - 2、封装网络请求的方法
            - modules => home.ts 在别的地方调用网络请求的操作
                - 发送网络请求以后，可以通过hyRequest.request({}).then()来拿到最终的一个结果
            - 有一些文件信息，如BASE_URL最好放置在config文件夹中
            - 做网络请求最好是进行二次封装；因为有的库可能没有维护
            - 通过在index.ts导入相应的内容，加入到webpack依赖图中解析   
        - index.ts

- 203
    - 拦截器操作
    - request => index.ts
    - 每个instance实例都添加拦截器
        - this.instance.interceptors.request.use(fn1, fn2)
        - 其中fn1和fn2分别是请求成功的拦截和请求失败的拦截回调
    - 可以在src => index.ts中创建多个拦截器实例对象
        - hyRequest1
        - hyRequest2
        - 然后在modules => entire.ts中可以进行测试；
            - hyRequest2.request({})
        - 代码想要执行的话，需要配置到webpack依赖图当中；
    - 想要针对某一个请求进行额外的拦截 ~ 而不每次都全局被拦截
        - 针对AxioRequestConfig 配置进行扩展
        - 可以从新书写某一个配置，继承自AxioRequestConfig
            - 并且在此处可以添加新的属性
            - 有好几种监视器函数需要进行配置
            ```
            requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig 
            requestFailureFn?: (err: any) => any 
            responseSuccessFn?: (res: T) => T
            responseFailureFn?: (err: any) => any 
            ```
        - 精细化控制；
            - 查看某个拦截器是否需要一些监听函数
        - use是一个函数
        - 很多时候可以通过可选链来获取

- 204
    - 每个单独对请求；也进行精细化对控制；哪个请求有拦截器；哪个请求没有拦截器
        - request => index.ts 封装网络请求的方法
        - 封装网络请求的方法中，可以自己return一个 new promise；
        - 在promise的内部发送网络请求
            - 在resolve之前进行判断是否有成功的拦截处理或者失败的拦截处理
    - 添加了一些精细化的拦截
    