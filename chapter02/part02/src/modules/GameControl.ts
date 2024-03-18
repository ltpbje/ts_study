import Food from "./Food";
import Snake from "./snake"
import ScorePannel from "./ScorePannel";
// 游戏控制器控制其他所有类
class GameControl{
    // 定义三个属性
    // 蛇
    snake : Snake
    // 食物
    food : Food
    // 记分牌
    scorePanel: ScorePannel
    // 储存蛇移动的方向
    direction : string = '1'
    constructor (){
        this.food = new Food()
        this.snake = new Snake()
        this.scorePanel = new ScorePannel()
        this.init()
    }
    // 游戏的初始化方法 调用后游戏开始
    init(){
    
        document.addEventListener('keydown',this.keydownHandle.bind(this))
        console.log(this.direction)
        
    }
    //创建一个键盘按下的响应函数 
    keydownHandle(event:KeyboardEvent){
        // 实例的 bind() 方法创建一个新函数，当调用该新函数时，
        // 它会调用原始函数并将其 this 关键字设置为给定的值，
        // 同时，还可以传入一系列指定的参数，
        // 这些参数会插入到调用新函数时传入的参数的前面。
        // console.log(event.key);
        this.direction = event.key
        console.log(this.direction)
        
    }

}
export default GameControl