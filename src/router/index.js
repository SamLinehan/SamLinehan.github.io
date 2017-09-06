import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Work from '@/components/Work'
import Resume from '@/components/Resume'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
