import { createSlice } from "@reduxjs/toolkit";

const funnySlice = createSlice({
	name: "funny",
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

export const selectFunny = (state) => state.funny;
export const { addPost } = funnySlice.actions;
export const funnyReducer = funnySlice.reducer;
