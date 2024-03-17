// 蛇类
class Snake{
    // 表示蛇头的元素
    head:HTMLElement
    // HTMLCollectionHTML DOM 中的 HTMLCollection 是即时更新的（live）；
    // 当其所包含的文档结构发生改变时，它会自动更新。
    bodies:HTMLCollection
    element:HTMLElement
    constructor(){
        this.element =  document.querySelector('#snake')!
        this.head = document.querySelector('#snake > div') as HTMLElement 
        this.bodies = document.querySelector('#snake')!.getElementsByTagName('div')  
    }
    // 获取蛇的蛇头X坐标
    get X(){
        return this.head.offsetLeft
    }
    // 获取蛇的蛇头Y坐标
    get Y(){
        return this.head.offsetHeight
    }
    // 设置蛇头X坐标
    set X(value){
        this.head.style.left = value + 'px'
    }
    // 设置蛇头Y坐标
    set Y(value){
        this.head.style.top  = value +'px'
    }
    // 蛇添加身体
    addBody(){
        // 向element中添加一个div
        // element.insertAdjacentHTML(position, text);
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }

}