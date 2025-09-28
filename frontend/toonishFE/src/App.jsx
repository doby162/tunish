import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [msg, setMsg] = useState('')
    const [messages, setMessages] = useState([])
    const [shell, setShell] = useState('')
    const [inner, setInner] = useState('')
    const [mod, setMod] = useState(false)
    const vowels = [
        {pronounce: "A as in glass", display: "æ"},
        {pronounce: "AR as in arm", display: "Â"},
        {pronounce: "AH as in swan", display: "ɑ"},
        {pronounce: "AY as in bay", display: "é"},
        {pronounce: "E as in end", display: "ɛ"},
        {pronounce: "EE as in bee", display: "i"},
        {pronounce: "EER as in beer", display: "Î"},
        {pronounce: "EH as in the", display: "ə"},
        {pronounce: "ERE as in air", display: "Ê"},
        {pronounce: "I as in bit", display: "I"},
        {pronounce: "IE as in guy", display: "á"},
        {pronounce: "IR as in bird", display: "ɝ"},
        {pronounce: "OH as in toe", display: "o"},
        {pronounce: "OI as in toy", display: "ó"},
        {pronounce: "OO as in too", display: "ú"},
        {pronounce: "OU as in wolf", display: "ʊ"},
        {pronounce: "OW as in how", display: "å"},
        {pronounce: "ORE as in your", display: "Ô"},
        {pronounce: "blank", display: ""},
    ]
    const consonants = [
        {pronounce: "B as in baby", display: "b"},
        {pronounce: "CH as in chat", display: "c"},
        {pronounce: "D as in dog", display: "d"},
        {pronounce: "F as in fox", display: "f"},
        {pronounce: "g as in gun", display: "g"},
        {pronounce: "H as in hop", display: "h"},
        {pronounce: "J as in jam", display: "j"},
        {pronounce: "K as in kart", display: "k"},
        {pronounce: "L as in live", display: "l"},
        {pronounce: "M as in man", display: "m"},
        {pronounce: "N as in Net", display: "n"},
        {pronounce: "NG as in rink", display: "ŋ"},
        {pronounce: "P as in poppy", display: "p"},
        {pronounce: "R as in run", display: "r"},
        {pronounce: "S as in sit", display: "s"},
        {pronounce: "SH as in shut", display: "ʃ"},
        {pronounce: "T as in tunic", display: "t"},
        {pronounce: "TH as in thick", display: "θ"},
        {pronounce: "TH as in this", display: "ð"},
        {pronounce: "V as in vine", display: "v"},
        {pronounce: "W as in wit", display: "v"},
        {pronounce: "Y as in you", display: "v"},
        {pronounce: "Z as in zip", display: "z"},
        {pronounce: "ZH as in Azure", display: "ʒ"},
        {pronounce: "blank", display: ""},
    ]
    let sendMessage = async () => {
        const url = "/messages";
        try {
            const response = await fetch(url,
                {method: 'POST', body: JSON.stringify({message: msg})});
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            setMsg('')
            // const result = await response.json();
            // console.log(result);
        } catch (error) {
            console.error(error.message);
        }
    }
    let getMessages = async () => {
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
                {messages.map((message) => {
                    return <p>{message.message}</p>
                })}
                <input type='text' value={msg}></input>
                <button onClick={() => sendMessage()}>
                    submit <code>(send)</code>
                </button>
                <button onClick={() => getMessages()}>
                    refresh
                    <code>(refresh)</code>
                </button>


                <div style={{display: "flex"}}>

                    <div>
                        {inner}{shell}{mod ? "_" : ""}
                        <button onClick={() => {
                            setMod(!mod)
                        }}><code>mod</code></button>
                        <code>vowels:</code>
                        {vowels.map((v) => {
                            return <button onClick={() => setShell(v.display)}>
                                <p>{v.display}</p>
                                <code>{v.pronounce}</code>
                            </button>
                        })}
                    </div>
                    <div>
                        <code>consonants:</code>
                        {consonants.map((v) => {
                            return <button onClick={() => setInner(v.display)}>
                                <p>{v.display}</p>
                                <code>{v.pronounce}</code>
                            </button>
                        })}
                    </div>
                    <button onClick={() => {
                        setMsg(msg + inner + shell + (mod ? "_" : ""))
                        setInner('')
                        setShell('')
                        setMod(false)
                    }}><code>enter character</code></button>
                </div>
            </div>
        </>
    )
}

export default App
