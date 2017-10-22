import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Club from '@/components/Club'
import Event from '@/components/Event'
import Person from '@/components/Person'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/club/:id',
      name: 'Club',
      component: Club,
      props: true
    }, {
      path: '/event',
      name: 'Event',
      component: Event
    }, {
      path: '/person',
      name: 'Person',
      component: Person
    }
  ]
})
