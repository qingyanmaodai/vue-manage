import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import './assets/less/index.less';

import router from './router'
import store from './store'
import http from "axios";
import '../api/mock.js';


Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$http = http

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
