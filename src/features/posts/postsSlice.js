import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import $ from 'jquery'



export const loadPosts = createAsyncThunk('posts/loadPosts', async ({ name, i }, thunkAPI) => {
  let post = {}
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
  switch (name) {
		case 'Home':
      $.getJSON('https://www.reddit.com/r/Home.json', (data) => {
        let comments = []
        $.getJSON(`https://www.reddit.com/r/Home/comments/${data.data.children[i].data.id}.json`, (info) => {
          let commentsList = []
          for (let j = 0; j < 3; j++){
            try {
              commentsList.push({
                user: data[1].data.children[0].data.replies.data.children[j].data.author,
                body: data[1].data.children[0].data.replies.data.children[j].data.body,
                commentAgeInHours: dateConverter(data[1].data.children[0].data.replies.data.children[j].data.created_utc)
              })
            } catch (err) {
              
            }
          }
          comments =  commentsList
        })
        post = {
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
      break
		case 'AskReddit':
			
			break
		case 'funny':
			
			break
		case 'antiwork':
			
			break
		case 'facepalm':
			
			break
		default:
			return post
  }
  return post
}) 

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    status: null
  }, 
  reducers: {
    loadPosts: (state, { payload }) => {
      state.list.push({
        id: payload.id,
        subreddit: payload.subreddit,
        title: payload.title,
        image: payload.image,
        user: payload.user,
        votes: payload.votes,
        postAgeInHours: payload.postAgeInHours,
        numberOfComments: payload.numberOfComments,
        comments: payload.comments
      })
    }
  },
  extraReducers: {
    [loadPosts.pending]: (state, action) => {
      state.status = 'pending'
    },
    [loadPosts.fulfilled]: (state, { payload }) => {
      state.status = 'fulfilled'
    },
    [loadPosts.rejected]: (state, action) => {
      state.status = 'rejected'
    }
  }
})

export const postsReducer = postsSlice.reducer