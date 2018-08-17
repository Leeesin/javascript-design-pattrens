// 模式简介：Observer类充当观察者，当观察到数据修改时，发布消息，通知自己的订阅者（Subscribe）
// Subscribe类的每一个实例都是一个订阅者，订阅Observer的变动
class Observer {
    //存放观察者实例

    constructor() {
        this.dependences = []//存放该观察者的 订阅者
        this.state = {}
    }

    setState(state) {
        this.state = state
        this.notifyAllSubscribes(state)
    }

    getState() {
        return this.state
    }
    addSubscribes(sub) {
        this.dependences.push(sub)
        this.notifyAllSubscribes(this.state)
    }

    notifyAllSubscribes(state) {
        this.dependences.forEach(sub => {
            sub.update(state)
        });
    }

}

class Subscribe {
    constructor() {

    }
    update(state) {
        console.log('观察者数据改变触发订阅者更新！！！最新的state是' + state)
    }
}
let observer = new Observer()
let subscribe1 = new Subscribe()

observer.addSubscribes(subscribe1)
observer.setState({ name: 1 })
