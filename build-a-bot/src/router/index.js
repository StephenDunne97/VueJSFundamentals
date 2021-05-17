import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../builder/RobotBuilder.vue';

// Vue.use(Router); // Tells Vue that we want to use routing
const routes = [
  {
    path: '/', // URL
    name: 'Home',
    component: HomePage, // Component to be displayed
  },
  {
    path: '/build',
    name: 'Build',
    component: RobotBuilder,
  }, // Array of routes
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
