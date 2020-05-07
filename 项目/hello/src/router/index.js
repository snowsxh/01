import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 重定向
    { path: '/', redirect: '/Login'},
    { path: '/Login', component: Login}
  ]
})

export default router
