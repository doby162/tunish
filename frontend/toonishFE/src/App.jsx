import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [msg, setMsg] = useState('')
    const [messages, setMessages] = useState([])
    let sendMessage = async (msg) => {
        const url = "/messages";
        try {
            const response = await fetch(url,
                {method: 'POST', body: JSON.stringify({message: msg})});
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            // const result = await response.json();
            // console.log(result);
        } catch (error) {
            console.error(error.message);
        }
    }
    let getMessages =  async () => {
        const url = "/messages";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            setMessages(result.messages);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
    <>
      <div className="card">
          {messages.map((message)=>{
              return <p>{message.message}</p>
          })}
        <input type='text' onChange={(e)=>{setMsg(e.target.value)}}/>
        <button onClick={() => sendMessage(msg)}>
          submit
        </button>
          <button onClick={() => getMessages()}>
              refresh
          </button>
      </div>
    </>
  )
}

export default App
