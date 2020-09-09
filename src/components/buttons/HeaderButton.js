import React from 'react'

import './buttons.scss'

function HeaderButton({ text, icon: Icon, onClick }) {
    return (
        <button className={`header-button`} onClick={onClick} > { Icon || text} </button>
    )
}

HeaderButton.defaultProps = {
    text: 'Menu Item'
}
  

export default HeaderButton