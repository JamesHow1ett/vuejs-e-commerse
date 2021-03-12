import { createApp } from 'vue';
import App from './App.vue';
import store from './vuex/store.js';

const eCommerceApp = createApp(App);

eCommerceApp.use(store);
eCommerceApp.mount('#app');
