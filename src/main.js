import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase';
import firebaseConfig from "../firebaseConfig";

firebase.initializeApp(firebaseConfig.data);
createApp(App).mount('#app')
