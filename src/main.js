import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import Vuelidate from 'vuelidate'


import { routes } from './routes'

import VideoBg from 'vue-videobg'

Vue.component('video-bg', VideoBg)

Vue.use(Vuelidate);

Vue.use(VueRouter);
const router = new VueRouter({
	mode: 'history',
	routes
});





new Vue({
  el: '#app',
  router,  
  render: h => h(App)
})
