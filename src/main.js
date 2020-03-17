// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'

import { store } from './store/store';

import {routes} from './routes/routes';


Vue.use(VueRouter);
Vue.use(BootstrapVue)
const router = new VueRouter({
  routes,
  mode:'history'
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
