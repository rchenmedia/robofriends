import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
             <input 
                 className='pa3 ba b--green bg-lightest-blue'
                 type='search' 
                 placeholder='search here'
                 onChange={searchChange} //when input changes trigger searchChange function
                 />
        </div>
    );
}

export default SearchBox;