// 字面量类似于常量，只能赋一次值，不能再修改了
let a: 4
a =4 
// a=7

// 可以使用 | 来连接多个类型，又称为联合类型。用来限制变量在某几个值之间。

let b : 'male'| 'female'
b = 'male'
b = 'female'

// | 不仅可以连接字面量，也可以连接其他类型作为联合类型，如：

let c: string | boolean //  c既能被赋值为布尔值，也能被赋值为字符串。
c = 'adss'
c =true

// any 表示的是任意类型，一个变量设置为类型any后相当于对该变量关闭了TS的类型检测。
// 在TS中不建议使用any类型。
// 声明变量时如果不指定类型，则TS解析器会自动判断变量的类型为any(隐式的any)。
// 一个类型为any的变量，可以赋值给任意变量，且不会报错。
let d : any
d = 132
d ='dsaa'

// unknown表示未知类型的值。
// 与any的区别：一个类型为unknown的变量，赋值给其他类型变量时编译器会报错。
// 即一个类型为unknown的变量，不能直接赋值给其他变量。
let e :unknown
e = 2
// c = e
c  = e as string
c = <string>e
console.log('c是',c,typeof(e))

// void 用来表示空，用作函数的返回值类型，表示函数没有返回值。
// 除了将void类型作为函数返回值类型外，
// 在其他地方使用void类型是无意义的。
function fn1(): void{
}

// never 表示永远不会返回结果。
// never类型可以作为函数的返回值类型，表示该函数无法返回一个值。
function fn2(): never{
   console.log('错了')
   throw new console.error('报错了')
}
