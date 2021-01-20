<template>
	<div>
		<h2>Manage Goals</h2>
		<!-- dummy field  -->
		<input type="text" ref="goal" />
		<button v-on:click="setGoal">Set Goal</button>

		<teleport to="body">
			<!-- slot from erroralert  -->
			<error-alert v-if="inputIsInvalid">
				<h2>Input is Invalid!</h2>
				<p>Please enter a few characters</p>
				<button v-on:click="confirmError">Okay</button>
			</error-alert>
		</teleport>
	</div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
	components: {
		ErrorAlert,
	},

	data() {
		return {
			inputIsInvalid: false,
		};
	},

	methods: {
		setGoal() {
			const enteredValue = this.$refs.goal.value;

			if (enteredValue === "") {
				// alert("Input must not be empty");
				this.inputIsInvalid = true;
			}
		},

		confirmError() {
			this.inputIsInvalid = false;
		},
	},
};
</script>
