import React from 'react'
import { TiArrowUpOutline, TiArrowDownOutline } from 'react-icons/ti'
import { FaRegCommentAlt } from 'react-icons/fa'
import { Comments } from './Comments'

export const Post = ({ iterator }) => {
	let toggle = false
	const showComments = (e) => {
		toggle
			? (e.target.parentNode.parentNode.parentNode.querySelector(".comments-section").style.display = "none")
			: (e.target.parentNode.parentNode.parentNode.querySelector(".comments-section").style.display = "block")
		toggle = !toggle	
	}

	const upvote = (e) => {
		e.target.style.color = 'green'
		e.target.parentNode.nextSibling.style.color = 'green'
		e.target.parentNode.nextSibling.nextSibling.firstChild.style.color ="#323140";
	}

	const downvote = (e) => {
		e.target.style.color = "red"
		e.target.parentNode.previousSibling.style.color = "red"
		e.target.parentNode.previousSibling.previousSibling.firstChild.style.color = "#323140";
	}
	
  return (
		<div className='post'>
			<div className='vote-container'>
				<button className='upvote' onClick={upvote}>
					<TiArrowUpOutline />
				</button>
				<span className='votes'>{}</span>
				<button className='downvote' onClick={downvote}>
					<TiArrowDownOutline />
				</button>
			</div>
			<div className='post-content'>
				<h3>{}</h3>
				<img src={''} alt=''/>
			</div>
			<div className='post-footer'>
				<span className='user'>{}</span>
				<span>{} hours ago</span>
				<button onClick={showComments}>
					<span className='comments-button'>
						<FaRegCommentAlt />
					</span>
					{}
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
