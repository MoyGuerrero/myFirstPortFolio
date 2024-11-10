import LayoutView from '@/common/layout/LayoutView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: '/' },
      component: LayoutView,
      children: [
        { path: '/', name: '/', component: () => import('@/common/view/SobremiView.vue') },
        { path: 'Experiencia', name: 'mi-experiencia', component: () => import('../common/view/ExperienciaView.vue') },
        { path: 'Contacto', name: 'contacto', component: () => import('@/common/view/ContactoView.vue') },
        { path: 'Proyectos', name: 'proyectos', component: () => import('@/common/view/ProjectView.vue') },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
