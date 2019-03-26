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
    return Hello {this.props.name};
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

  <head>
    <meta charset="UTF-8" />
    <title>Hello World
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    
    <!-- 不要在生产环境中使用这个脚本: -->
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      // 此处为JSX代码
      ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
      );
    </script>
  </body>
</html>
```