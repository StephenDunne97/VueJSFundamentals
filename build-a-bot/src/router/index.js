import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../builder/RobotBuilder.vue';
import PartsInfo from '../parts/PartsInfo.vue';

const routes = [  // Array of routes
  {
    path: '/', // URL
    name: 'Home',
    component: HomePage, // Component to be displayed
  },
  {
    path: '/build',
    name: 'Build',
    component: RobotBuilder,
  },
  {
    path: '/parts',
    name: 'Parts',
    component: PartsInfo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
