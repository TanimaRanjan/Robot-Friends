import React from 'react'

import Card from '../card/card'

import './card-list.scss'


const CardList = ({robos}) => (
    <div className='card-list'>
        {robos && robos.map((robo) => (
            <Card key={robo.id} {...robo} />
        ))}
    </div>
)

export default CardList