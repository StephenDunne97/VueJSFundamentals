import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../builder/RobotBuilder.vue';

Vue.use(Router); // Tells Vue that we want to use routing

export default new Router({ // Exporting Routing object
  routes: [{
    path: '/', // URL
    name: 'Home',
    component: HomePage, // Component to be displayed
  },
  {
    path: '/build',
    name: 'Build',
    component: RobotBuilder,
  }], // Array of routes
});
