// 字面量类似于常量，只能赋一次值，不能再修改了
var a;
a = 4;
// a=7
// 可以使用 | 来连接多个类型，又称为联合类型。用来限制变量在某几个值之间。
var b;
b = 'male';
b = 'female';
// | 不仅可以连接字面量，也可以连接其他类型作为联合类型，如：
var c; //  c既能被赋值为布尔值，也能被赋值为字符串。
c = 'adss';
c = true;
// any 表示的是任意类型，一个变量设置为类型any后相当于对该变量关闭了TS的类型检测。
// 在TS中不建议使用any类型。
// 声明变量时如果不指定类型，则TS解析器会自动判断变量的类型为any(隐式的any)。
// 一个类型为any的变量，可以赋值给任意变量，且不会报错。
var d;
d = 132;
d = 'dsaa';
// unknown表示未知类型的值。
// 与any的区别：一个类型为unknown的变量，赋值给其他类型变量时编译器会报错。
// 即一个类型为unknown的变量，不能直接赋值给其他变量。
var e;
e = 2;
// c = e
c = e;
c = e;
console.log('c是', c, typeof (e));
// void 用来表示空，用作函数的返回值类型，表示函数没有返回值。
// 除了将void类型作为函数返回值类型外，
// 在其他地方使用void类型是无意义的。
function fn1() {
}
// never 表示永远不会返回结果。
// never类型可以作为函数的返回值类型，表示该函数无法返回一个值。
// function fn2(): never{
//    console.log('错了')
//    throw new console.error('报错了')
// }
// object 表示一个js对象。在开发时一般不使用，因为在JS中一切皆为对象。
// 在实际开发中，我们更想限制的是一个对象中包含的属性，而不是限制它是不是对象。
//object表示一个js对象
//{}用来指定对象中可以包含哪些属性
//语法：  必须赋值的属性 {属性名：属性值，属性名：属性值}
var obj1;
obj1 = { a: '1', b: '5' };
// ?:表示属性是可选的，即在赋值时，可以不对该属性进行赋值
var obj2;
obj2 = { name: '孙悟空' };
// 假如我们要设置这样一个对象，只要求其必须具有name属性，其他属性可以随意添加。
// 语法：[propName: string]: any
var obj3;
obj3 = { name: '孙悟空', a: 1, b: '4' };
// array
// string[]：表示字符串数字
// number: [] 表示数值数组
var arr1;
arr1 = ['2', '3'];
var arr2;
arr2 = [1, 2, 3, 4];
// 还可以这样声明数组：Array<number>
var arr3;
arr3 = [12, 3, 3, 1];
// tuple
/**
 * 元组，就是固定长度的数组，即其中的元素个数是固定的。
 */
var arr4;
arr4 = ['周杰伦', 2];
// arr4 = [1,'4']//错误的写法
// enum枚举
/**
 * 将所有可能的情况一个个列出来。
 */
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var people1;
var people2;
people1 = { name: '孙悟空', gender: Gender.male };
people2 = { name: '猪八戒', gender: 0 };
console.log('enum枚举', people1.gender === people2.gender);
/* 除了用 | 连接两个类型以外，还可以用 & 进行连接，
   表示该变量要同时具有用 & 连接的所有类型的属性*/
var person;
person = { name: '小孙', gender: Gender.male };
var type1;
var type2;
type1 = 2;
