import {vowels, consonants} from "./phonemes.js";
import React, {useEffect} from "react";

export const flashcards = (inner, shell, mod) => {
    const [cardInner, setCardInner] = React.useState({})
    const [cardShell, setCardShell] = React.useState({})
    const [cardMod, setCardMod] = React.useState(false)

    const correct = cardInner.display === inner && cardShell.display === shell && cardMod === mod

    useEffect(() => {
        if(correct) {
            setTimeout(()=>{setCardInner({}); setCardShell({})}, 2000)
        }
    }, [correct]);


    const shuffle = ()=> {
        setCardInner(consonants[Math.floor(Math.random()*consonants.length)]);
        setCardShell(vowels[Math.floor(Math.random()*vowels.length)]);
        setCardMod(Math.random() > 0.9)
    }

    let card = cardInner.pronounce
    if (cardMod) {
        card = cardShell.pronounce + " " + card
    } else {
        card = card + " " + cardShell.pronounce
    }

    return <>
        <button onClick={shuffle}><code>flash card</code></button>
        {cardShell.display || cardInner.display ? <code>{card}</code> : ''}
        {correct? <code> Correct!</code> : <></>}

    </>
}