import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import HelloWorld from '@/components/HelloWorld'
import NavBar from '@/components/NavBar'
import Multiselect from 'vue-multiselect'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { card, cardTitles } from '@/filters'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.filter('card', card)
Vue.filter('cardTitles', cardTitles)
Vue.component('NavBar', NavBar)
Vue.component('Multiselect', Multiselect)
Vue.component('HelloWorld', HelloWorld)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
