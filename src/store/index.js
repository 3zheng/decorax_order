import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//存放购物车数据的全局变量，以保证在反复跳转后，订单信息不会丢失
//Vue.prototype.$cart = [];

export default new Vuex.Store({
  state: {
    cart: new Map(),
    username:"user1",
    address:"我是收货地址",
    productDict: new Map([  //产品的信息表
      ['4-AB',"BISAGRA 4''"],
      ['4-AC',"BISAGRA 4''"],
      ['4-SN',"BISAGRA 4''"],
    ]),
  },
  getters: {
    getCart(state){
      return state.cart;
    },
    getUserName(state){
      return state.username;
    },
    getAddress(state){
      return state.address;
    },
    getProductDict(state){
      return state.productDict;
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
    updateAddress(state, address){
      state.address = address;
    },
    updateProductDict(state, productDict){
      state.productDict = productDict;
    },
  },
  //异步方法
  actions: {
    asyncCart(context, cart){
      context.commit('updateCart',cart);
    },
    asyncUserName(context, username){
      context.commit('updateUserName',username);
    },
    asyncAddress(context, address){
      context.commit('updateAddress',address);
    },
    asyncProductDict(context, productDict){
      context.commit('updateProductDict',productDict);
    },
  },
  modules: {
  },
})
