import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    cart: [],
    parts: null,
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    getParts({ commit }) { // Proxy configured in vue.config.js
      axios.get('/api/parts') // Axios calls the API
        .then((result) => commit('updateParts', result.data)) // Commit updated data to the store via the update parts mutation
        .catch(console.error);
    },
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot]; // Getting the contents of the cart
      axios.post('/api/cart', cart) // Posting the cart to the cart API endpoint
        .then(() => commit('addRobotToCart', robot)); // Inserts robot to local store
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale);
    },
  },
});
