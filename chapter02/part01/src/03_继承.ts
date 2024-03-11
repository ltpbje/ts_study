// 立即执行函数
(function(){
    class Animal{
        name: string
        age: number
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
        jiao(){
            console.log('动物在叫')
        }
    }
   /**  Dog extends Animal
    - 此时，Animal被称为父类，Dog被称为子类
    - 使用继承后，子类将会拥有父类所有的方法和属性
    - 通过继承可以将多个类中共有的代码写在一个父类中，
          这样只需要写一次即可让所有的子类都同时拥有父类中的属性
          如果希望在子类中添加一些父类中没有的属性或方法直接加就可以
    
    - 如果在子类中添加了和父类相同的方法，则子类方法会覆盖父类方法
             这种子类覆盖掉父类方法的形式，我们称为方法重写
    **/
    // 定义一个表示狗的类
    // 使Dog类继承Animal类
    class Dog extends Animal {
        bark(){
            console.log('汪汪汪汪')
        }
    }
    // 定义一个表示猫的类
    // 使Cat类继承Animal类
    class Cat extends Animal {
        bark(){
            console.log('喵喵喵')
        }
    }
    const dog  = new Dog('小白',2)
    console.log(dog)
    dog.bark()
    dog.jiao()

    const cat  = new Cat('小花',2)
    console.log(cat)
    cat.bark()
    cat.jiao()
})()