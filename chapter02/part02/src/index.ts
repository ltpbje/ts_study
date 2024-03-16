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

    // 获取食物X轴方向的坐标
    get X(){
        return this.element.offsetLeft
    }
    // 获取食物Y轴方向的坐标
    get Y(){
        return this.element.offsetHeight
    }
    // 修改食物的位置
    change(){
        // 生成一个随机的位置
        // 食物的位置最小是0 最大是290
        // 蛇移动一次就是一格 一格的大小就是10 所以就要求食物的
        this.element.style.left= Math.round(Math.random()*290)+'px'
        this.element.style.top= Math.round(Math.random()*290)+'px'
    }
}
const food =  new Food()
food.change()
// 定义表示计分牌的类
class ScorePannel{
    // score和level用来记录分数和等级
    score : number = 0
    level : number = 1
    // 分数和等级所在的元素，在构造函数中进行初始化
    scoreEle :HTMLElement 
    levelEle: HTMLElement
    // 定义变量限制等级
    maxLevel :number
    constructor(maxLevel :number = 10){
        this.scoreEle = document.querySelector('#score')!
        this.levelEle = document.querySelector('#level')!
        this.maxLevel = maxLevel
    }
    // 添加分数
    addScore(){
        this.scoreEle.innerHTML = this.score++ +''
    }

    // 提升等级
    levelUp(){
        if(this.level < this.maxLevel)
        {
            this.levelEle.innerHTML = this.level++ + ''    
        }
}
}