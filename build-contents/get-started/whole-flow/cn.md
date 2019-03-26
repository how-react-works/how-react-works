首先，我们需要知道React运行的一个完整流程。  
以一个简单的计数器为例，主要用来看React执行内部方法的流程。
```js
class App extends React.Component {
  state = { count: 0 }
  componentDidMount() {
    this.setState({count: 1})
  }

  onClick = () => {
    console.log( this.state.count )
  }

  render() {
    return <div onClick={ this.onClick }>{this.state.count}</div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
```

![](https://terry-su.github.io/CDN/images/how-react-works/setState-and-on-click.svg)
* [点击此处查看大图](https://terry-su.github.io/CDN/images/how-react-works/setState-and-on-click.svg)

上方为通过工具,基于Chrome浏览器开发者工具中的性能图表数据，生成的React内部方法运行的流程图。   
从中可以明显看出，React内部方法非常多。把所有方法都拎出来一个个讲，显示不太合理也没有必要。 但我们可以顺着流程走一遍，会发现它的主要几个大流程是：
1. `ReactDOM` 渲染一个DOM节点
2. 调度所有单元工作
3. 一个接一个执行单元工作
4. 提交-更新浏览器DOM

值得一提的是，执行`setState`方法后，React又会从步骤2开始执行一次。


##  `ReactDOM` 渲染一个DOM节点
```js
ReactDOM.render( <App />, docuemnt.getElementById('app') )
```

## 调度所有单元工作
这一步骤可以说是源码中最晦涩难懂的一部分。


## 一个接一个执行单元工作
1. 如果有未初始化的class组件，将其初始化。
2. 运用Diff算法，给组件打功能标签（新增、修改，删除等）

## 提交-更新浏览器DOM
提交所有功能标签（执行相应功能），从而更新DOM。