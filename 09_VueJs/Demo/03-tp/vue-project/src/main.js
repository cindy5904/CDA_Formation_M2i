import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import contact from '../src/data/liste.json'
import router from './router'


const app = createApp(App);
app.use(router);
const contacts = ref(contact);
 
app.provide("contacts",{
    contacts
  });
app.mount('#app')
