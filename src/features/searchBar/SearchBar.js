import React from 'react'
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
		<div className='search-bar'>
			<input type='text' placeholder='Search' name=''></input>
			<BsSearch/>
		</div>
	);
}

export default SearchBar
