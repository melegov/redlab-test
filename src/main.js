import { createApp } from 'vue';
import App from './App.vue';
import VueAnimateOnScroll from 'vue3-animate-onscroll';

const app = createApp(App);
app.use(VueAnimateOnScroll);
app.mount('#app');
