import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [msg, setMsg] = useState('')
    const [messages, setMessages] = useState([])
    const [shell, setShell] = useState('')
    const [inner, setInner] = useState('')
    const [mod, setMod] = useState(false)
    const vowels = [{pronounce: "A as in glass", display: "æ"}]
    const consonants = [{pronounce: "B as in baby", display: "b"}]
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
          submit <code>(send)</code>
        </button>
          <button onClick={() => getMessages()}>
              refresh
              <code>(refresh)</code>
          </button>


          <div style={{display: "flex"}}>

              <div>
                  {inner}{shell}{mod? "_" : ""}
                  <button onClick={()=>{setMod(!mod)}}> <code>mod</code></button>
                  <code>vowels:</code>
                  {vowels.map((v)=>{
                      return <button onClick={()=>setShell(v.display)}>
                          {v.display}
                          <code>{v.pronounce}</code>
                      </button>
                  })}
              </div>
              <div>
                  <code>consonants:</code>
                  {consonants.map((v)=>{
                      return <button onClick={()=>setInner(v.display)}>
                          {v.display}
                          <code>{v.pronounce}</code>
                      </button>
                  })}
              </div>
          </div>
      </div>
    </>
  )
}

export default App
