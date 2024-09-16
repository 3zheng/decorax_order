import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '@/views/home.vue'
import orders from '@/views/MyOrders.vue'
import cart from '@/views/Cart.vue'
//FERRETERIA
import Bisagra4 from '@/views/product/FERRETERIA/Bisagra4.vue'
import Sujetador from '@/views/product/FERRETERIA/Sujetador.vue'
import Tornillo from '@/views/product/FERRETERIA/Tornillo.vue'
import Silicona from '@/views/product/FERRETERIA/Silicona.vue'
//PERFIL
import Omega from '@/views/product/PERFIL/Omega.vue'
import Angulo from '@/views/product/PERFIL/Angulo.vue'
import Montante from '@/views/product/PERFIL/Montante.vue'
import PA_Transversal12 from '@/views/product/PERFIL/PA_Transversal12.vue'
import PA_Transversal06 from '@/views/product/PERFIL/PA_Transversal06.vue'
import PA_Perimetral from '@/views/product/PERFIL/PA_Perimetral.vue'
import CA_Profilery from '@/views/product/PERFIL/CA_Profilery.vue'
import Solera from '@/views/product/PERFIL/Solera.vue'
import Z_Buna from '@/views/product/PERFIL/Z_Buna.vue'
//PISO
import PF_SPC from '@/views/product/PISO/PF_SPC.vue'
import P_Adhesivo from '@/views/product/PISO/P_Adhesivo.vue'
import A_Autoadhesiva from '@/views/product/PISO/A_Autoadhesiva.vue'
//CIELO MODULAR
import Gypsum595 from '@/views/product/CIELO-MODULAR/Gypsum595.vue'
import PD_PVC from '@/views/product/CIELO-MODULAR/PD_PVC.vue'
//CIELO FALSO PVC
import CFP_Ancho20cm from '@/views/product/CIELO-FALSO-PVC/CFP_Ancho20cm.vue'
import CFP_Ancho25cm from '@/views/product/CIELO-FALSO-PVC/CFP_Ancho25cm.vue'
import CFP_Ancho30cm from '@/views/product/CIELO-FALSO-PVC/CFP_Ancho30cm.vue'
//CORNISA
import CPM_T from '@/views/product/CORNISA/CPM_T.vue'
import CPM_U from '@/views/product/CORNISA/CPM_U.vue'
import CPM_F from '@/views/product/CORNISA/CPM_F.vue'
import CPM_UA from '@/views/product/CORNISA/CPM_UA.vue'
import CPM_H from '@/views/product/CORNISA/CPM_H.vue'
//DRYWALL
import PE_Yeso from '@/views/product/DRYWALL/PE_Yeso.vue'
import Masilla from '@/views/product/DRYWALL/Masilla.vue'
import CD_Drywall from '@/views/product/DRYWALL/CD_Drywall.vue'
//3D
import A_Adhesiva from '@/views/product/The-3D/A_Adhesiva.vue'
import LMA_Adhesiva from '@/views/product/The-3D/LMA_Adhesiva.vue'
//REVESTIMIENTO
import RP_Ancho20cm from '@/views/product/REVESTIMIENTO/RP_Ancho20cm.vue'
import RP_Ancho16cm from '@/views/product/REVESTIMIENTO/RP_Ancho16cm.vue'
import PD_Aluminio from '@/views/product/REVESTIMIENTO/PD_Aluminio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/orders',
    name: 'orders',
    component: orders,
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart,
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
      //FERRETERIA
      {
        path:'/product/Bisagra4',  
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
      //PERFIL
      {
        path:'/product/Omega',
        name:'Omega',
        component:Omega,
        props:true,
      },
      {
        path:'/product/Angulo',
        name:'Angulo',
        component:Angulo,
        props:true,
      },
      {
        path:'/product/Montante',
        name:'Montante',
        component:Montante,
        props:true,
      },
      {
        path:'/product/PA_Transversal12',
        name:'PA_Transversal12',
        component:PA_Transversal12,
        props:true,
      },
      {
        path:'/product/PA_Transversal06',
        name:'PA_Transversal06',
        component:PA_Transversal06,
        props:true,
      },
      {
        path:'/product/PA_Perimetral',
        name:'PA_Perimetral',
        component:PA_Perimetral,
        props:true,
      },
      {
        path:'/product/CA_Profilery',
        name:'CA_Profilery',
        component:CA_Profilery,
        props:true,
      },
      {
        path:'/product/Solera',
        name:'Solera',
        component:Solera,
        props:true,
      },
      {
        path:'/product/Z_Buna',
        name:'Z_Buna',
        component:Z_Buna,
        props:true,
      },
      //PISO
      {
        path:'/product/PF_SPC',
        name:'PF_SPC',
        component:PF_SPC,
        props:true,
      },
      {
        path:'/product/P_Adhesivo',
        name:'P_Adhesivo',
        component:P_Adhesivo,
        props:true,
      },
      {
        path:'/product/A_Autoadhesiva',
        name:'A_Autoadhesiva',
        component:A_Autoadhesiva,
        props:true,
      },
      //CIELO MODULAR
      {
        path:'/product/Gypsum595',
        name:'Gypsum595',
        component:Gypsum595,
        props:true,
      },
      {
        path:'/product/PD_PVC',
        name:'PD_PVC',
        component:PD_PVC,
        props:true,
      },
      //CIELO FALSO PVC
      {
        path:'/product/CFP_Ancho20cm',
        name:'CFP_Ancho20cm',
        component:CFP_Ancho20cm,
        props:true,
      },
      {
        path:'/product/CFP_Ancho25cm',
        name:'CFP_Ancho25cm',
        component:CFP_Ancho25cm,
        props:true,
      },
      {
        path:'/product/CFP_Ancho30cm',
        name:'CFP_Ancho30cm',
        component:CFP_Ancho30cm,
        props:true,
      },      
      //CORNISA
      {
        path:'/product/CPM_T',
        name:'CPM_T',
        component:CPM_T,
        props:true,
      },
      {
        path:'/product/CPM_U',
        name:'CPM_U',
        component:CPM_U,
        props:true,
      },
      {
        path:'/product/CPM_F',
        name:'CPM_F',
        component:CPM_F,
        props:true,
      },
      {
        path:'/product/CPM_UA',
        name:'CPM_UA',
        component:CPM_UA,
        props:true,
      },
      {
        path:'/product/CPM_H',
        name:'CPM_H',
        component:CPM_H,
        props:true,
      },
      //DRYWALL
      {
        path:'/product/CD_Drywall',
        name:'CD_Drywall',
        component:CD_Drywall,
        props:true,
      },
      {
        path:'/product/PE_Yeso',
        name:'PE_Yeso',
        component:PE_Yeso,
        props:true,
      },
      {
        path:'/product/Masilla',
        name:'Masilla',
        component:Masilla,
        props:true,
      },
      //3D
      {
        path:'/product/A_Adhesiva',
        name:'A_Adhesiva',
        component:A_Adhesiva,
        props:true,
      },
      {
        path:'/product/LMA_Adhesiva',
        name:'LMA_Adhesiva',
        component:LMA_Adhesiva,
        props:true,
      },
      //REVESTIMIENTO
      {
        path:'/product/RP_Ancho20cm',
        name:'RP_Ancho20cm',
        component:RP_Ancho20cm,
        props:true,
      },
      {
        path:'/product/RP_Ancho16cm',
        name:'RP_Ancho16cm',
        component:RP_Ancho16cm,
        props:true,
      },
      {
        path:'/product/PD_Aluminio',
        name:'PD_Aluminio',
        component:PD_Aluminio,
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
