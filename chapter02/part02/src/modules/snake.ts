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
        this.head = document.querySelector('#snake>div') as HTMLElement 
        this.bodies = document.querySelector('#snake')!.getElementsByTagName('div')  
    }
    // 获取蛇的蛇头X坐标
    get X(){
        return this.head.offsetLeft
    }
    // 获取蛇的蛇头Y坐标
    get Y(){
        return this.head.offsetTop
        // return this.head.offsetHeight

    }
    // 设置蛇头X坐标
    set X(value){
        if(this.X == value){
            return
        }
        // X的值的合法范围0-290之间
        if(value<0|| value> 290){
            // 进入判断说明蛇撞墙了
            throw new Error('蛇撞墙了')
        } 
        // 检查X方向是否掉头
        if(this.bodies[1]&& (this.bodies[1] as HTMLElement).offsetLeft == value){
            // console.log('发生了掉头')

            if (value > this.X ){
                // value > 旧值X 说明在向右掉头 所以要继续向左移动
                 value= this.X - 10  
            }else{
                value = this.X + 10
            }
        }
        this.moveBody()
       
        this.head.style.left = value + 'px'
    }
    // 设置蛇头Y坐标
    set Y(value){
        if (this.Y == value) {
            return
        }
        if (value < 0 || value > 290) {
            // 进入判断说明蛇撞墙了
            throw new Error('蛇撞墙了')
        }
        // 检查Y方向是否掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop == value) {
            // console.log('发生了掉头')

            if (value > this.Y) {
                // value > 旧值Y 说明在向下掉头 所以要继续向上移动
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }
        }
        this.moveBody()
        this.head.style.top  = value +'px'
    }
    // 蛇添加身体
    addBody(){
        // 向element中添加一个div
        // element.insertAdjacentHTML(position, text);
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }
    moveBody(){
        // 从后往前遍历蛇的身体
        for(let i = this.bodies.length-1;i>0;i--){
            // 获取前边身体的位置
            let X:number = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y:number = (this.bodies[i-1] as HTMLElement).offsetTop;
            // 将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left  = X + "px";
            (this.bodies[i] as HTMLElement).style.top  =  Y  + "px";
        }
    }

}
export default Snake