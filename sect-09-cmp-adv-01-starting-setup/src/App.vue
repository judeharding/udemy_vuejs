<template>
	<div>
		<the-header></the-header>
		<badge-list></badge-list>
		<user-info
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		></user-info>
		<course-goals>
			<template #default="slotProps">
				<h2>{{ slotProps.item }}</h2>
				<p>
					{{ slotProps["another-prop"] }}
				</p>
			</template>
		</course-goals>
	</div>
</template>

<script>
// importing local components
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";

// initializing local components
export default {
	components: {
		// "the-header": TheHeader,
		TheHeader,
		BadgeList,
		UserInfo,
		CourseGoals,
	},

	data() {
		return {
			activeUser: {
				name: "Maximilian Schwarzmüller",
				description: "Site owner and admin",
				role: "admin",
			},
		};
	},
};
</script>

<style>
html {
	font-family: sans-serif;
}

body {
	margin: 0;
}
</style>
