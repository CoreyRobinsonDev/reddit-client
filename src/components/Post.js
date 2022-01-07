import React from 'react'
import { TiArrowUpOutline, TiArrowDownOutline } from 'react-icons/ti'
import { FaRegCommentAlt } from 'react-icons/fa'
import {Comments} from './Comments'

const Post = () => {

	

	
	const loadComments = () => {
		document.querySelector('.comments-section').style.display = 'block'
	}
	
	const upvote = () => {
		document.querySelector('.upvote').style.color = 'green'
		document.querySelector(".downvote").style.color = "#323140"
		document.querySelector(".votes").style.color = "green"
	}

	const downvote = () => {
		document.querySelector(".upvote").style.color = "#323140"
		document.querySelector(".downvote").style.color = "red"
		document.querySelector(".votes").style.color = "red"
	}
	
  return (
		<div className='post'>
			<div className='vote-container'>
				<button className='upvote' onClick={upvote}>
					<TiArrowUpOutline />
				</button>
				<span className='votes'>223</span>
				<button className='downvote' onClick={downvote}>
					<TiArrowDownOutline />
				</button>
			</div>
			<div className='post-content'>
				<h3>Walk in the Park</h3>
				<img
					src='https://images.fineartamerica.com/images-medium-large-5/magic-tome-skye-verheijen.jpg'
					alt=''
				></img>
			</div>
			<div className='post-footer'>
				<span className='user'>DogLover089</span>
				<span>3 hours ago</span>
				<button onClick={loadComments}>
					<span className='comments-button'>
						<FaRegCommentAlt />
					</span>
					27
				</button>
			</div>
			<div className='comments-section'>
				<Comments />
				<Comments />
				<Comments />
			</div>
		</div>
	);
}

export default Post