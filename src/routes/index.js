import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: App }
]

export default new VueRouter({
    mode: 'history',
    routes
})