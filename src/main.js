import Vue from 'vue'
import App from './App.vue'
import components from './components'
import templates from './templates'
import store from './store'
import router from './routes'

Vue.config.productionTip = false

components.forEach(component => {
  Vue.component(component.name, component);
});

templates.forEach(component => {
  Vue.component(component.name, component);
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')