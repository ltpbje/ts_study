let num1 = 1
let num2 = 2
// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
let c =false
// c = 2
c = true
console.log(c)
 
function sum(num1: number,num2: number):number{
    return num1 + num2
}
console.log(sum(1, 5))
