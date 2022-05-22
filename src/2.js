import React, { useState } from 'react'

function App() {
    const [x, setx] = useState(0)
    // [0,fn]
    // console.log(useState(0))

    const p1 = () => setx(x + 1)
    const p2 = () => setx(x - 1)
    const p3 = () => setx(0)
    const p4 = () => setx(1000)
    const p5 = () => setx(500)
    return <div>
        <h1>counter : {x}</h1>
        <button onClick={p1}>+</button>
        <button onClick={p2}>-</button>
        <button onClick={p3}>0</button>
        <button onClick={p4}>1000</button>
        <button onClick={p5}>500</button>
    </div>
}
export default App