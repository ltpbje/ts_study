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
    direction : string = 'Right'
    // 蛇的存活状态
    isLive :boolean = true
    constructor (){
        this.food = new Food()
        this.snake = new Snake()
        this.scorePanel = new ScorePannel()
        this.init()
    }
    // 游戏的初始化方法 调用后游戏开始
    init(){
    
        document.addEventListener('keydown',this.keydownHandle.bind(this))
        // console.log(this.direction)
        this.run()

    }
    //创建一个键盘按下的响应函数 
    keydownHandle(event:KeyboardEvent){
        // 实例的 bind() 方法创建一个新函数，当调用该新函数时，
        // 它会调用原始函数并将其 this 关键字设置为给定的值，
        // 同时，还可以传入一系列指定的参数，
        // 这些参数会插入到调用新函数时传入的参数的前面。
        // console.log(event.key);
        this.direction = event.key
        // console.log(this.direction)
    
    }
//     ArrowUp Up
//     ArrowDown Down
//     ArrowLeft Left
//     ArrowRight Right
    run (){
        let X = this.snake.X
        let Y = this.snake.Y
        // 根据按键方向来修改X值和Y值
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                // 向上移动 top 减少
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                // 向下移动 top 增加
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                // 向左移动 left 减少
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                // 向右移动 left 增加
                X += 10;
                break;
        }
        // 检查是否吃到
        this.checkEat(X,Y)
        // 检查是否撞墙
        try
        {
            this.snake.X=X
            this.snake.Y=Y
        }catch(e:any){
            // 进入catch说明出现了异常 游戏结束 弹出一个提示信息
            alert(e.message + 'GAME OVER')
            // 将isLive 设置为 false
            this.isLive = false
        }
        this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level - 1)*30)
    }
    // 定义一个方法检查是否吃到
    checkEat(X:number,Y:number){
     if(this.food.X == X && this.food.Y == Y)    
     {
         console.log('吃到了')
         // 改变食物位置
         this.food.change()
         // 添加一分
         this.scorePanel.addScore()
         // 添加身体 
         this.snake.addBody()
     }
    }
}
export default GameControl