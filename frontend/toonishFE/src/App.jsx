import {useEffect, useState} from 'react'
import './App.css'
import {combined} from "./components/phonemes.js";
import {phonemeBoard} from "./components/phonemeBoard.jsx";
import {toggleBoard} from "./components/toggleBoard.jsx";
import Switch from '@mui/material/Switch';
import {flashcards} from "./components/flashcards.jsx";

function App() {
    const [msg, setMsg] = useState('')
    const [messages, setMessages] = useState([])
    const [name, setName] = useState('')
    const [shell, setShell] = useState('')
    const [inner, setInner] = useState('')
    const [mod, setMod] = useState(false)
    const [phonemeOrToggle, setPhonemeOrToggle] = useState(false)

    const appendToMsg = () => {
        setMsg(msg + inner + shell + (mod ? "_" : ""))
        setMod(false)
    }
    const toggleMod = () => {
        setMod(!mod)
    }
    const space = () => {
        setMsg(msg + " ")
    }

    const phoneBoard = phonemeBoard(setShell, setInner)
    const togBoard = toggleBoard(setShell, setInner)

    useEffect(() => {
        setName(localStorage.getItem('name'))
    }, []);

    const readable = () => {
        let str = ''
        str = str + combined.find((e) => {
            return e.display === inner
        })?.pronounce
        let str2 = combined.find((e) => {
            return e.display === shell
        })?.pronounce
        if (!mod) {
            str = str + " " + str2
        } else {
            str = str2 + " " + str

        }
        return <code>{str}</code>
    }
    let sendMessage = async () => {
        const url = "/messages";
        try {
            const response = await fetch(url,
                {method: 'POST', body: JSON.stringify({message: msg, name: name})});
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            setMsg('')
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

    useEffect(() => {
        setInterval(() => {
            getMessages()
        }, 1000)
    }, []);

    return (
        <>
            <div>
                {messages.map((message) => {
                    return <p>{message.name}<code> : </code>{message.message}</p>
                })}
                <Switch checked={phonemeOrToggle} onChange={(e) => {
                    setPhonemeOrToggle(e.target.checked)
                }}></Switch>
                <input type='text' onChange={(e) => setMsg(e.target.value)} value={msg}></input>
                <button onClick={() => sendMessage()}>
                    sɛnd <code>send</code>
                </button>
                <button onClick={() => {
                    setName(msg);
                    localStorage.setItem('name', msg);
                    setMsg('');
                }}>
                    sɛt ném <code>set name</code>
                </button>
                <br/>
                {inner}{shell}{mod ? "_" : ""} {" "}
                {readable()}
                <br/>
                <button onClick={() => {
                    toggleMod()
                }}>mɑd <code>mod</code></button>
                <button onClick={() => {
                    space()
                }}>spés <code>space</code></button>
                <button onClick={() => {
                    appendToMsg()
                    setInner('')
                    setShell('')
                }}>nə_trə_ kÎkæ_trə_ <code>enter character</code></button>
                {phonemeOrToggle ? phoneBoard : togBoard}

            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            {flashcards(inner, shell, mod)}
        </>
    )
}

export default App
