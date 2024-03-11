(function(){
    class Animal{
        name:string
        constructor( name:string ){
            this.name = name
        }
        sayHello(){
            console.log('你好你好')
        }
    }
    class Dog extends Animal{
        age: number
        sayHi(){
            // 在类的方法中super就表示当前类的父类
            super.sayHello()
            console.log(1)
        }
        // 派生类的构造函数必须包含 "super" 调用
        constructor(name:string, age:number){
            super(name)
            this.age = age
        }
    }
    const dog  = new Dog('小白',2)
    console.log(dog)    
    dog.sayHi()
    
    
})()