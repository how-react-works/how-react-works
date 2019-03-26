React事件系统的事件被React团队称为合成事件，与浏览器原生DOM事件作区分， 用来声明和执行DOM事件。

## 如何运作
以一个onClick为例:
```
function EventApp() {
    return <div onClick={ () => console.log( 'hello' ) }>Click Here</div>
}
```

用非JSX形式更形象的展现组件实例结构:
```
...
return React.createElement( 'div', {
        onClick: () => console.log( 'Hello' ) 
    },
    'Click Here' 
)
...
```
执行方法流程图相关部分：
![image](http://note.youdao.com/yws/res/75677/9EEF39C28F284850901D991CE1792C49)


在React的执行过程中，在一个DOM初始化属性时，如发现事件属性，则会绑定该事件。