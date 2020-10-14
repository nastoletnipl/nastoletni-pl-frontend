import { createApp } from 'vue';
import App from './App.vue';
import firebase from 'firebase';
import firebaseConfig from "../firebaseConfig";
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUser);

firebase.initializeApp(firebaseConfig.data);
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router).mount('#app');
