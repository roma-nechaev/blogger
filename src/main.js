import Vue from 'vue';
import './plugins/bootsrap-vue.js';
import './plugins/font-awesome.js';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
