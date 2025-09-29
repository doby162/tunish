import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [msg, setMsg] = useState('')
    const [messages, setMessages] = useState([])
    const [shell, setShell] = useState('')
    const [inner, setInner] = useState('')
    const [mod, setMod] = useState(false)
    const [name, setName] = useState('')
    const [toggleInner1, setToggleInner1] = useState(false)
    const [toggleInner2, setToggleInner2] = useState(false)
    const [toggleInner3, setToggleInner3] = useState(false)
    const [toggleInner4, setToggleInner4] = useState(false)
    const [toggleInner5, setToggleInner5] = useState(false)
    const [toggleInner6, setToggleInner6] = useState(false)
    const [toggleOuter1, setToggleOuter1] = useState(false)
    const [toggleOuter2, setToggleOuter2] = useState(false)
    const [toggleOuter3, setToggleOuter3] = useState(false)
    const [toggleOuter4, setToggleOuter4] = useState(false)
    const [toggleOuter5, setToggleOuter5] = useState(false)
    useEffect(() => {
        setName(localStorage.getItem('name'))
    }, []);

    useEffect(() => {
        switch ((toggleInner1 * 1) + (toggleInner2 * 10) + (toggleInner3* 100) + (toggleInner4 * 1000) + (toggleInner5 * 10000) + (toggleInner6 * 100000)) {
            case 10001: setInner('b')
                break
            case 1010: setInner('c')
                break
            case 10101: setInner('d')
                break
            case 100110: setInner('f')
                break
            case 11100: setInner('g')
                break
            case 10011: setInner('h')
                break
            case 10100: setInner('j')
                break
            case 110001: setInner('k')
                break
            case 10010: setInner('l')
                break
            case 101: setInner('m')
                break
            case 1101: setInner('n')
                break
            case 111111: setInner('ŋ')
                 break
            case 100010: setInner('p')
                break
            case 110010: setInner('r')
                break
            case 110110: setInner('s')
                break
            case 101111: setInner('ʃ')
                break
            case 101010: setInner('t')
                break
            case 111010: setInner('θ')
                break
            case 10111: setInner('ð')
                break
            case 11001: setInner('v')
                break
            case 101000: setInner('w')
                break
            case 11010: setInner('j')
                break
            case 11011: setInner('z')
                break
            case 111101: setInner('ʒ')
                break
            default: setInner('')
        }

    }, [toggleInner1, toggleInner2, toggleInner3, toggleInner4, toggleInner5, toggleInner6]);
    useEffect(() => {
        switch ((toggleOuter1 * 1) + (toggleOuter2 * 10) + (toggleOuter3* 100) + (toggleOuter4 * 1000) + (toggleOuter5 * 10000)) {
            case 0:
                setShell(' ')
                break
            case 11100:
                setShell('æ')
                break
            case 11011:
                setShell('Â')
                break
            case 1100:
                setShell('ɑ')
                break
            case 1000:
                setShell('é')
                break
            case 111:
                setShell('ɛ')
                break
            case 1111:
                setShell('i')
                break
            case 1101:
                setShell('Î')
                break
            case 11000:
                setShell('ə')
                break
            case 101:
                setShell('Ê')
                break
            case 11:
                setShell('I')
                break
            case 10000:
                setShell('á')
                break
            case 10111:
                setShell('ɝ')
                break
            case 11111:
                setShell('o')
                break
            case 10:
                setShell('ó')
                break
            case 11110:
                setShell('ú')
                break
            case 110:
                setShell('ʊ')
                break
            case 1:
                setShell('å')
                break
            case 11101:
                setShell('Ô')
                break
            default:
                setShell('')
        }
    }, [toggleOuter1, toggleOuter2, toggleOuter3, toggleOuter4, toggleOuter5]);

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
        {pronounce: " ", display: ""},
    ]
    const consonants = [
        {pronounce: "B as in baby", display: "b"},
        {pronounce: "CH as in chat", display: "c"},
        {pronounce: "D as in dog", display: "d"},
        {pronounce: "F as in fox", display: "f"},
        {pronounce: "g as in gun", display: "g"},
        {pronounce: "H as in hop", display: "h"},
        {pronounce: "J as in jam", display: "ʤ"},
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
        {pronounce: "W as in wit", display: "w"},
        {pronounce: "Y as in you", display: "j"},
        {pronounce: "Z as in zip", display: "z"},
        {pronounce: "ZH as in Azure", display: "ʒ"},
        {pronounce: " ", display: ""},
    ]
    const combined = vowels.concat(consonants)
    const readable = ()=> {
        let str = ''
        // let str = msg.length ? msg.split('').map((char) => {
        //     let def = combined.find((e) => {
        //         return e.display === char
        //     })
        //     return def?.pronounce
        // }) : ""
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

    useEffect(() => {
        setInterval(()=>{getMessages()}, 1000)
    }, []);

    return (
        <>
            <div className="card">
                {messages.map((message) => {
                    return <p>{message.name}<code> : </code>{message.message}</p>
                })}
                <input type='text' onChange={(e)=>setMsg(e.target.value)} value={msg}></input>
                <button onClick={() => sendMessage()}>
                    sɛnd <code>send</code>
                </button>
                <button onClick={() => {setName(msg); localStorage.setItem('name', msg); setMsg('');}}>
                    sɛt ném <code>set name</code>
                </button>
                <br />
                {inner}{shell}{mod ? "_" : ""}
                <br />
                <br />
                {readable()}
                <br />

                <div style={{display: "flex"}}>
                    <br />
                    <div style={{width: '150px'}}>
                        <button onClick={()=>{setToggleInner4(!toggleInner4)}}>{toggleInner4 * 1}</button>
                        <button onClick={()=>{setToggleInner5(!toggleInner5)}}>{toggleInner5 * 1}</button>
                        <button onClick={()=>{setToggleInner6(!toggleInner6)}}>{toggleInner6 * 1}</button>
                        <button onClick={()=>{setToggleInner3(!toggleInner3)}}>{toggleInner3 * 1}</button>
                        <button onClick={()=>{setToggleInner2(!toggleInner2)}}>{toggleInner2 * 1}</button>
                        <button onClick={()=>{setToggleInner1(!toggleInner1)}}>{toggleInner1 * 1}</button>
                    </div>
                    <br />
                    <button style={{margin: '20px', marginRight: "-12px"}} onClick={()=>{setToggleOuter3(!toggleOuter3)}}>{toggleOuter3 * 1}</button>
                    <div style={{width: '120px'}}>
                        <button onClick={()=>{setToggleOuter4(!toggleOuter4)}}>{toggleOuter4 * 1}</button>
                        <button onClick={()=>{setToggleOuter5(!toggleOuter5)}}>{toggleOuter5 * 1}</button>
                        <button onClick={()=>{setToggleOuter2(!toggleOuter2)}}>{toggleOuter2 * 1}</button>
                        <button onClick={()=>{setToggleOuter1(!toggleOuter1)}}>{toggleOuter1 * 1}</button>
                    </div>
                    <br />
                    <button onClick={()=>{setMsg(msg + " ")}}>spés <code>space</code></button>
                    <button onClick={() => {
                        setMod(!mod)
                    }}>mɑd <code>mod</code></button>

                    <button onClick={() => {
                        setMsg(msg + inner + shell + (mod ? "_" : ""))
                        setInner('')
                        setShell('')
                        setMod(false)
                    }}>nə_trə_ kÎkæ_trə_ <code>enter character</code></button>
                </div>
            </div>
            <div style={{width: '410px'}}>
                {vowels.map((v) => {
                    return <button onClick={() => setShell(v.display)}>
                        <p>{v.display}</p>
                    </button>
                })}
            </div>
            <div style={{width: '640px'}}>
                {consonants.map((v) => {
                    return <button onClick={() => setInner(v.display)}>
                        <p>{v.display}</p>
                    </button>
                })}
            </div>
        </>
    )
}

export default App
