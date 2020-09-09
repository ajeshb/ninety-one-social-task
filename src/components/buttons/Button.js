import React from 'react'

import './buttons.scss'

function Button({ type, disabled, text, onClick }) {
    return (
        <button className={`button ${type} ${disabled ? 'disabled' : ''}`} onClick={onClick} > {text} </button>
    )
}

Button.defaultProps = {
    type: 'primary'
  }
  

export default Button