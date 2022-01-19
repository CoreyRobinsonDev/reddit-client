import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import $ from 'jquery'

const dateConverter = (time) => {
      const unixTimestamp = time;
      const postDate = new Date(unixTimestamp * 1000);
      const postHour = postDate.getHours();
      const currentHour =
        new Date().getHours() < 12
          ? new Date().getHours() + 24
          : new Date().getHours();

      return currentHour - postHour
  }
/*
   let comments = []
        $.getJSON(`https://www.reddit.com/r/Home/comments/${data.data.children[i].data.id}.json`, (info) => {
          let commentsList = []
          for (let j = 0; j < 3; j++){
            try {
              console.log(info[1].data.children[0].data.replies.data.children[j].data.author)
              commentsList.push({
                user: info[1].data.children[0].data.replies.data.children[j].data.author,
                body: info[1].data.children[0].data.replies.data.children[j].data.body,
                commentAgeInHours: dateConverter(info[1].data.children[0].data.replies.data.children[j].data.created_utc)
              })
            } catch (err) {
              commentsList.push({
                user: '',
                body: '',
                commentAgeInHours: 'Invalid'
              })
            }
          }
          console.log(commentsList)
          comments =  commentsList
        })
        return {
          id: data.data.children[i].data.id,
          subreddit: data.data.children[i].data.subreddit,
          title: data.data.children[i].data.title,
          user: data.data.children[i].data.author,
          image: data.data.children[i].data.url,
          votes: data.data.children[i].data.ups,
          postAgeInHours: dateConverter(data.data.children[i].data.created_utc),
          numberOfComments: data.data.children[i].data.num_comments,
          comments: comments
        }
    })
*/
export const loadPost = createAsyncThunk('posts/loadPost', async (arg, thunkAPI) => {
  switch (arg) {
    case 'Home':
      return await $.getJSON('https://www.reddit.com/r/Home.json')
    case 'AskReddit':
      return await $.getJSON('https://www.reddit.com/r/AskReddit.json')
    case 'funny':
      return await $.getJSON('https://www.reddit.com/r/funny.json')
    case 'antiwork':
      return await $.getJSON('https://www.reddit.com/r/antiwork.json')
    case 'facepalm':
      return await $.getJSON('https://www.reddit.com/r/facepalm.json')
    default:
      return await $.getJSON('https://www.reddit.com/r/Home.json')
  }
  
})

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    status: null
  }, 
  extraReducers: {
    [loadPost.pending]: (state, action) => {
      state.status = 'pending'
    },
    [loadPost.fulfilled]: (state, { payload }) => {
      state.status = 'fulfilled'

      for (let i = 0; i < 5; i++){
        state.list.push({
          id: payload.data.children[i].data.id,
          subreddit: payload.data.children[i].data.subreddit,
          title: payload.data.children[i].data.title,
          image: payload.data.children[i].data.url,
          user: payload.data.children[i].data.author,
          votes: payload.data.children[i].data.ups,
          postAgeInHours: dateConverter(payload.data.children[i].data.created_utc),
          numberOfComments: payload.data.children[i].data.num_comments
        })
      }
      
      
    },
    [loadPost.rejected]: (state, action) => {
      state.status = 'rejected'
    }
  }
})

export const selectList = state => state.posts.list
export const postsReducer = postsSlice.reducer