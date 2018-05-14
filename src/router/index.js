/*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/
import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/views/Main'
import Dashboard from '@/components/views/Dashboard'
import AllCards from '@/components/views/AllCards'
import SingleCard from '@/components/views/SingleCard'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      children: [{
          path: '',
          component: Dashboard,
          name: 'Main',
          description: 'dashboard'
      	}, {
          path: 'cards',
          component: AllCards,
          name: 'cardsOverview',
          description: 'All Cards Overview'
        }, {
          path: 'cards/:id',
          component: SingleCard,
          name: 'singleCard',
          description: 'All Cards Overview'
        }]
    }]
})
