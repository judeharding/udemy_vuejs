<template>
	<section>
		<header><h1>My Friends from app.vue</h1></header>

		<!-- LISTENING to custom event made in NewFriend.vue  -->
		<new-friend @add-contact="addContact"> </new-friend>
		<ul>
			<li>
				<!-- the kebob-props below are matched with the PROPS in FriendContact.vue file -->
				<!-- <friend-contact
					name="Manuel Lorenz"
					phone-number="01 234 567 8910"
					email-address="manuel@localhost.com"
					v-bind:is-favorite="true"
				></friend-contact>
				<friend-contact
					name="Julie Jones"
					phone-number="09 876 543 2100"
					email-address="jules@localhost.com"
					v-bind:is-favorite="false"
				></friend-contact> -->
				<friend-contact
					v-for="friend in friends"
					v-bind:key="friend.id"
					v-bind:id="friend.id"
					v-bind:name="friend.name"
					v-bind:phone-number="friend.phone"
					v-bind:email-address="friend.email"
					v-bind:is-favorite="friend.isFavorite"
					@toggle-favorite="toggleFavoriteStatus"
				></friend-contact>
			</li>
		</ul>
	</section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";
export default {
	components: { FriendContact, NewFriend },
	data() {
		return {
			friends: [
				{
					id: "manuel",
					name: "Manuel Lorenz",
					phone: "01 234 567 8910",
					email: "manuel@localhost.com",
					isFavorite: true,
				},
				{
					id: "julie",
					name: "Julie Jones",
					phone: "09 876 543 2100",
					email: "jules@localhost.com",
					isFavorite: false,
				},
			],
		};
	},

	methods: {
		toggleFavoriteStatus(friendId) {
			// alert("toggeling");
			const identifiedFriend = this.friends.find(
				(friend) => friend.id === friendId
			);
			identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
		},

		addContact(name, phone, email) {
			const newFriendContact = {
				id: new Date().toISOString(),
				name: name,
				phone: phone,
				email: email,
				isFavorite: false,
			};
			this.friends.push(newFriendContact);
		},
	},

	computed: {},

	watch: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
	box-sizing: border-box;
}

html {
	font-family: "Jost", sans-serif;
}

body {
	margin: 0;
}

header {
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	margin: 3rem auto;
	border-radius: 10px;
	padding: 1rem;
	background-color: #58004d;
	color: white;
	text-align: center;
	width: 90%;
	max-width: 40rem;
}

#app ul {
	margin: 0;
	padding: 0;
	list-style: none;
}

#app li,
#app form {
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	margin: 1rem auto;
	border-radius: 10px;
	padding: 1rem;
	text-align: center;
	width: 90%;
	max-width: 40rem;
}

#app h2 {
	font-size: 2rem;
	border-bottom: 4px solid #ccc;
	color: #58004d;
	margin: 0 0 1rem 0;
}

#app button {
	font: inherit;
	cursor: pointer;
	border: 1px solid #ff0077;
	background-color: #ff0077;
	color: white;
	padding: 0.05rem 1rem;
	box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
	background-color: #ec3169;
	border-color: #ec3169;
	box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
	font: inherit;
	padding: 0.15rem;
}
#app label {
	font-weight: bold;
	margin-right: 1rem;
	width: 7rem;
	display: inline-block;
}
#app form div {
	margin: 1rem 0;
}
</style>
