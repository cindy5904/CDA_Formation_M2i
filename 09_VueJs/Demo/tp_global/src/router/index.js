import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth';
import HomeView from '../views/HomeView.vue'
import CharacterView from '../views/CharacterView.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/personnages',
      name: 'Characters',
      component: CharacterView,
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();
        if (authStore.isLoggedIn) {
          next(); 
        } else {
          next('/login'); 
        }
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }

   
  ]
})

export default router
