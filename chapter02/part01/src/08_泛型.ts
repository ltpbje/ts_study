/**function fn(a:any):any{
    return a
}
*/
// 在定义函数或是类时，如果遇到类型不明确就可以使用泛型

function fn<T>(a:T):T{
//     不能将类型“number”分配给类型“T”。
//   “T”可以使用与“number”无关的任意类型进行实例化。
    return a
}

// 可以直接调用具有泛型的函数
let result = fn(10) //泛型，TS可以自动对类型进行推断
let result2 =  fn<string>('hello')//指定泛型