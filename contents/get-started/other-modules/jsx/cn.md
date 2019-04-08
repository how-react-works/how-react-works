<0>React中的JSX是`React.createElement(component, props, ...children)`的语法糖。</0>  
<1>不使用JSX:</1>
```js
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.name}`);
  }
}
```
<2>使用JSX：</2>
```js
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```

## <3>实现原理</3>
<4>通过Babel编译JavaScript代码.</4>

<5>Node端和浏览器端的实现：</5>
* NodeJS: [@babel/plugin-transform-react-jsx](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx)
* <6>浏览器: 引入babel脚本后，在类型为"texst/babel"的脚本标签添加JSX代码</6>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    
    <!-- <7>不要在生产环境中使用这个脚本:</7> -->
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      // <8>此处为JSX代码</8>
      ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
      );
    </script>
  </body>
</html>
```