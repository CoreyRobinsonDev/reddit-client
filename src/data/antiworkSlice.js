import { createSlice } from "@reduxjs/toolkit";

const antiworkSlice = createSlice({
	name: "antiwork",
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

export const selectAntiwork = (state) => state.antiwork;
export const { addPost } = antiworkSlice.actions;
export const antiworkReducer = antiworkSlice.reducer;
