<0>The JSX React is ` React. CreateElement method (component, props,... The children) ` syntactic sugar.</0>  
<1>Do not use the JSX:</1>
```js
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.name}`);
  }
}
```
<2>Using JSX:</2>
```js
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```

## <3>Realize the principle of</3>
<4>Compile JavaScript code through Babel.</4>

<5>Implementation of Node and browser side:</5>
* NodeJS: [@babel/plugin-transform-react-jsx](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx)
* <6>Browser: after the Babel script is introduced, add JSX code to the script tag of type "texst/ Babel"</6>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    
    <!-- <7>Do not use this script in production:</7> -->
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      // <8>The JSX code is here</8>
      ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
      );
    </script>
  </body>
</html>
```