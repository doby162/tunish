import {consonants, vowels} from "./phonemes.js";


export const phonemeBoard = (setShell, setInner) => {
    return <div className={'flex'}>
        <div>
            {vowels.map((v) => {
                return <button className={'key'} key={v.display} onClick={() => setShell(v.display)}>
                    <p>{v.display}</p>
                </button>
            })}
        </div>
        <div>
            {consonants.map((v) => {
                return <button className={'key'} key={v.display} onClick={() => setInner(v.display)}>
                    <p>{v.display}</p>
                </button>
            })}
        </div>
    </div>
}