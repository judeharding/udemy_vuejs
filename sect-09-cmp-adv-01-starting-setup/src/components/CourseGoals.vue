<template>
	<ul>
		<li v-for="goal in goals" v-bind:key="goal">
			<!-- {{ goal }}  // goal only availble in CourseGoals -->
			<slot v-bind:item="goal" another-prop="..."></slot>
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			goals: ["Finish Course", "Learn Vue"],
		};
	},
};
</script>

<style></style>
