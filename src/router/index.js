import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Clubs from '@/components/Clubs'
import Club from '@/components/Club'
import Event from '@/components/Event'
import Person from '@/components/Person'
import About from '@/components/About'
import FourOhFour from '@/components/FourOhFour'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/clubs',
      name: 'Clubs',
      component: Clubs
    }, {
      path: '/club',
      name: 'Club',
      component: Club
    }, {
      path: '/event',
      name: 'Event',
      component: Event
    }, {
      path: '/person',
      name: 'Person',
      component: Person
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '*',
      name: 'FourOhFour',
      component: FourOhFour
    }
  ]
})
