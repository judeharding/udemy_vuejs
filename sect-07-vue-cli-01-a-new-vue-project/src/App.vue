<template>
	<section>
		<h2>My Friends from app.vue</h2>
		<ul>
			<li>
				<friend-contact></friend-contact>
				<friend-contact></friend-contact>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	data() {
		return {
			friends: [
				// {
				// 	id: "manuel",
				// 	name: "Manuel Lorenz",
				// 	phone: "01 234 567 8910",
				// 	email: "manuel@localhost.com",
				// },
				// {
				// 	id: "julie",
				// 	name: "Julie Jones",
				// 	phone: "09 876 543 2100",
				// 	email: "jules@localhost.com",
				// },
			],
		};
	},

	methods: {},

	computed: {},

	watch: {},
};
</script>
