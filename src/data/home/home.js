import $ from "jquery"
import {store} from '../../app/store'
import {addPost} from './homeSlice'

console.log('hi')

$.getJSON("https://www.reddit.com/r/Home.json", (data) => {
	const dateConveter = () => {
		const unixTimestamp = data.data.children[0].data.created_utc;
		const postDate = new Date(unixTimestamp * 1000);
		const postHour = postDate.getHours();
		const currentHour =
			new Date().getHours() < 12
				? new Date().getHours() + 24
				: new Date().getHours();

		return currentHour - postHour;
	};

	const id = data.data.children[0].data.id;
	const title = data.data.children[0].data.title;
	const image = data.data.children[0].data.thumbnail;
	const username = data.data.children[0].data.author;
	const votes = data.data.children[0].data.ups;
	const postAgeInHours = dateConveter();
	const numberOfComments = data.data.children[0].data.num_comments;

	store.dispatch(
		addPost({
			id: id,
			title: title,
			image: image,
			username: username,
			votes: votes,
			postAgeInHours: postAgeInHours,
			numberOfComments: numberOfComments,
		})
	);
	console.log(store.getState());
	console.log(
		`${id} \n ${title} \n ${username} \n ${image} \n ${votes} \n ${postAgeInHours} \n ${numberOfComments} \n`
	);
});
