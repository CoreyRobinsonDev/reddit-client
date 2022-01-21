import React from 'react'
import { TiArrowUpOutline, TiArrowDownOutline } from 'react-icons/ti'
import { FaRegCommentAlt } from 'react-icons/fa'
import { Comments } from './Comments'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentSubreddit } from '../features/posts/postsSlice'
import { loadComments } from '../features/comments/commentsSlice'
import { changeCommentId } from '../features/comments/commentsSlice'

export const Post = ({ i }) => {
	const posts = useSelector(state => state.posts.list)
	const currentSubreddit = useSelector(selectCurrentSubreddit)
	const post = posts.filter(item => item.subreddit === currentSubreddit)
	const dispatch = useDispatch()
	const listOfComments = []
	for (let j = 0; j < 3; j++) {
		listOfComments.push(<Comments i={j}/>)
	}

	let toggle = false
	const showComments = (e) => {
		toggle
			? (e.target.parentNode.parentNode.parentNode.querySelector(".comments-section").style.display = "none")
			: (e.target.parentNode.parentNode.parentNode.querySelector(".comments-section").style.display = "block")
		toggle = !toggle	
	}

	const handleClick = (e) => {
		showComments(e)
		dispatch(loadComments(e.target.className))
		dispatch(changeCommentId(e.target.className))
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
				<span className='votes'>{post[i] && post[i].votes}</span>
				<button className='downvote' onClick={downvote}>
					<TiArrowDownOutline />
				</button>
			</div>
			<div className='post-content'>
				<h3>{post[i] && post[i].title}</h3>
				<img src={post[i] && post[i].image} alt=''/>
			</div>
			<div className='post-footer'>
				<span className='user'>{post[i] && post[i].user}</span>
				<span>{post[i] && post[i].postAgeInHours} hours ago</span>
				<button className={post[i] && post[i].id} onClick={handleClick}>
					<span className='comments-button'>
						<FaRegCommentAlt />
					</span>
					{post[i] && post[i].numberOfComments}
				</button>
			</div>
			<div className='comments-section'>
				{listOfComments.map((comment, i) => <li key={'comment_' + i}>{comment}</li>)}
			</div>
		</div>
	);
}
