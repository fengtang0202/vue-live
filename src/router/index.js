import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/content'
import Chat from '@/components/chat'
import Ptext from '@/components/ptext'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Content',
      component: Content,
      children: [
        {
          redirect: '/',
          component: Chat
        },
        {
          path: '/chat',
          component: Chat
        },
        {
          path: '/ptext',
          component: Ptext
        }
      ]
    }
  ]
})
