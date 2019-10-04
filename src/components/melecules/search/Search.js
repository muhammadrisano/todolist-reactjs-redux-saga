import React from 'react'
import './styles.css';

const Search = props => {
    return (
        <div className="containerSeach">
            <div className="box-search">
                <input type="text" className="search" placeholder="Seach Here" />
                <i class="fas fa-search"></i>
            </div>

        </div>
    )
}
export default Search