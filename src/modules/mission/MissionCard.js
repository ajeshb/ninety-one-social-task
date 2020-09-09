import React from 'react'

const displayItems = [
    {
        displayText: 'Mission Name',
        key: 'mission_name'
    }, {
        displayText: 'Mission ID',
        key: 'mission_id'
    }
]

function MissionCard({details={}}) {
    return (
        <div className='mission-card' >
            {displayItems.map(item => (
                <div key={item.key} className='item' >
                    <label >{item.displayText}:</label>
                    <p>{details[item.key]}</p>
                </div>
            ))}
            <div className='description' >{details.description}</div>
        </div>
    )
}

export default MissionCard