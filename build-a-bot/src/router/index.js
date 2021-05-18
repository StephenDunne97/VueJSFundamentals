import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../builder/RobotBuilder.vue';
import PartsInfo from '../parts/PartsInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import RobotBases from '../parts/RobotBases.vue';
import SidebarStandard from '../sidebars/SidebarStandard.vue';
import SidebarBuild from '../sidebars/SidebarBuild.vue';
import ShoppingCart from '../cart/ShoppingCart.vue';

const routes = [ // Array of routes
  {
    path: '/', // URL
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: SidebarStandard,
    }, // Component to be displayed
  },
  {
    path: '/build',
    name: 'Build',
    components: {
      default: RobotBuilder,
      sidebar: SidebarBuild,
    },
  },
  {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [
      {
        name: 'BrowseHeads',
        path: 'heads',
        component: RobotHeads,
      },
      {
        name: 'BrowseArms',
        path: 'arms',
        component: RobotArms,
      },
      {
        name: 'BrowseTorsos',
        path: 'torsos',
        component: RobotTorsos,
      },
      {
        name: 'BrowseBases',
        path: 'bases',
        component: RobotBases,
      }],
  },
  {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartsInfo,
    props: true,
    beforeEnter(to, from, next) {
      const isValidId = Number.isInteger(Number(to.params.id));
      next(isValidId);
    },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
