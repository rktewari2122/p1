import axios from 'axios'
import React, { useRef } from 'react'

function App() {



    const p1 = () => {
        let url = "http://localhost:4000/users"
        let data = { name: "kk", email: "kk@yahpoo.com" }
        //create/post
        axios.post(url, data)
    }
    const p2 = () => {
        //read/get
        let url = "http://localhost:4000/users"
        axios.get(url)
    }
    const p3 = () => {
        //update/patch/put
        let url = "http://localhost:4000/users/1"
        let data = { name: "sumit madhwan" }
        axios.patch(url, data)
    }
    const p4 = () => {
        let url = "http://localhost:4000/users/1"
        //delete/delete
        axios.delete(url)
    }


    return <div>
        <h1>crud</h1>

        <button onClick={p1}>create</button>
        <button onClick={p2}>read</button>
        <button onClick={p3}>update</button>
        <button onClick={p4}>delete</button>

    </div>
}
export default App