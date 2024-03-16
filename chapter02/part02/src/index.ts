// 引入样式
import './style/index.less'
class Food{
    element : HTMLElement
    constructor(){
        // 不能将类型“HTMLElement | null”分配给类型“HTMLElement”。
        // 不能将类型“null”分配给类型“HTMLElement”。ts(2322)
        // 需要在赋值之前检查变量是否不是null。你可以使用非空断言操作符（!），
        // 但是请注意，这可能会引入运行时错误，因为如果你错误地假设了一个值不是null，
        // 但实际上它是null，那么程序会在运行时崩溃。
        this.element  = document.getElementById('food')!
    }
}
const food =  new Food()
