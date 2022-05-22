import axios from 'axios'
import React, { useRef } from 'react'

function App() {

    const nameRef = useRef(null)
    const emailRef = useRef(null)



    const handleClick = () => {


        let name = (nameRef.current.value)
        let email = (emailRef.current.value)
        let data = {
            name: name,
            email: email
        }
        axios.post("http://localhost:4000/users", data)

    }

    return <div>
        <h1>create name</h1>
        <input ref={nameRef} placeholder='name' />
        <input ref={emailRef} placeholder='email' />
        <button onClick={handleClick}>create</button>
    </div>
}
export default App