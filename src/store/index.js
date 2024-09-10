import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//存放购物车数据的全局变量，以保证在反复跳转后，订单信息不会丢失
//Vue.prototype.$cart = [];

export default new Vuex.Store({
  state: {
    cart:[],
    username:"user1",
  },
  getters: {
    getCart(state){
      return state.cart;
    },
    getUserName(state){
      return state.username;
    },
  },
  //同步方法
  mutations: {
    updateCart(state, cart){
      state.cart = cart;
    },
    updateUserName(state, username){
      state.username = username;
    },
  },
  //异步方法
  actions: {
    asyncUpdateCart(context, cart){
      context.commit('updateCart',cart);
    },
    asyncUpdateCart(context, username){
      context.commit('updateUserName',username);
    },
  },
  modules: {
  }
})
