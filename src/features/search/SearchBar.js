import React, {useState} from 'react'
import { BsSearch } from "react-icons/bs"
import { GiHamburgerMenu } from 'react-icons/gi'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentSubreddit, addPosts, searchResults } from '../posts/postsSlice'

export const SearchBar = () => {
	const [input, setInput] = useState('')
	const dispatch = useDispatch()
	const posts = useSelector(state => state.posts.list)
	const currentSubreddit = useSelector(selectCurrentSubreddit)
	const post = posts.filter(item => item.subreddit === currentSubreddit)

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
	
	const handleSubmit = () => {
		const selectedPost = post.filter(item => item.title.toLowerCase().includes(input.toLowerCase()))
		setInput('')
		dispatch(addPosts(selectedPost))
		dispatch(searchResults(selectedPost.length))
	}

  return (
		<div className='search-bar'>
			<input type='text' placeholder='Search' name='' value={input} onChange={e => setInput(e.target.value)}></input>
			<button className='search-btn' onClick={handleSubmit}><BsSearch /></button>
			<button className='hamburger-menu' onClick={handleClick}><GiHamburgerMenu/></button>
		</div>
	);
}

