import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HighDive from './views/HighDive.vue'
import ForArtists from './views/ForArtists.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/HighDive',
      name: 'high-dive',
      component: HighDive
    },
    {
      path: '/ForArtists',
      name: 'for-artists',
      component: ForArtists
    }
  ]
})