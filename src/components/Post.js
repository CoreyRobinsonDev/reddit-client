import React from 'react'
import {useSelector} from 'react-redux'
import { TiArrowUpOutline, TiArrowDownOutline } from 'react-icons/ti'
import { FaRegCommentAlt } from 'react-icons/fa'
import { Comments } from './Comments'
import { selectHome } from '../data/homeSlice'
import { selectSubreddit } from '../data/currentSubredditSlice'
import { selectAskReddit } from '../data/askRedditSlice'
import { selectFunny } from '../data/funnySlice'
import { selectAntiwork } from '../data/antiworkSlice'
import { selectFacepalm } from '../data/facepalmSlice'

const Post = ({ iterator }) => {
	const home = useSelector(selectHome)
	const askReddit = useSelector(selectAskReddit)
	const funny = useSelector(selectFunny)
	const antiwork = useSelector(selectAntiwork)
	const facepalm = useSelector(selectFacepalm)
	const currentSubreddit = useSelector(selectSubreddit)

	let subreddit 
	switch (currentSubreddit) {
		case 'Home':
			subreddit = home
			break
		case 'AskReddit':
			subreddit = askReddit
			break
		case 'funny':
			subreddit = funny
			break
		case 'antiwork':
			subreddit = antiwork
			break
		case 'facepalm':
			subreddit = facepalm
			break
		default:
			subreddit = home
	}

	const loadComments = () => {
		document.querySelector('.comments-section').style.display = 'block'
	}
	
	const upvote = (e) => {
		e.target.style.color = 'green'
		e.target.parentNode.nextSibling.style.color = 'green'
		e.target.parentNode.nextSibling.nextSibling.firstChild.style.color =
			"#323140";
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
				<span className='votes'>{subreddit[iterator].votes}</span>
				<button className='downvote' onClick={downvote}>
					<TiArrowDownOutline />
				</button>
			</div>
			<div className='post-content'>
				<h3>{subreddit[iterator].title}</h3>
				<img src={subreddit[iterator].image} alt=''/>
			</div>
			<div className='post-footer'>
				<span className='user'>{subreddit[iterator].username}</span>
				<span>{subreddit[iterator].postAgeInHours} hours ago</span>
				<button onClick={loadComments}>
					<span className='comments-button'>
						<FaRegCommentAlt />
					</span>
					{subreddit[iterator].numberOfComments}
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