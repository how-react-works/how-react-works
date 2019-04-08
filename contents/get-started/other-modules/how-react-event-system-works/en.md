<0>The events on the React event system, known as synthetic events by the React team, are differentiated from the browser's native DOM events to declare and execute DOM events.</0>

## <1>How to operate</1>
<2>Take an onClick for example:</2>
```js
function EventApp() {
    return <div onClick={ () => console.log( 'hello' ) }>Click Here</div>
}
```

<3>More presentability of component instance structure in non-jsx form:</3>
```js
...
return React.createElement( 'div', {
        onClick: () => console.log( 'Hello' ) 
    },
    'Click Here' 
)
...
```
<4>Execution method flowchart related parts:</4>
![image](https://terry-su.github.io/CDN/images/how-react-works/how-react-event-system-works-1.png)


<5>During the React execution, when a DOM initializes a property, such as an event property, it binds the event.</5>