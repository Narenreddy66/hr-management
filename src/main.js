import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import paginate from 'vuejs-paginate-next';
const app = createApp(App);
app.use(router);
app.use(paginate)
app.mount('#app');


