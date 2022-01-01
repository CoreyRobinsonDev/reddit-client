import './App.css'
import React from 'react'
import SearchBar from '../features/searchBar/SearchBar'
import Post from '../components/Post'
import Subreddits from '../components/Subreddits'

const App = () => {
  return (
		<main>
			<header>
				<h1>
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
