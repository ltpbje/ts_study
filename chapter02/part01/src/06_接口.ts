(function(){
    // 描述一个对象的类型
    type myType = {
        name:string,
        age:number
    }
    const obj:myType = {
        name:'小白',
        age:18
    }
    /** 
     *  接口用来定义一个类结构
     * 接口中的所有的属性都不能有实际的值
     * 接口只定义对象的结构，而不考虑实际值
     *   在接口中所有的方法都是抽象方法
     **/
    interface myInterface{
        name:String
        age:Number
    }
    const obj1:myInterface = {
        name:'小红',
        age: 12
    }
    interface myInter{
        name:string
        sayHello():void
    }
    /*
    * 定义类时，可以使类去实现一个接口， 
    * 实现接口就是使类满足接口的要求
    **/
    //    类“Myclass”错误实现接口“myInter”。
    // 类型“Myclass”缺少类型“myInter”中的以下属性: name,
    // implements”的中文意思是“实现”。在编程语境中，
    // 特别是在面向对象编程中，它通常用于表示一个类实现了某个接口。
    // 这意味着该类必须提供接口中声明的所有方法的具体实现。通过实现接口，
    // 类可以表明它支持特定的行为集，这是多态性的一种形式。在Java等语言中，
    // 使用“implements”关键字来声明一个类实现了某个接口。
   class Myclass implements myInter{
    name:string
    constructor(name:string){
        this.name = name
    }
    sayHello(){
        console.log('你好你好');
        
    }
   }
})()