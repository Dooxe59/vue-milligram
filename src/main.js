import Vue from 'vue';
import App from './App.vue';

require('../node_modules/milligram/dist/milligram.min.css');

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
