<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="register()">
      <label>
        <input type="text" v-model="name" placeholder="Name...">
      </label>
      <br>
      <label>
        <input type="email" v-model="email" placeholder="Email...">
      </label>
      <br>
      <label>
        <input type="password" v-model="password" placeholder="Password...">
      </label>
      <br>
      <button>Register</button>
      <br>
      <span>{{authStatus}}</span>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Register',
  data() {
    return {
      name: "",
      email: "",
      password: "",
      authStatus: ""
    }
  },
  methods: {
    register() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
        if(!user) return;
        user.user.updateProfile({
          displayName: this.name
        });
        this.authStatus = "Registered!"
      })
      .catch(error => {
        this.authStatus = error.message
      });
    },
  }
}
</script>
