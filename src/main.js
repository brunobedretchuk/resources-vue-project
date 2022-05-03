import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/UI/BaseButton.vue'
import TheCard from './components/UI/card-structure/TheCard.vue'


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


const app = createApp(App);

app.component('base-button' , BaseButton);
app.component('the-card' , TheCard);

app.mount('#app');





