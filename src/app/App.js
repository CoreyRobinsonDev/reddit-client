import './App.css'
import React from 'react'
import SearchBar from '../features/searchBar/SearchBar'
import Post from '../components/Post'
import Subreddits from '../components/Subreddits'

const App = () => {
  return (
    <div>
      <main>
        <header>
          <h1>Reddit Minimal</h1>
          <SearchBar/>
        </header>
        <Post />
        <Subreddits/>
      </main>
    </div>
  )
}

export default App
