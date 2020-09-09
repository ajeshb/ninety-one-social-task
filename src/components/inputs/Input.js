import React from 'react'

import './inputs.scss'

function Input({ type, value, placeholder, title, onChange }) {
    return (
        <div className='input' >
            <label >{title}</label>
            <input type={type} placeholder={placeholder} value={value} onChange={(event) => onChange(event.target.value)} />
        </div>
    )
}

export default Input