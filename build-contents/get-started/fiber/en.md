Fiber, specifically the Fiber algorithm, is at the core of the React algorithm, which is both
* An abstract object with a React element   

Is also

* One unit of work   

Because of Fiber's granularity, it's possible to React:
* Pause, reuse, or even give up some work
* Assign priorities to different types of work

In a nutshell, Fiber is what enables React to organize work on its own, boosting the browser's ability to render the user interface.


## The field of the Fiber object
Example:
* stateNode: classAn instance of a component or function component
* tag: [Work label](https://github.com/facebook/react/blob/master/packages/shared/ReactWorkTags.js)
* type：classComponent or function component
* elementType
* key: A unique flag in a list


Self characteristics:
* return： Father Fiber
* child: The child Fiber
* sibling: Adjacent Fiber
* index


Status and properties:
* pendingProps：Properties to be used 
* memoizedProps: Reusable properties
* updateQueue: To update the status, execute the callback function
* memoizedState: State of reusable class components
* contextDependencies
* ~ ~
* mode

Side effects (label)：
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

> Here, Side effects are actions like manually changing the DOM and requesting remote data that should not be performed during the React render process.



Based on Fiber, we can say that the React process is primarily two-step:
1. Apply colours to a drawing
2. submit

## Apply colours to a drawing
Two entrances:
1. `ReactDOM.render(...)`
2. `setState(...)`

During the rendering process, the work loop is executed, somewhat like the event loop. A work cycle completes multiple units of work.

Related source code:
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

## submit
Update the DOM



## Declares the cycle hook execution location
Render when executed:
* componentWillMount
* componentWillReceiveProps
* shouldComponentUpdate
* componentWillUpdate

Submitted:
* componentDidMount
* componentDidUpdate
* componentWillUnmount