<0>First, we need to know the full process running on React.</0>  
<1>Take a simple counter, primarily used to see the process on React executing internal methods.</1>
```js
class App extends React.Component {
  state = { count: 0 }
  componentDidMount() {
    this.setState({count: 1})
  }

  onClick = () => {
    console.log( this.state.count )
  }

  render() {
    return <div onClick={ this.onClick }>{this.state.count}</div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
```

![](https://terry-su.github.io/CDN/images/how-react-works/setState-and-on-click_mini.png)
*[<2>Click here to view the original image</2>](https://terry-su.github.io/CDN/images/how-react-works/setState-and-on-click.png)*

<3>Above is a flowchart of the React internal methods running through the tools, based on the performance chart data from the Chrome developer tools.</3>   
<4>It should be obvious here that there are a lot of internal React methods. Take all methods out one by one, show not quite reasonable also do not need. But we can go through the process and find that the main processes are:</4>
1. `ReactDOM` <5>Render a DOM node</5>
2. <6>Schedule work for all units</6>
3. <7>Unit after unit of execution</7>
4. <8>Submit - updates the browser DOM</8>

<9>It is worth mentioning that perform ` setState ` method, after the React will perform a starting step 2</9>。


##  `ReactDOM` <10>Render a DOM node</10>
```js
ReactDOM.render( <App />, docuemnt.getElementById('app') )
```

## <11>Schedule work for all units</11>
<12>This step is arguably the most arcane part of the source code.</12>


## <13>Unit after unit of execution</13>
1. <14>If there is an uninitialized class component, initialize it.</14>
2. <15>Use Diff algorithm to label components with functions (add, modify, delete, etc.)</15>

## <16>Submit - updates the browser DOM</16>
<17>Update the DOM by submitting all functional tags (performing the corresponding functions).</17>