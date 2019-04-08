The events on the React event system, known as synthetic events by the React team, are differentiated from the browser's native DOM events to declare and execute DOM events.

## How to operate
Take an onClick for example:
```js
function EventApp() {
    return <div onClick={ () => console.log( 'hello' ) }>Click Here</div>
}
```

More presentability of component instance structure in non-jsx form:
```js
...
return React.createElement( 'div', {
        onClick: () => console.log( 'Hello' ) 
    },
    'Click Here' 
)
...
```
Execution method flowchart related parts:
![image](https://terry-su.github.io/CDN/images/how-react-works/how-react-event-system-works-1.png)


During the React execution, when a DOM initializes a property, such as an event property, it binds the event.