<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="signIn()">
      <label>
        <input type="email" v-model="email" placeholder="Email...">
      </label>
      <br>
      <label>
        <input type="password" v-model="password" placeholder="Password...">
      </label>
      <br>
      <button>Login</button>
      <br>
      <span>{{authStatus}}</span>
    </form>
    <br>
    <button @click="signOut">Sign out</button>
    <br><br><br>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  data() {
    return {
      email: "",
      password: "",
      authStatus: ""
    }
  },
  methods: {
    signIn() {
      firebase.auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.authStatus = 'Authorized'
          })
          .catch(error => {
            this.authStatus = error.message
          });
    },
    signOut() {
      firebase.auth()
          .signOut()
          .then(() => {
            this.authStatus = 'Unauthorized'
          })
          .catch(error => {
            this.authStatus = error.message
          });
    }
  }
}
</script>
