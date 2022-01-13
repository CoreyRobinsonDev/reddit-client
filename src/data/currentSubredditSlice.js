import { createSlice } from '@reduxjs/toolkit'

const currentSubredditSlice = createSlice({
  name: 'currentSubreddit',
  initialState: 'Home',
  reducers: {
    changeSubreddit: (state, action) => {
      return state = action.payload
    }
  }
})

export const selectSubreddit = state => state.currentSubreddit
export const {changeSubreddit} = currentSubredditSlice.actions
export const currentSubredditReducer = currentSubredditSlice.reducer