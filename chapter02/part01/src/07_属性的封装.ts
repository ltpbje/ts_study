(function(){
    // 定义一个表示人的类
    class Person {
        // public修饰的属性可以在任意位置访问（修改）默认值
        // private私有属性，私有属性只能在类内部进行访问（修改）
        //    - 通过在类中添加方法使得私有属性可以被外部访问
        private name:string
        private age : number
        constructor(name:string,age:number){
            this.name =  name
            this.age  = age
        }
        // 通过方法来修改私有属性
        setName(name:string){
            this.name = name
        }
        setAge(age:number){
            this.age =  age
        }
    }
    const per  = new Person ('孙悟空',18)
/** 
 *  在属性是在对象中设置的，属性可以任意的被修改，
 * 属性可以任意被修改将会导致对象中的数据变得非常不安全
*/
    // 属性“name”为私有属性，只能在类“Person”中访问。
    // per.name  ='la'
per.setName('猪八戒')
console.log(per)

})()