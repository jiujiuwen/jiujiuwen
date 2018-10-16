import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/components/resume/resume'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
      {
          path: '/',
          redirect: '/resume'
      },
      {
          path: '/resume',
          name: 'Resume',
          component: Resume
      }
  ]
})
