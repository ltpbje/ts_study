/**
 * 使用cLass关键字来定义一个类
 * 
 *        类中主要包含了两个部分：
 *           属性
 *           方法
 */
class Person{
    // 直接定义的属性是实例属性，需要通过对象的实例去访问：
    //      const per=newPerson(）;
    //      per.name
    // 
    //   使用static开头的属性是静态属性（类属性），可以直接通过类
    //     Person.age
    
    // 定义实例属性
    // readonly 只读属性
    // readonly name:string = '孙悟空'
    name:string = '孙悟空'
    // 在属性前使用 static 关键字可以定义类属性（静态属性）
    static age:number = 18
    static sayHi(){
        console.log('Hello 你好')
    }
}
const per = new Person()
console.log(per.name,Person.age)
per.name = 'tom'
console.log(per.name)
Person.sayHi()

