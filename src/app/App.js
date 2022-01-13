import './App.css'
import React from 'react'
import SearchBar from '../components/SearchBar'
import Post from '../components/Post'
import Subreddits from '../components/Subreddits'
import { BsReddit } from 'react-icons/bs'

const App = () => {
	let listOfPosts = []
	for (let i = 0; i < 25; i++){
		listOfPosts.push(<Post iterator={i}/>)
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

export default App
