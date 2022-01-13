import { createSlice } from "@reduxjs/toolkit";

const facepalmSlice = createSlice({
	name: "facepalm",
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

export const selectFacepalm = (state) => state.facepalm;
export const { addPost } = facepalmSlice.actions;
export const facepalmReducer = facepalmSlice.reducer;
