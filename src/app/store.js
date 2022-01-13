import { configureStore } from '@reduxjs/toolkit'
import { homeReducer } from '../data/homeSlice'
import { currentSubredditReducer } from '../data/currentSubredditSlice'
import { askRedditReducer } from '../data/askRedditSlice'
import { funnyReducer } from '../data/funnySlice'
import { antiworkReducer } from '../data/antiworkSlice'
import { facepalmReducer } from '../data/facepalmSlice'
import $ from "jquery"
import { addPost as addHomePost } from "../data/homeSlice"
import { addPost as addAskRedditPost } from '../data/askRedditSlice'
import { addPost as addFunnyPost } from '../data/funnySlice'
import { addPost as addAntiworkPost } from '../data/antiworkSlice'
import {addPost as addFacepalmPost} from '../data/facepalmSlice'

export const store = configureStore({
  reducer: {
    currentSubreddit: currentSubredditReducer,
    home: homeReducer,
    askReddit: askRedditReducer,
    funny: funnyReducer,
    antiwork: antiworkReducer,
    facepalm: facepalmReducer
  }
})

for (let i = 0; i < 25; i++) {
  $.getJSON("https://www.reddit.com/r/Home.json", (data) => {
    const dateConveter = () => {
      const unixTimestamp = data.data.children[i].data.created_utc;
      const postDate = new Date(unixTimestamp * 1000);
      const postHour = postDate.getHours();
      const currentHour =
        new Date().getHours() < 12
          ? new Date().getHours() + 24
          : new Date().getHours();

      return currentHour - postHour < 0
				? currentHour - postHour + 24
				: currentHour - postHour
    };

    const id = data.data.children[i].data.id;
    const title = data.data.children[i].data.title;
    const image = data.data.children[i].data.url
    const username = data.data.children[i].data.author;
    const votes = data.data.children[i].data.ups;
    const postAgeInHours = dateConveter();
    const numberOfComments = data.data.children[i].data.num_comments;

    store.dispatch(
      addHomePost({
        id: id,
        title: title,
        image: image,
        username: username,
        votes: votes,
        postAgeInHours: postAgeInHours,
        numberOfComments: numberOfComments,
      })
    )
  });

  $.getJSON("https://www.reddit.com/r/askreddit.json", (data) => {
		const dateConveter = () => {
			const unixTimestamp = data.data.children[i].data.created_utc;
			const postDate = new Date(unixTimestamp * 1000);
			const postHour = postDate.getHours();
			const currentHour =
				new Date().getHours() < 12
					? new Date().getHours() + 24
					: new Date().getHours();

			return currentHour - postHour < 0
				? currentHour - postHour + 24
				: currentHour - postHour;
		};

		const id = data.data.children[i].data.id;
		const title = data.data.children[i].data.title;
		const image = data.data.children[i].data.url;
		const username = data.data.children[i].data.author;
		const votes = data.data.children[i].data.ups;
		const postAgeInHours = dateConveter();
		const numberOfComments = data.data.children[i].data.num_comments;

		store.dispatch(
			addAskRedditPost({
				id: id,
				title: title,
				image: image,
				username: username,
				votes: votes,
				postAgeInHours: postAgeInHours,
				numberOfComments: numberOfComments,
			})
		);
  });
  
  $.getJSON("https://www.reddit.com/r/funny.json", (data) => {
		const dateConveter = () => {
			const unixTimestamp = data.data.children[i].data.created_utc;
			const postDate = new Date(unixTimestamp * 1000);
			const postHour = postDate.getHours();
			const currentHour =
				new Date().getHours() < 12
					? new Date().getHours() + 24
					: new Date().getHours();

			return currentHour - postHour < 0
				? currentHour - postHour + 24
				: currentHour - postHour;
		};

		const id = data.data.children[i].data.id;
		const title = data.data.children[i].data.title;
		const image = data.data.children[i].data.url;
		const username = data.data.children[i].data.author;
		const votes = data.data.children[i].data.ups;
		const postAgeInHours = dateConveter();
		const numberOfComments = data.data.children[i].data.num_comments;

		store.dispatch(
			addFunnyPost({
				id: id,
				title: title,
				image: image,
				username: username,
				votes: votes,
				postAgeInHours: postAgeInHours,
				numberOfComments: numberOfComments,
			})
		);
  });
  
  $.getJSON("https://www.reddit.com/r/antiwork.json", (data) => {
		const dateConveter = () => {
			const unixTimestamp = data.data.children[i].data.created_utc;
			const postDate = new Date(unixTimestamp * 1000);
			const postHour = postDate.getHours();
			const currentHour =
				new Date().getHours() < 12
					? new Date().getHours() + 24
					: new Date().getHours();

			return currentHour - postHour < 0
				? currentHour - postHour + 24
				: currentHour - postHour;
		};

		const id = data.data.children[i].data.id;
		const title = data.data.children[i].data.title;
		const image = data.data.children[i].data.url;
		const username = data.data.children[i].data.author;
		const votes = data.data.children[i].data.ups;
		const postAgeInHours = dateConveter();
		const numberOfComments = data.data.children[i].data.num_comments;

		store.dispatch(
			addAntiworkPost({
				id: id,
				title: title,
				image: image,
				username: username,
				votes: votes,
				postAgeInHours: postAgeInHours,
				numberOfComments: numberOfComments,
			})
		);
  });
  
  $.getJSON("https://www.reddit.com/r/facepalm.json", (data) => {
		const dateConveter = () => {
			const unixTimestamp = data.data.children[i].data.created_utc;
			const postDate = new Date(unixTimestamp * 1000);
			const postHour = postDate.getHours();
			const currentHour =
				new Date().getHours() < 12
					? new Date().getHours() + 24
					: new Date().getHours();

			return currentHour - postHour < 0
				? currentHour - postHour + 24
				: currentHour - postHour;
		};

		const id = data.data.children[i].data.id;
		const title = data.data.children[i].data.title;
		const image = data.data.children[i].data.url;
		const username = data.data.children[i].data.author;
		const votes = data.data.children[i].data.ups;
		const postAgeInHours = dateConveter();
		const numberOfComments = data.data.children[i].data.num_comments;

		store.dispatch(
			addFacepalmPost({
				id: id,
				title: title,
				image: image,
				username: username,
				votes: votes,
				postAgeInHours: postAgeInHours,
				numberOfComments: numberOfComments,
			})
		);
	});
}
