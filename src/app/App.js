import './App.css'
import React, {useEffect} from 'react'
import {SearchBar} from '../features/search/SearchBar'
import {Post} from '../components/Post'
import {Subreddits} from '../components/Subreddits'
import { BsReddit } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { loadPost } from '../features/posts/postsSlice' 

export default function App() {
	let listOfPosts = []
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(loadPost())
	}, [dispatch])

	for (let j = 0; j < 5; j++){
		listOfPosts.push(<Post i={j} />)	
	}
  return (
		<main>
			<header>
				<h1>
					<BsReddit />
					<span>Reddit</span> Minimal
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

