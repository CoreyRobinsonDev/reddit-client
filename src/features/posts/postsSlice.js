import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import $ from 'jquery'

export const dateConverter = (time) => {
      const unixTimestamp = time;
      const postDate = new Date(unixTimestamp * 1000)
      const postHour = postDate.getTime()
      const currentHour = new Date().getTime()

      return Math.round((currentHour - postHour) / (1000*3600))
}

export const loadPosts = createAsyncThunk('posts/loadPosts', async (arg, thunkAPI) => {
  return await $.getJSON(`https://www.reddit.com/r/${arg}.json`)
})
  
const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    currentSubreddit: 'Home',
    numOfSearchResults: 25,
    status: null
  }, 
  reducers: {
    changeSubreddit: (state, { payload }) => {
      state.currentSubreddit = payload
    },
    addPosts: (state, { payload }) => {
      state.list = payload
    },
    searchResults: (state, { payload }) => {
      state.numOfSearchResults = payload
    }
  },
  extraReducers: {
    [loadPosts.pending]: (state, action) => {
      state.status = 'pending'
    },
    [loadPosts.fulfilled]: (state, { payload }) => {
      state.status = 'fulfilled'

      for (let i = 0; i < 25; i++){
        state.list.push({
          id: payload.data.children[i].data.id,
          subreddit: payload.data.children[i].data.subreddit,
          title: payload.data.children[i].data.title,
          image: payload.data.children[i].data.url.includes('i.redd.it') ? '': payload.data.children[i].data.url,
          user: payload.data.children[i].data.author,
          votes: payload.data.children[i].data.ups,
          postAgeInHours: dateConverter(payload.data.children[i].data.created_utc),
          numberOfComments: payload.data.children[i].data.num_comments
        })
      }
    },
    [loadPosts.rejected]: (state, action) => {
      state.status = 'rejected'
    }
  }
})

export const {changeSubreddit, addPosts, searchResults} = postsSlice.actions
export const selectCurrentSubreddit = state => state.posts.currentSubreddit
export const postsReducer = postsSlice.reducer