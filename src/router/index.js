import { createRouter, createWebHistory } from 'vue-router'
//import store from '../store'
//import {usersJson} from '../assets/users'
import Home from '../views/Home.vue'
import UserProfile from '../views/UserProfile.vue'
import Admin from '../views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:id',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  /* const user = store.state.user

  if(!user){
    await store.dispatch('setUser', usersJson[0])
  } */

  const isAdmin = false;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)

  if(requiresAdmin && !isAdmin) next({name: 'Home'})
  else next()
})

export default router
