import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '@/views/home.vue'
import orders from '@/views/MyOrders.vue'
import Bisagra4 from '@/views/product/FERRETERIA/Bisagra4.vue'
import Sujetador from '@/views/product/FERRETERIA/Sujetador.vue'
import Tornillo from '@/views/product/FERRETERIA/Tornillo.vue'
import Silicona from '@/views/product/FERRETERIA/Silicona.vue'
import Omega from '@/views/product/PERFIL/Omega.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/orders',
    name: 'orders',
    component: orders,
  },
  {
    path: '/',
    //name: 'home', //有默认子路由就不需要name
    component: home,
    children:[     
      {
        path:'',  //路径为空的话就会默认渲染这个路由
        name:'defaultTable',
        component:Bisagra4,
        props:true,
      },
      {
        path:'/product/Bisagra4',  //路径为空的话就会默认渲染这个路由
        name:'Bisagra4',
        component:Bisagra4,
        props:true,
      },
      {
        path:'/product/Sujetador',
        name:'Sujetador',
        component:Sujetador,
        props:true,
      },
      {
        path:'/product/Tornillo',
        name:'Tornillo',
        component:Tornillo,
        props:true,
      },
      {
        path:'/product/Silicona',
        name:'Silicona',
        component:Silicona,
        props:true,
      },
      {
        path:'/product/Omega',
        name:'Omega',
        component:Omega,
        props:true,
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
