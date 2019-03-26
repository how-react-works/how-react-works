React中的JSX是`React.createElement(component, props, ...children)`的语法糖。  
不使用JSX:
```js
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.name}`);
  }
}
```
使用JSX：
```js
class Hello extends React.Component {
  render() {
    return 你好{this.props.name};
  }
}
```

## 实现原理
通过Babel编译JavaScript代码.

Node端和浏览器端的实现：
* NodeJS: [@babel/plugin-transform-react-jsx](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx)
* 浏览器: 引入babel脚本后，在类型为"texst/babel"的脚本标签添加JSX代码

```html
<!DOCTYPE html>
<头>

< meta charset = " utf - 8 " / >

<标题> Hello World < /名称>

< script src = " https://unpkg.com/react@16 umd格式/ react.development.js " > < /脚本>

< script src = " https://unpkg.com/react-dom@16 umd格式/ react-dom.development.js " > < /脚本>

< !——不要在生产环境中使用这个脚本:- - >

< script src = " https://unpkg.com/babel-standalone@6.15.0 babel.min.js " > < /脚本>

< / >头

<身体>

< div id = "根" > < / div >

< script type = " text /巴别塔" >

/ /此处为JSX代码

ReactDOM.render (

<标题>你好,世界! < / h1 >,

. getelementbyid(根)

);

> < /脚本

< /身体>
```