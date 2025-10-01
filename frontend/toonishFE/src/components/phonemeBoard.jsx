import {consonants, vowels} from "./phonemes.js";


export const phonemeBoard = (setShell, setInner) => {
    return <div style={{display: 'flex'}}>
        <div style={{width: '410px'}}>
            {vowels.map((v) => {
                return <button key={v.display} onClick={() => setShell(v.display)}>
                    <p>{v.display}</p>
                </button>
            })}
        </div>
        <div style={{width: '640px'}}>
            {consonants.map((v) => {
                return <button key={v.display} onClick={() => setInner(v.display)}>
                    <p>{v.display}</p>
                </button>
            })}
        </div>
    </div>
}