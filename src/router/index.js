import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import FirstRoute from '../components/FirstRoute'
import FirstRouteChild from '../components/FirstRouteChild'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/firstroute/:name',
      name: 'FirstRoute',
      component: FirstRoute,
      children: [
        {
          path: 'child',
          component: FirstRouteChild
        }
      ]
    }
  ]
})
