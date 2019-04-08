<0>Fiber, specifically the Fiber algorithm, is at the core of the React algorithm, which is both</0>
* <1>An abstract object with a React element</1>   

<2>Is also</2>

* <3>One unit of work</3>   

<4>Because of Fiber's granularity, it's possible to React:</4>
* <5>Pause, reuse, or even give up some work</5>
* <6>Assign priorities to different types of work</6>

<7>In a nutshell, Fiber is what enables React to organize work on its own, boosting the browser's ability to render the user interface.</7>


## <8>The field of the Fiber object</8>
<9>Example:</9>
* stateNode: class<10>An instance of a component or function component</10>
* tag: [<11>Work label</11>](https://github.com/facebook/react/blob/master/packages/shared/ReactWorkTags.js)
* type：class<12>Component or function component</12>
* elementType
* key: <13>A unique flag in a list</13>


<14>Self characteristics:</14>
* return： <15>Father Fiber</15>
* child: <16>The child Fiber</16>
* sibling: <17>Adjacent Fiber</17>
* index


<18>Status and properties:</18>
* pendingProps：<19>Properties to be used</19> 
* memoizedProps: <20>Reusable properties</20>
* updateQueue: <21>To update the status, execute the callback function</21>
* memoizedState: <22>State of reusable class components</22>
* contextDependencies
* ~ ~
* mode

<23>Side effects (label)</23>：
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

> <24>Here, Side effects are actions like manually changing the DOM and requesting remote data that should not be performed during the React render process.</24>



<25>Based on Fiber, we can say that the React process is primarily two-step:</25>
1. <26>Render</26>
2. <27>Submit</27>

## <28>Render</28>
<29>Two entrances:</29>
1. `ReactDOM.render(...)`
2. `setState(...)`

<30>During the rendering process, the work loop is executed, somewhat like the event loop. A work cycle completes multiple units of work.

Related source code:</30>
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

## <31>Submit</31>
<32>Update the DOM</32>



## <33>Declares the cycle hook execution location</33>
<34>Render when executed:</34>
* componentWillMount
* componentWillReceiveProps
* shouldComponentUpdate
* componentWillUpdate

<35>Submitted:</35>
* componentDidMount
* componentDidUpdate
* componentWillUnmount