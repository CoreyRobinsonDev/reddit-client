import './App.css'
import React, {useEffect} from 'react'
import {SearchBar} from '../features/search/SearchBar'
import {Post} from '../components/Post'
import {Subreddits} from '../components/Subreddits'
import { BsReddit } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { loadPosts, changeSubreddit, searchResults } from '../features/posts/postsSlice' 

export default function App() {
	const searchResultsNum = useSelector(state => state.posts.numOfSearchResults)
	let listOfPosts = []
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(loadPosts('Home'))
		dispatch(loadPosts('AskReddit'))
		dispatch(loadPosts('funny'))
		dispatch(loadPosts('antiwork'))
		dispatch(loadPosts('facepalm'))
	}, [dispatch])

	for (let j = 0; j < searchResultsNum; j++){
		listOfPosts.push(<Post i={j} />)	
	}

	const handleClick = () => {
		dispatch(changeSubreddit('Home'))
		dispatch(searchResults(25))
	}
  return (
		<main>
			<header>
				<h1>
					<BsReddit />
					<button onClick={handleClick}><span>Reddit</span> Minimal</button>
				</h1>
				<SearchBar />
			</header>
			<div className='post-container'>
				{listOfPosts.map((post, i) => <li key={'post_' + i}>{post}</li>)}
			</div>
			<Subreddits />
		</main>
	);
}

