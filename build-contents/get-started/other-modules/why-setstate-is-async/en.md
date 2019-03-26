先说如果setState是同步的，我们会遇到什么问题？

1. 性能问题

假设这里有多个父组件和子组件，子组件通过父组件的部分状态值进行更新，会有多次多余的更新出现。  
一个最简单的案例：
```js
class Child extends Component {
    state = { childCount: 0 }
    componentDidMount() {
        this.setState( { childCount: 1 } )
    }
    render() {
        return 数:{this.state。childCount + this.props。parentCount}
    }
}

class Parent extends Component {
    state = { parentCount: 0 }
    componentDidMount() {
        this.setState( { parentCount: 1 } )
    }
    render() {
        return <Child parentCount={ this.state.parentCount }/>
    }
}
```
如果setState是同步的，子组件会更新3次。而如果是异步，子组件只会更新2次。


2. 无法实现异步渲染  

如果setState是同步的，异步渲染将不再可能。而React以后会通过异步渲染，在一些异步情形中有效提升性能和用户体验。