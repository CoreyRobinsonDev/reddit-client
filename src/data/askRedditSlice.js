import { createSlice } from "@reduxjs/toolkit";

const askRedditSlice = createSlice({
	name: "askReddit",
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

export const selectAskReddit = (state) => state.askReddit;
export const { addPost } = askRedditSlice.actions;
export const askRedditReducer = askRedditSlice.reducer;
