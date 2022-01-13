import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
	name: "home",
	initialState: [],
	reducers: {
		addPost: (state, action) => {
			state.push({
				id: action.payload.id,
				title: action.payload.title,
				image: action.payload.image,
				username: action.payload.username,
				votes: action.payload.votes,
				postAgeInHours: action.payload.postAgeInHours,
				numberOfComments: action.payload.numberOfComments,
			});
		},
	},
});


export const selectHome = state => state.home
export const { addPost } = homeSlice.actions
export const homeReducer = homeSlice.reducer