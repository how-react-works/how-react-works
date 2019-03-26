<0>首先，我们需要知道React运行的一个完整流程。</0>  
<1>以一个简单的计数器为例，主要用来看React执行内部方法的流程。</1>
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

![](https://terry-su.github.io/CDN/images/how-react-works/setState-and-on-click_mini.png)
*[<2>点击此处查看原图</2>](https://terry-su.github.io/CDN/images/how-react-works/setState-and-on-click.png)*

<3>上方为通过工具,基于Chrome浏览器开发者工具中的性能图表数据，生成的React内部方法运行的流程图。</3>   
<4>从中可以明显看出，React内部方法非常多。把所有方法都拎出来一个个讲，显示不太合理也没有必要。 但我们可以顺着流程走一遍，会发现它的主要几个大流程是：</4>
1. `ReactDOM` <5>渲染一个DOM节点</5>
2. <6>调度所有单元工作</6>
3. <7>一个接一个执行单元工作</7>
4. <8>提交-更新浏览器DOM</8>

<9>值得一提的是，执行`setState`方法后，React又会从步骤2开始执行一次</9>。


##  `ReactDOM` <10>渲染一个DOM节点</10>
```js
ReactDOM.render( <App />, docuemnt.getElementById('app') )
```

## <11>调度所有单元工作</11>
<12>这一步骤可以说是源码中最晦涩难懂的一部分。</12>


## <13>一个接一个执行单元工作</13>
1. <14>如果有未初始化的class组件，将其初始化。</14>
2. <15>运用Diff算法，给组件打功能标签（新增、修改，删除等）</15>

## <16>提交-更新浏览器DOM</16>
<17>提交所有功能标签（执行相应功能），从而更新DOM。</17>