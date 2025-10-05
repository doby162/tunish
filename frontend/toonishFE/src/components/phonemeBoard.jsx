import {consonants, vowels} from "./phonemes.js";


export const PhonemeBoard = ({setShell, setInner}) => {
    return <div className={'flex'}>
        <div style={{maxWidth: "300px"}}>
            {vowels.map((v) => {
                return <button className={'key'} key={v.display} onClick={() => setShell(v.display)}>
                    <p>{v.display}</p>
                </button>
            })}
        </div>
        <div style={{maxWidth: "480px"}}>
            {consonants.map((v) => {
                return <button className={'key'} key={v.display} onClick={() => setInner(v.display)}>
                    <p>{v.display}</p>
                </button>
            })}
        </div>
    </div>
}