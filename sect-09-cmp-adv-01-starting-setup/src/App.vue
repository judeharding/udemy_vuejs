<template>
	<div>
		<the-header></the-header>
		<button v-on:click="setSelectedComponent('active-goals')">
			Active Goals
		</button>
		<button v-on:click="setSelectedComponent('manage-goals')">
			Manage Goals
		</button>

		<!-- //regular components -->
		<!-- <ActiveGoals v-if="selectedComponent === 'active-goals'"></ActiveGoals>
		<ManageGoals v-if="selectedComponent === 'manage-goals'"></ManageGoals> -->

		<!-- // dynamic components based on tab and keep alive holds data STATE -->
		<keep-alive>
			<component v-bind:is="selectedComponent"></component>
		</keep-alive>
	</div>
</template>

<script>
// importing local components
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoals from "./components/CourseGoals.vue";

import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

// initializing local components
export default {
	components: {
		// "the-header": TheHeader,
		TheHeader,
		// BadgeList,
		// UserInfo,
		// CourseGoals,
		ActiveGoals,
		ManageGoals,
	},

	data() {
		return {
			selectedComponent: "active-goals",
			activeUser: {
				name: "Maximilian Schwarzmüller",
				description: "Site owner and admin",
				role: "admin",
			},
		};
	},

	methods: {
		setSelectedComponent(cmp) {
			this.selectedComponent = cmp;
		},
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

<!-- 
// move to the template section under header
// <badge-list></badge-list>
// <user-info
// 	:full-name="activeUser.name"
// 	:info-text="activeUser.description"
// 	:role="activeUser.role"
// ></user-info>
// <course-goals>
// 	<template #default="slotProps">
// 		<h2>{{ slotProps.item }}</h2>
// 		<p>
// 			{{ slotProps["another-prop"] }}
// 		</p>
// 	</template>
// </course-goals> 
-->
