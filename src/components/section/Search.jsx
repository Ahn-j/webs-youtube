import React from 'react'

const Search = () => {
  return (
    <div id='search'>
      <div className='search__inner'>
        <label htmlFor='searchInput'>
          <span className='ir'>Search</span>
        </label>
        <input 
          type='search' 
          name='searchInput' 
          id='searchInput'
          autoComplete='off'
          className='search__input'
          placeholder='검색어를 입력하시오'
        />
          </div>
    </div>
  )
}

export default Search;