/** 
*  以abstract开头的类是抽象类，
*    抽象类和其他类区别不大，只是不能用来创建对象
*    抽象类就是专门用来被继承的类
* */
(function () {
   abstract class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        // 定义一个抽象方法
        // 抽象方法使用abstract开头，没有方法体
        // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
       abstract sayHello():void
    }
    class Dog extends Animal {
        age: number
        // 非抽象类“Dog”不会实现继承自“Animal”类的抽象成员“sayHello”。
        sayHello(){
            console.log('你好你好你好')
            
        }
        sayHi() {
            // 在类的方法中super就表示当前类的父类
            // 无法通过 super 表达式访问“Animal”类中的“sayHello”抽象方法。
            this.sayHello()
            console.log(1)
        }
        // 派生类的构造函数必须包含 "super" 调用
        constructor(name: string, age: number) {
            super(name)
            this.age = age
        }
    }
    const dog = new Dog('小白', 2)
    console.log(dog)
    dog.sayHi()
    // 无法创建抽象类的实例。
    // const snake  = new Animal()


})()