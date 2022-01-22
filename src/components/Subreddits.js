import React from "react"
import { useDispatch } from "react-redux"
import { changeSubreddit, loadPosts } from "../features/posts/postsSlice"

export const Subreddits = () => {
	const dispatch = useDispatch()
	const handleClick = (e) => {
		dispatch(changeSubreddit(e.target.innerText))
	}
	return (
		<div className='subreddits-container'>
			<h2>Subreddits</h2>
			<ul className='subreddits'>
				<li>
					<button onClick={handleClick}>
						<img
							src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARIAAAC4CAMAAAAYGZMtAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlT3+AEVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A8WoAAHxScUAAAAAAElFTkSuQmCC'
							alt=''
						></img>
						<span className='subreddit-title'>Home</span>
					</button>
				</li>
				<li>
					<button onClick={handleClick}>
						<img
							src='https://b.thumbs.redditmedia.com/EndDxMGB-FTZ2MGtjepQ06cQEkZw_YQAsOUudpb9nSQ.png'
							alt=''
						></img>
						<span className='subreddit-title'>AskReddit</span>
					</button>
				</li>
				<li>
					<button onClick={handleClick}>
						<img
							src='https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png'
							alt=''
						></img>
						<span className='subreddit-title'>funny</span>
					</button>
				</li>
				<li>
					<button onClick={handleClick}>
						<img
							src='https://b.thumbs.redditmedia.com/l_LTzMogi2fCDc6oEyijcHr0jVjABp5sjQDDL4QCnNo.png'
							alt=''
						></img>
						<span className='subreddit-title'>antiwork</span>
					</button>
				</li>
				<li>
					<button onClick={handleClick}>
						<img
							src='https://b.thumbs.redditmedia.com/ZtyFTkHcUhfrWh6_lKa9FYYv9dCdl6p4kwv-X43voME.png'
							alt=''
						></img>
						<span className='subreddit-title'>facepalm</span>
					</button>
				</li>
			</ul>
		</div>
	);
}
