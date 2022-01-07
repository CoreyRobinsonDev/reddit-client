import React from 'react'
import { BsSearch } from "react-icons/bs"
import {GiHamburgerMenu} from 'react-icons/gi'

const SearchBar = () => {
	let subredditsVisible = false
	const handleClick = () => {
		if (subredditsVisible) {
			document.querySelector(".subreddits-container").style.opacity = 0
			document.querySelector(".subreddits-container").style.visibility = 'hidden'
		} else {
			document.querySelector(".subreddits-container").style.visibility = 'visible'
			document.querySelector(".subreddits-container").style.opacity = 1
		}
	
		subredditsVisible = !subredditsVisible
	}
  return (
		<div className='search-bar'>
			<input type='text' placeholder='Search' name=''></input>
			<BsSearch />
			<button className='hamburger-menu' onClick={handleClick}><GiHamburgerMenu/></button>
		</div>
	);
}

export default SearchBar
