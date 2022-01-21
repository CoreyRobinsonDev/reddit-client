import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import $ from 'jquery'
import { dateConverter } from "../posts/postsSlice"

export const loadComments = createAsyncThunk('comments/loadComments', async (arg, thunkAPI) => {

  return await $.getJSON(`https://www.reddit.com/r/${thunkAPI.getState().posts.currentSubreddit}/comments/${arg}.json`)
})


const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    list: [],
    commentId: null,
    status: null
  },
  reducers: {
    changeCommentId: (state, { payload }) => {
      state.commentId = payload
    }
  },
  extraReducers: {
    [loadComments.pending]: (state, action) => {
      state.status = 'pending'
    },
    [loadComments.fulfilled]: (state, { payload }) => {
      state.status = 'fulfilled'

      for (let j = 0; j < 3; j++) {
				try {
          state.list.push({
            id: payload[0].data.children[0].data.name.replace('t3_', ''),
					  user: payload[1].data.children[0].data.replies.data.children[j].data.author,
						body: payload[1].data.children[0].data.replies.data.children[j].data.body,
						commentAgeInHours: dateConverter(payload[1].data.children[0].data.replies.data.children[j].data.created_utc)
					})
				} catch (err) {
					state.list.push({
						user: '',
						body: '',
						commentAgeInHours: 'Invalid'
					})
				}
			}
    },
    [loadComments.rejected]: (state, action) => {
      state.status = 'rejected'
    }
  }
})

export const {changeCommentId} = commentsSlice.actions
export const commentsReducer = commentsSlice.reducer