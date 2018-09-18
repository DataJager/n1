import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel';

new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.use(VueCarousel);
