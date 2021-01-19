<template>
	<section>
		<li>
			<h2>{{ friend.name }}</h2>
			<!-- <button v-on:click="toggleDetails()">Show Details</button> -->
			<button v-on:click="toggleDetails">Show Details</button>
			<ul v-if="detailsAreVisible">
				<li><strong>Phone: </strong> {{ friend.phone }}</li>
				<li><strong>Email: </strong> {{ friend.email }}</li>
			</ul>
		</li>
	</section>
</template>

<script>
export default {
	data() {
		return {
			detailsAreVisible: false,
			friend: {
				id: "manuel",
				name: "Manuel Lorenz",
				phone: "01 234 567 8910",
				email: "manuel@localhost.com",
			},
		};
	},

	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
	},

	computed: {},

	watch: {},
};
</script>
