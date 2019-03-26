First, we need to know the full process running on React.  
Take a simple counter, primarily used to see the process on React executing internal methods.
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
*[Click here to view the original image](https://terry-su.github.io/CDN/images/how-react-works/setState-and-on-click.png)*

Above is a flowchart of the React internal methods running through the tools, based on the performance chart data from the Chrome developer tools.   
It should be obvious here that there are a lot of internal React methods. Take all methods out one by one, show not quite reasonable also do not need. But we can go through the process and find that the main processes are:
1. `ReactDOM` Render a DOM node
2. Schedule work for all units
3. Unit after unit of execution
4. Submit - updates the browser DOM

It is worth mentioning that perform ` setState ` method, after the React will perform a starting step 2。


##  `ReactDOM` Render a DOM node
```js
ReactDOM.render( <App />, docuemnt.getElementById('app') )
```

## Schedule work for all units
This step is arguably the most arcane part of the source code.


## Unit after unit of execution
1. If there is an uninitialized class component, initialize it.
2. Use Diff algorithm to label components with functions (add, modify, delete, etc.)

## Submit - updates the browser DOM
Update the DOM by submitting all functional tags (performing the corresponding functions).