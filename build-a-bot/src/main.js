import { createApp, Vue } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).mount('#app');

new Vue({
  render: h => h(App),
  router,
}).mount('#app');
