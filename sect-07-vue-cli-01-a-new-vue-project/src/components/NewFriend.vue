<template>
	<form @submit.prevent="submitData">
		<div>
			<label for="">Name: </label>
			<input type="text" v-model="enteredName" />
		</div>

		<div>
			<label for="">Phone: </label>
			<input type="tel" v-model="enteredPhone" />
		</div>

		<div>
			<label for="">Email: </label>
			<input type="email" v-model="enteredEmail" />
		</div>

		<button>Add Contact</button>
	</form>
</template>

<script>
export default {
	emits: ["add-contact"],

	data() {
		return {
			enteredName: "",
			enteredPhone: "",
			enteredEmail: "",
		};
	},

	methods: {
		submitData() {
			// alert("subitting");
			this.$emit(
				"add-contact",
				this.enteredName,
				this.enteredPhone,
				this.enteredEmail
			);
		},
	},
};
</script>

<style>
/* * {
	box-sizing: border-box;
} */
</style>
