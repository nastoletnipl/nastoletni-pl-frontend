import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase';
import firebaseConfig from "../firebaseConfig";
import router from './router'

firebase.initializeApp(firebaseConfig.data);
createApp(App).use(router).mount('#app')
