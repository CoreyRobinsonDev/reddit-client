import './App.css'
import React from 'react'
import SearchBar from '../components/SearchBar'
import Post from '../components/Post'
import Subreddits from '../components/Subreddits'
import { BsReddit } from 'react-icons/bs'

const App = () => {
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
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
			<Subreddits />
		</main>
	);
}

export default App
