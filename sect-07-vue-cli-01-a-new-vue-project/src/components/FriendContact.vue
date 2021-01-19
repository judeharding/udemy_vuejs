<template>
	<section>
		<li>
			<!-- name is coming from the PROPS section in SCRIPTS below -->
			<!-- and the kebob-case props are used on the App.vue file -->
			<h2>{{ name }} {{ isFavorite ? "(FAV)" : "" }}</h2>

			<button v-on:click="toggleFavorite">Toggle Favorite</button>

			<button v-on:click="toggleDetails()">
				{{ detailsAreVisible ? "Hide " : "Show " }} Details
			</button>

			<ul v-if="detailsAreVisible">
				<!-- phoneNumber and emailAddress are coming from the PROPS section in SCRIPTS below -->
				<!-- and the kebob-case props are used on the App.vue file -->
				<li><strong>Phone: </strong> {{ phoneNumber }}</li>
				<li><strong>Email: </strong> {{ emailAddress }}</li>
			</ul>
		</li>
	</section>
</template>

<script>
export default {
	// PS -- don't use the same prop name as something in the data or computed properties
	// props: ["name", "phoneNumber", "emailAddress", "isFavorite"],  //simple

	// More Detailed Props
	// props: {
	// 	name: String,
	// 	phoneNumber: String,
	// 	emailAddress: String,
	// 	isFavorite: String,
	// },

	// use this format if you want to validate user entry data - especially when working in a team.
	props: {
		id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		emailAddress: {
			type: String,
			required: true,
		},
		isFavorite: {
			Type: Boolean,
			required: false,
			default: false,
			// use below if type is NOT a boolean
			// validator: function(value) {
			// 	return value === "1" || value === "0"; //only allows 0 or 1
			// },
		},
	},

	data() {
		return {
			detailsAreVisible: false,
			// friend: {
			// 	id: "manuel",
			// 	name: "Manuel Lorenz",
			// 	phone: "01 234 567 8910",
			// 	email: "manuel@localhost.com",
			// },
			// changing data on the child and passing it back to the parent App.vue
			// friendIsFavorite: this.isFavorite,
		};
	},

	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
			// when accessing PROPS in the script, use this naming convention
			// this.name;
			// this.phoneNuber;
			// this.emailAddress;
		},

		toggleFavorite() {
			// this.friendIsFavorite = !this.friendIsFavorite;
			// above does not transmit data back to the parent

			// $emit will transmit data back to the parent - built in
			// only use kabob case
			this.$emit("toggle-favorite", this.id);
		},
	},

	computed: {},

	watch: {},
};
</script>
