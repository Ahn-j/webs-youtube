import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [searchKeyword, setSearchKeyword ] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = () => {
    console.log("searchKeyword 2 : " ,searchKeyword)
    if(searchKeyword){
      navigate(`/search/${searchKeyword}`);
      setSearchKeyword('');
    }
  }

  const hanldeKeyDown = (e) => {
    console.log("e.key :",e.key)
    if (e.key === 'Enter') {
      console.log("enter!")
      handleSearch();
    }
  }

  const hadleChange = (e) => {
    console.log("searchKeyword : " ,searchKeyword)
    console.log("e :",e.target.value)
    setSearchKeyword(e.target.value)
  }

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
          onChange={hadleChange}
          onKeyDown={hanldeKeyDown}
        />
          </div>
    </div>
  )
}

export default Search;