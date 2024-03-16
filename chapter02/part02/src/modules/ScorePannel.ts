// 定义表示计分牌的类
class ScorePannel {
    // score和level用来记录分数和等级
    score: number = 0
    level: number = 1
    // 分数和等级所在的元素，在构造函数中进行初始化
    scoreEle: HTMLElement
    levelEle: HTMLElement
    // 定义变量限制等级
    maxLevel: number
    // 设置一个变量规定多少分时升级
    upScore: number
    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.querySelector('#score')!
        this.levelEle = document.querySelector('#level')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }
    // 添加分数
    addScore() {
        this.scoreEle.innerHTML = ++this.score + ''
        // 判断当前分数是否要升级
        if (this.score % this.upScore == 0) {
            this.levelUp()
        }
    }

    // 提升等级
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + ''
        }
    }
}
// const score =  new ScorePannel()
// for(let i =0 ; i<20;i++){
//     score.addScore()
// }
export default ScorePannel