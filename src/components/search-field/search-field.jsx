import React from 'react'

import './search-field.scss'

const SearchField = ({onSearchRobo}) => (
    <div>
        <input type='search' placeholder='search for Robo Friend' onChange={onSearchRobo}/>
    </div>
)

export default SearchField