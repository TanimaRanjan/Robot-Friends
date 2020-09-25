import React from 'react'

import './search-field.scss'

const SearchField = ({onSearchChange}) => (
    <div className='search-field'>
        <input type='search' placeholder='Search for Robo Friend' onChange={onSearchChange}/>
    </div>
)

export default SearchField
