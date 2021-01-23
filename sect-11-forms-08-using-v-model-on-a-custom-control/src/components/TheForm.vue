<template>
  <!-- <form @submit.prevent="submitForm"> -->
  <form v-on:submit.prevent="submitForm">
    <div
      class="form-control"
      v-bind:class="{ invalid: userNameValidity === 'invalid' }"
    >
      <label for="user-name">Your Name</label>
      <!-- v-model 2-way-binds the data to the data in script -->
      <input
        id="user-name"
        name="user-name"
        type="text"
        v-model.trim="userName"
        @blur="validateInput"
      />
      <p v-if="userNameValidity === 'invalid'">Please enter a valid name!</p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <!-- v-model 2-way-binds the data to the data in script -->
      <input
        id="age"
        name="age"
        type="number"
        v-model="userAge"
        ref="ageInput"
      />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <!-- v-model 2-way-binds the data to the data in script -->
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <!-- v-model 2-way-binds the data to the data in script -->
        <!-- the id is for the GROUP of textboxes.  
        and YOU have to set the value of each box -->
        <label for="interest-news">News</label>
        <input
          id="interest-news"
          name="interest"
          type="checkbox"
          value="news"
          v-model="interest"
        />
      </div>
      <div>
        <!-- v-model 2-way-binds the data to the data in script -->
        <!-- the id is for the GROUP of textboxes.  
        and YOU have to set the value of each box -->
        <label for="interest-tutorials">Tutorials</label>
        <input
          id="interest-tutorials"
          name="interest"
          type="checkbox"
          value="tutorials"
          v-model="interest"
        />
      </div>
      <div>
        <!-- v-model 2-way-binds the data to the data in script -->
        <!-- the id is for the GROUP of textboxes.  
        and YOU have to set the value of each box -->

        <label for="interest-nothing">Nothing</label>
        <input
          id="interest-nothing"
          name="interest"
          type="checkbox"
          value="nothing"
          v-model="interest"
        />
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <!-- v-model 2-way-binds the data to the data in script -->
        <label for="how-video">Video Courses</label>
        <input
          id="how-video"
          name="how"
          type="radio"
          value="video"
          v-model="how"
        />
      </div>
      <div>
        <!-- v-model 2-way-binds the data to the data in script -->
        <label for="how-blogs">Blogs</label>
        <input
          id="how-blogs"
          name="how"
          type="radio"
          value="blogs"
          v-model="how"
        />
      </div>
      <div>
        <!-- v-model 2-way-binds the data to the data in script -->
        <label for="how-other">Other</label>
        <input
          id="how-other"
          name="how"
          type="radio"
          value="other"
          v-model="how"
        />
      </div>
    </div>

    <div class="form-control">
      <!-- v-model 2-way-binds the RATINGCONTROLE.VUE page here -->
      <rating-control v-model="rating"></rating-control>
    </div>

    <!-- AGREE TO TERMS OF SERVICE?  -->
    <!-- SINGLE checkbox can evaluate to true or false -->
    <div class="form-control">
      <label for="confirm-terms">Agree to terms of use?</label>
      <input
        type="checkbox"
        id="confirm-terms"
        name="confirm-terms"
        v-model="confirm"
      />
    </div>
    <div>
      <!-- when a button is clicked in a form, it is submitted.  prevent is on the form tag -->
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import RatingControl from './RatingControl.vue';

export default {
  components: {
    RatingControl
  },
  data() {
    return {
      userName: '',
      userAge: null,
      referrer: 'wom',
      interest: [],
      how: null,
      confirm: false,
      rating: null,
      userNameValidity: 'pending'
    };
  },
  methods: {
    submitForm() {
      console.log('Username: ' + this.userName);
      this.userName = '';
      console.log('User age:');
      console.log(this.userAge);
      console.log(this.userAge + 5);
      console.log(this.$refs.ageInput.value + 5);
      console.log(31);
      this.userAge = null;
      console.log('Referrer: ' + this.referrer);
      this.referrer = 'wom';
      console.log('Checkboxes');
      console.log(this.interest);
      console.log('Radio buttons');
      console.log(this.how);
      this.interest = [];
      this.how = null;
      console.log('Confirm?');
      console.log(this.confirm);
      this.confirm = false;
      console.log('Rating');
      console.log(this.rating);
      this.rating = null;
    },
    validateInput() {
      if (this.userName === '') {
        this.userNameValidity = 'invalid';
      } else {
        this.userNameValidity = 'valid';
      }
    }
  }
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input {
  border-color: red;
}

.form-control.invalid label {
  color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
