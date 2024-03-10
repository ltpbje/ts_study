var num1 = 1;
var num2 = 2;
// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
var c = false;
// c = 2
c = true;
console.log(c);
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(1, 5));
