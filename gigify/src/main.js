import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Carousel3d from 'vue-carousel-3d';
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(Carousel3d);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')