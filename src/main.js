import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [

  { path : '', name : 'home', component : () => import('@/views/Home.vue')  },
  { path : '/request', name : 'request', component : () => import('@/views/Request.vue')  },
  { path : '/configuration', name : 'configuration', component : () => import('@/views/Configuration.vue')  },
  { path : '/report', name : 'report', component : () => import('@/views/Report.vue')  },
  { path : '/guide', name : 'guide', component : () => import('@/views/Guide.vue')  },
 
]

const router = createRouter({

  routes,
  history: createWebHistory(),

})


createApp(App).use(router).mount('#app')
