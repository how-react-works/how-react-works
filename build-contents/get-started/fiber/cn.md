Fiber，准确说是Fiber算法，也是React的核心算法，它既是
* 一个带有一个React元素的**抽象对象**   

也是

* 一个单元工作   

正因为Fiber的颗粒性，它是React能够：
* 暂停，重用甚至是放弃一些工作
* 给不同类型的工作分配优先级

简单来说，就是Fiber让React支持自己安排工作任务，从而提升浏览器渲染用户界面的性能。


## Fiber对象的字段
实例：
* stateNode: class组件或函数组件的实例
* tag: [工作标签](https://github.com/facebook/react/blob/master/packages/shared/ReactWorkTags.js)
* type：class组件或函数组件
* elementType
* key: 在一个列表中的唯一标志


自身特性：
* return： 父Fiber
* child: 子Fiber
* sibling: 相邻Fiber
* index


状态和属性：
* pendingProps：即将用到的属性 
* memoizedProps: 可重用的属性
* updateQueue: 用于更新状态，执行回调函数
* memoizedState: 可重用的class组件的状态
* contextDependencies
* ~ ~
* mode

副作用（标签）：
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

> 在这里，副作用（Side effects）指的是一些类似手动更改DOM、请求远程数据，不应该在React渲染流程中执行的操作。



基于Fiber，我们可以说React的流程主要只有两个步骤：
1. 渲染
2. 提交

## 渲染
两个入口:
1. `ReactDOM.render(...)`
2. `setState(...)`

在渲染流程中，会执行工作循环（work loop），有点类似事件循环（event loop）。一次工作循环会完成多个单元工作。  
相关源码：
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

## 提交
更新DOM



## 声明周期钩子执行位置
渲染时执行：
* componentWillMount
* componentWillReceiveProps
* shouldComponentUpdate
* componentWillUpdate

提交时：
* componentDidMount
* componentDidUpdate
* componentWillUnmount