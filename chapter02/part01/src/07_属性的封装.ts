(function(){
    // 定义一个表示人的类
    class Person {
        // public修饰的属性可以在任意位置访问（修改）默认值
        // private私有属性，私有属性只能在类内部进行访问（修改）
        //    - 通过在类中添加方法使得私有属性可以被外部访问
        //  protected受包含的属性，只能在当前类和当前类的子类中        
        private name:string
        private _age : number
        constructor(name:string,age:number){
            this.name =  name
            this._age  = age
        }
        // 通过方法来修改私有属性
        // setName(name:string){
        //     this.name = name
        // }
        // setAge(age:number){
        //     if(age>0)
        //     {
        //         this.age =  age
        //     }        
        // }
        set age(val:number){
            if(val>0)
            this._age = val
        }
        get age (){
            return this._age
        }
    }
    const per  = new Person ('孙悟空',18)
/** 
 *  在属性是在对象中设置的，属性可以任意的被修改，
 * 属性可以任意被修改将会导致对象中的数据变得非常不安全
*/
    // 属性“name”为私有属性，只能在类“Person”中访问。
    // per.name  ='la'
// per.setName('猪八戒')
per.age = 99
console.log(per)

class A{
   protected num :number
    constructor(num:number){
        this.num  =num
    }
}
class B extends A{
    test(){
        // 如果属性“num”为私有属性，只能在类“A”中访问。
        // console.log(this.num)
        console.log(this.num)
    }
}
const b = new B(23)
// 属性“num”受保护，只能在类“A”及其子类中访问。
// 此处无法访问
// console.log(b.num);
class C{
    constructor(public name:string,public age:number,public gender:string){

    }
}
 const c =new C('乐乐',13,'男')
})()