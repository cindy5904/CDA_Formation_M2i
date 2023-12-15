import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DetailsView from '../views/DetailsView.vue';

const router = createRouter({
    history : createWebHistory(),
    routes : [
      {path: '/', component : HomeView},
      {path: '/detail/:id' , component : DetailsView},
    ]
  }
  );
  export default router;
