import {useEffect, useState} from "react";
import {consonants, vowels} from "./phonemes.js";

export const toggleBoard = (setShell, setInner) => {
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
        let code = (toggleInner1 * 1) + (toggleInner2 * 10) + (toggleInner3 * 100) + (toggleInner4 * 1000) + (toggleInner5 * 10000) + (toggleInner6 * 100000)
        let char = consonants.find((char) => {
            return code === char.code
        })
        if (char) {
            setInner(char.display)
        } else {
            setInner('')
        }
    }, [toggleInner1, toggleInner2, toggleInner3, toggleInner4, toggleInner5, toggleInner6]);
    useEffect(() => {
        let code = (toggleOuter1 * 1) + (toggleOuter2 * 10) + (toggleOuter3 * 100) + (toggleOuter4 * 1000) + (toggleOuter5 * 10000)
        let char = vowels.find((char) => {
            return code === char.code
        })
        if (char) {
            setShell(char.display)
        } else {
            setShell('')
        }
    }, [toggleOuter1, toggleOuter2, toggleOuter3, toggleOuter4, toggleOuter5]);

    return <div className={'flex'}>
        <div style={{width: '50%'}}>
            <div className={'flex'}>
                <button onClick={() => {
                    setToggleInner4(!toggleInner4)
                }}>{toggleInner4 * 1}</button>
                <button onClick={() => {
                    setToggleInner5(!toggleInner5)
                }}>{toggleInner5 * 1}</button>
                <button onClick={() => {
                    setToggleInner6(!toggleInner6)
                }}>{toggleInner6 * 1}</button>
            </div>
            <div className={'flex'}>
                <button onClick={() => {
                    setToggleInner3(!toggleInner3)
                }}>{toggleInner3 * 1}</button>
                <button onClick={() => {
                    setToggleInner2(!toggleInner2)
                }}>{toggleInner2 * 1}</button>
                <button onClick={() => {
                    setToggleInner1(!toggleInner1)
                }}>{toggleInner1 * 1}</button>
            </div>
        </div>

        <div style={{width: '50%'}} className={'flex'}>
            <div className={'flex'}>
                <button onClick={() => {
                    setToggleOuter3(!toggleOuter3)
                }}>{toggleOuter3 * 1}</button>
            </div>
            <div className={'flexColumn'}>
                <button onClick={() => {
                    setToggleOuter4(!toggleOuter4)
                }}>{toggleOuter4 * 1}</button>
                <button onClick={() => {
                    setToggleOuter2(!toggleOuter2)
                }}>{toggleOuter2 * 1}</button>
            </div>
            <div className={'flexColumn'}>
                <button onClick={() => {
                    setToggleOuter5(!toggleOuter5)
                }}>{toggleOuter5 * 1}</button>
                <button onClick={() => {
                    setToggleOuter1(!toggleOuter1)
                }}>{toggleOuter1 * 1}</button>
            </div>
        </div>
    </div>
}