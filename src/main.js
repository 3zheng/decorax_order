import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import '@/style/global.css'
import enLocale from 'element-ui/lib/locale/lang/en' 
import esLocale from 'element-ui/lib/locale/lang/es' 
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'

//选择系统语言
const browserLanguage = navigator.language || navigator.userLanguage
let lang

if (browserLanguage.startsWith('zh')) {
  lang = zhLocale
} else if (browserLanguage.startsWith('es')) {
  lang = esLocale
}else{
  lang = enLocale
}

Vue.config.productionTip = false;
Vue.use(ElementUI, {locale:lang});
locale.use(lang)
Vue.prototype.axios = axios;

//存放购物车数据的全局变量，以保证在反复跳转后，订单信息不会丢失
Vue.prototype.$cart = [];


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

