import {useEffect, useState} from "react";

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
        switch ((toggleInner1 * 1) + (toggleInner2 * 10) + (toggleInner3 * 100) + (toggleInner4 * 1000) + (toggleInner5 * 10000) + (toggleInner6 * 100000)) {
            case 10001:
                setInner('b')
                break
            case 1010:
                setInner('c')
                break
            case 10101:
                setInner('d')
                break
            case 100110:
                setInner('f')
                break
            case 11100:
                setInner('g')
                break
            case 10011:
                setInner('h')
                break
            case 10100:
                setInner('j')
                break
            case 110001:
                setInner('k')
                break
            case 10010:
                setInner('l')
                break
            case 101:
                setInner('m')
                break
            case 1101:
                setInner('n')
                break
            case 111111:
                setInner('ŋ')
                break
            case 100010:
                setInner('p')
                break
            case 110010:
                setInner('r')
                break
            case 110110:
                setInner('s')
                break
            case 101111:
                setInner('ʃ')
                break
            case 101010:
                setInner('t')
                break
            case 111010:
                setInner('θ')
                break
            case 10111:
                setInner('ð')
                break
            case 11001:
                setInner('v')
                break
            case 101000:
                setInner('w')
                break
            case 11010:
                setInner('j')
                break
            case 11011:
                setInner('z')
                break
            case 111101:
                setInner('ʒ')
                break
            default:
                setInner('')
        }

    }, [toggleInner1, toggleInner2, toggleInner3, toggleInner4, toggleInner5, toggleInner6]);
    useEffect(() => {
        switch ((toggleOuter1 * 1) + (toggleOuter2 * 10) + (toggleOuter3 * 100) + (toggleOuter4 * 1000) + (toggleOuter5 * 10000)) {
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