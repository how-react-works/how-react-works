Let's start with what happens if setState is synchronous?

1. Performance issues

Suppose there are multiple parent and child components, and the child component is updated through a partial state value of the parent component, and multiple redundant updates occur.

The simplest case:
```js
class Child extends Component {
    state = { childCount: 0 }
    componentDidMount() {
        this.setState( { childCount: 1 } )
    }
    render() {
        return <div>Count: { this.state.childCount + this.props.parentCount }</div>
    }
}

class Parent extends Component {
    state = { parentCount: 0 }
    componentDidMount() {
        this.setState( { parentCount: 1 } )
    }
    render() {
        return <Child parentCount={ this.state.parentCount }/>
    }
}
```
If setState is synchronous, the child component is updated three times. If it is asynchronous, the child component will be updated only twice.


2. Unable to implement asynchronous rendering  

If setState is synchronous, asynchronous rendering is no longer possible. React will then be rendered asynchronously, improving performance and user experience in some asynchronous scenarios.