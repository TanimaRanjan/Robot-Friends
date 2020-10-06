import React from 'react'

import './card.scss'

const Card = ({id, name, email}) => (
    <div className='card'>
        <img src={`https://robohash.org/${id}?200x200`} alt='robofriend'/>
        <h2>{name}</h2>
        <h3>{email}</h3>
    </div>
)


export default Card
