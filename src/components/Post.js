import React from 'react'
import { TiArrowUpOutline, TiArrowDownOutline } from 'react-icons/ti'
import {FaRegCommentAlt} from 'react-icons/fa'

const Post = () => {
  return (
		<div className='post'>
			<div className='vote-container'>
				<button className='upvote'><TiArrowUpOutline /></button>
				223
				<button className='downvote'><TiArrowDownOutline /></button>
			</div>
			<div className='post-content'>
				<h2>Walk in the Park</h2>
			</div>
			<div className='post-footer'>
				<span className='user'>DogLover089</span>
				<span>3 hours ago</span>
				<button><span className='comments-button'><FaRegCommentAlt /></span>27</button>	 
			</div>
		</div>
	);
}

export default Post