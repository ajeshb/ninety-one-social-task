import React from 'react'

const displayItems = [
    {
        displayText: 'Name',
        key: 'name'
    }, {
        displayText: 'Founder',
        key: 'founder'
    }, {
        displayText: 'Year',
        key: 'founded'
    }, {
        displayText: 'CEO',
        key: 'ceo'
    }, 
]

function CompanyInfo({details={}}) {
    return (
        <div className='company-info' >
            <h4 >Company Information</h4>
            <div className='details' >
                {displayItems.map(item => (
                    <div key={item.key} className='item' >
                        <label >{item.displayText}:</label>
                        <p>{details[item.key]}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CompanyInfo