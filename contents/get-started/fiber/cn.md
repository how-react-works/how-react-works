<0>Fiber，准确说是Fiber算法，也是React的核心算法，它既是</0>
* <1>一个带有React元素的**抽象对象**</1>   

<2>也是</2>

* <3>一个单元工作</3>   

<4>正因为Fiber的颗粒性，它是React能够：</4>
* <5>暂停，重用甚至是放弃一些工作</5>
* <6>给不同类型的工作分配优先级</6>

<7>简单来说，就是Fiber让React支持自己安排工作任务，从而提升浏览器渲染用户界面的性能。</7>


## <8>Fiber对象的字段</8>
<9>实例：</9>
* stateNode: class<10>组件或函数组件的实例</10>
* tag: [<11>工作标签</11>](https://github.com/facebook/react/blob/master/packages/shared/ReactWorkTags.js)
* type：class<12>组件或函数组件</12>
* elementType
* key: <13>在一个列表中的唯一标志</13>


<14>自身特性：</14>
* return： <15>父Fiber</15>
* child: <16>子Fiber</16>
* sibling: <17>相邻Fiber</17>
* index


<18>状态和属性：</18>
* pendingProps：<19>即将用到的属性</19> 
* memoizedProps: <20>可重用的属性</20>
* updateQueue: <21>用于更新状态，执行回调函数</21>
* memoizedState: <22>可重用的class组件的状态</22>
* contextDependencies
* ~ ~
* mode

<23>副作用（标签）</23>：
* effectTag
* nextEffect
* ~ ~
* firstEffect
* lastEffect
* ~ ~
* expirationTime
* childExpirationTime
* ~ ~
* alternate
* ~ ~
* ref
* ~ ~

> <24>在这里，副作用（Side effects）指的是一些类似手动更改DOM、请求远程数据，不应该在React渲染流程中执行的操作。</24>



<25>基于Fiber，我们可以说React的流程主要只有两个步骤：</25>
1. <26>渲染</26>
2. <27>提交</27>

## <28>渲染</28>
<29>两个入口:</29>
1. `ReactDOM.render(...)`
2. `setState(...)`

<30>在渲染流程中，会执行工作循环（work loop），有点类似事件循环（event loop）。一次工作循环会完成多个单元工作。  
相关源码：</30>
```js
function workLoop(isYieldy) {
  if (!isYieldy) {
    // Flush work without yielding
    while (nextUnitOfWork !== null) {
      nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    }
  } else {
    // Flush asynchronous work until there's a higher priority event
    while (nextUnitOfWork !== null && !shouldYieldToRenderer()) {
      nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    }
  }
}
```

## <31>提交</31>
<32>更新DOM</32>



## <33>声明周期钩子执行位置</33>
<34>渲染时执行：</34>
* componentWillMount
* componentWillReceiveProps
* shouldComponentUpdate
* componentWillUpdate

<35>提交时：</35>
* componentDidMount
* componentDidUpdate
* componentWillUnmount