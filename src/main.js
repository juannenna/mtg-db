import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import HelloWorld from '@/components/HelloWorld'
import NavBar from '@/components/NavBar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('NavBar', NavBar)
Vue.component('HelloWorld', HelloWorld)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
