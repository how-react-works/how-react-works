<0>React事件系统的事件被React团队称为合成事件，与浏览器原生DOM事件作区分， 用来声明和执行DOM事件。</0>

## <1>如何运作</1>
<2>以一个onClick为例:</2>
```js
function EventApp() {
    return <div onClick={ () => console.log( 'hello' ) }>Click Here</div>
}
```

<3>用非JSX形式更形象的展现组件实例结构:</3>
```js
...
return React.createElement( 'div', {
        onClick: () => console.log( 'Hello' ) 
    },
    'Click Here' 
)
...
```
<4>执行方法流程图相关部分：</4>
![image](https://terry-su.github.io/CDN/images/how-react-works/how-react-event-system-works-1.png)


<5>在React的执行过程中，在一个DOM初始化属性时，如发现事件属性，则会绑定该事件。</5>