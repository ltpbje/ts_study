/**
 * 使用cLass关键字来定义一个类
 * 
 *        类中主要包含了两个部分：
 *           属性
 *           方法
 */
class Person{
    // 定义实例属性
    name:string = '孙悟空'
    age:number = 18
}
const per = new Person()
console.log(per.name,per.age)
