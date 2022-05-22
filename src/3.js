import React, { useEffect, useState } from 'react'

function App() {
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)


    const abc = () => sety(y + 1)

    useEffect(abc, [x])


    return <div>
        <h1>x : {x}</h1>
        <h1>y : {y}</h1>
        <button onClick={() => setx(x + 1)}>+</button>
        <button onClick={() => setx(x - 1)}>-</button>
        <button onClick={() => setx(0)}>0</button>
    </div>
}
export default App