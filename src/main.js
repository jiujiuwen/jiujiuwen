import Vue from 'vue'
import { Button, Select } from 'element-ui';
import App from './App'
import router from './router';

Vue.use(Button);
Vue.use(Select);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
