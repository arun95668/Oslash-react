
import React, { useState } from 'react'
import './styles/Info.css'

function Info() {
    const [inputTitle, setinputTitle] = useState('https://www.miro.com')
    const [inputDesc, setinputDesc] = useState('Shortcut for miro board for new shorcut cards flows')
    const changeTitleHandler = e => {
        setinputTitle(e.target.value)
    }
    const changeDescHandler = e => {
        setinputDesc(e.target.value)
    }
    return (
        <div className='dflex'>
            <input className='title' type="text" value={inputTitle} onChange={changeTitleHandler} />
            <textarea className='desc' rows="3" type="text" value={inputDesc} onChange={changeDescHandler} />
            <div className='tags'>
                <div className='tag'>#engineering</div>
                <div className='tag'>#design</div>
            </div>
        </div>
    )
}

export default Info