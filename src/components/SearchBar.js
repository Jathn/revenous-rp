import React from 'react';
import './SearchBar.css'

const SearchBar = (props) => {
    const options = ['Best Match', 'Highest Rated', 'Most Reviewed']
    const optionElems = options.map((option) =>
        <button type="reset">{option}</button>
    )
    return (
        <div className='SearchBar'>
            {optionElems}<br/>
            <div className='InField'>
                <input placeholder="Restaurant"></input>
                <input placeholder="Where?"></input>
            </div>
        </div>
    )
}

export default SearchBar;
