import React from 'react'
import {useSelector} from 'react-redux'
import { TiArrowUpOutline, TiArrowDownOutline } from 'react-icons/ti'
import { FaRegCommentAlt } from 'react-icons/fa'
import { Comments } from './Comments'
import { selectHome } from '../data/home/homeSlice'

const Post = () => {
	const home = useSelector(selectHome)

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
				<span className='votes'>{home[0].votes}</span>
				<button className='downvote' onClick={downvote}>
					<TiArrowDownOutline />
				</button>
			</div>
			<div className='post-content'>
				<h3>{home[0].title}</h3>
				<img src={home[0].image} alt=''></img>
			</div>
			<div className='post-footer'>
				<span className='user'>{home[0].username}</span>
				<span>{home[0].postAgeInHours} hours ago</span>
				<button onClick={loadComments}>
					<span className='comments-button'>
						<FaRegCommentAlt />
					</span>
					{home[0].numberOfComments}
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