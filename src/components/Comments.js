import React from 'react'
import { useSelector } from 'react-redux'

export const Comments = ({ i }) => {
  const comments = useSelector(state => state.comments.list)
  const commentId = useSelector(state => state.comments.commentId)
  const comment = comments.filter(comment => comment.id === commentId)
  
  return (
    <div className='comments-container'>
      <div className='comments-header'>
        <h4>{comment[i] && comment[i].user}</h4>
        <span>{comment[i] && comment[i].commentAgeInHours} hours ago</span>
      </div>
      <p>
        {comment[i] && comment[i].body}
			</p>
		</div>
	);
}

