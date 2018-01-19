import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Clubs from '@/components/Clubs'
import Event from '@/components/Event'
import Person from '@/components/Person'
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
      path: '/event',
      name: 'Event',
      component: Event
    }, {
      path: '/person',
      name: 'Person',
      component: Person
    }, {
      path: '*',
      name: 'FourOhFour',
      component: FourOhFour
    }
  ]
})
